import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../slices/register';

const store = configureStore({
  reducer: {
    registerReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;