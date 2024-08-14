import { RegisterResponse } from '@/types/auth';
import sliceCreator from '..';

const registerSlice = sliceCreator<RegisterResponse>('register', '/register', 'POST');

const { reducer: registerReducer, asyncAction: registerAction, clearData: clearRegisterData } = registerSlice;

export default registerReducer;
export { registerAction, clearRegisterData };