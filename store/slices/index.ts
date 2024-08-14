import { apiRequest } from '@/app/server-actions/actions';
import { createAsyncThunk, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

interface SliceState<T> {
  loading: boolean;
  successData: T | null;
  error: boolean;
  errorInfo: string | null;
}

export default function sliceCreator<T>(sliceName: string, endPoint: string, method: 'POST' | 'PATCH' | 'DELETE') {
  const action = createAsyncThunk(
    `${sliceName}/${method}`,
    async (data: any, { rejectWithValue }) => {
      try {
        const response = await apiRequest<T>({
          method,
          endpoint: data?.endPoint || endPoint,
          payload: data,
        });
        return response.data;
      } catch (err: any) {
        return rejectWithValue(err.response.data);
      }
    }
  );

  const clearData = `${method.toUpperCase()}/clear`;

  const slice = createSlice({
    name: sliceName.toUpperCase(),
    initialState: {
      loading: false,
      successData: null,
      error: false,
      errorInfo: null,
    } as SliceState<T>,
    reducers: {
      [clearData]: (state) => {
        state.loading = false;
        state.successData = null;
        state.error = false;
        state.errorInfo = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(action.pending, (state) => {
          state.loading = true;
          state.successData = null;
          state.error = false;
          state.errorInfo = null;
        })
        .addCase(action.rejected, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.successData = null;
          state.error = true;
          state.errorInfo = action.payload;
        })
        .addCase(action.fulfilled, (state, action: PayloadAction<T | undefined>) => {
          state.loading = false;
          state.successData = (action.payload ?? ({ success: true } as T)) as Draft<T>;
          state.error = false;
          state.errorInfo = null;
        });
    },
  });

  return {
    reducer: slice.reducer,
    asyncAction: action,
    clearData: slice.actions[clearData],
  };
}