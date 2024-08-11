"use server"

import { BASE_URL, REGISTER } from "@/constants";
import { cookies } from 'next/headers';

interface RequestOptions {
  method: string;
  endpoint: string;
  payload?: any;
  headers?: HeadersInit;
}

interface ApiResponse {
  token?: string;
  userId?: string;
  error?: string;
  [key: string]: any;
}

const formatPayload = (payload: any): any => {
  if (!payload) return undefined;
  return payload instanceof FormData ? payload : JSON.stringify(payload);
};

const apiRequest = async ({ method, endpoint, payload, headers = {} }: RequestOptions): Promise<ApiResponse> => {
  try {
    const isFormData = payload instanceof FormData;
    const cookieStore = cookies();
    const token = cookieStore.get('access_token')?.value;

    if (token) {
      // Optionally, add a check to ensure the token is not expired
      // This requires storing the token's expiry time when setting it
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        ...(!isFormData && { 'Content-Type': 'application/json' }),
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...headers,
      },
      body: formatPayload(payload),
    });

    if (!response.ok) {
        const errorResponse = await response.json();
        return errorResponse;
      }

    return await response.json();
  } catch (error : any) {
    console.error('Error during API request:', error);
    return { error: error?.message };
  }
};

export const registerServerAction = async (data: any): Promise<ApiResponse> => {
  const response = await apiRequest({
    method: 'POST',
    endpoint: REGISTER,
    payload: data,
  });

  if (!response.success) {
    console.error('Error during registration:', response.message);
    return response;
  }

  if (response.data.token && response.data.user) {
    const cookieStore = cookies();
    console.log('Setting cookie:', response.data.token);
    console.log('Setting cookie:', response.data.user);
    cookieStore.set('access_token', response.data.token, { 
      path: '/', 
      httpOnly: true, 
      maxAge: 7 * 24 * 60 * 60 // 7 days in seconds
    });
    cookieStore.set('user', response.data.user, { 
      path: '/', 
      maxAge: 7 * 24 * 60 * 60 // 7 days in seconds
    });
  }

  return response;
};