"use client";
import { RegisterResponse } from '@/types/auth';
import sliceCreator from '..';
import { REGISTER } from '@/constants';

const registerSlice = sliceCreator<RegisterResponse>('registerAction', REGISTER, 'POST');

const { reducer: registerReducer, asyncAction: registerAction, clearData: clearRegisterDataAction } = registerSlice;

export default registerReducer;
export { registerAction, clearRegisterDataAction };