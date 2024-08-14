"use server";
import { REGISTER } from "@/constants";
import { apiRequest } from "./actions";
import { cookies } from "next/headers";
import { RegisterResponse } from "@/types/auth";
import { ApiResponse } from "@/types/api";


export const registerServerAction = async (data: any): Promise<ApiResponse<RegisterResponse>> => {
  const response = await apiRequest<RegisterResponse>({
    method: 'POST',
    endpoint: REGISTER,
    payload: data,
  });


  if (response.data?.token && response.data?.user) {
    const cookieStore = cookies();
    console.log('Setting cookie:', response.data.token);
    console.log('Setting cookie:', response.data.user);
    cookieStore.set('access_token', response.data.token, { 
      path: '/', 
      httpOnly: true, 
      maxAge: 7 * 24 * 60 * 60 // 7 days in seconds
    });
  }

  return response;
};