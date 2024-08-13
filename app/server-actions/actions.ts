"use server";

import { BASE_URL } from "@/constants";
import { ApiResponse } from "@/types/api";
import { cookies } from 'next/headers';

interface RequestOptions {
  method: string;
  endpoint: string;
  payload?: any;
  headers?: HeadersInit;
}


const formatPayload = (payload: any): any => {
  if (!payload) return undefined;
  return payload instanceof FormData ? payload : JSON.stringify(payload);
};

export const apiRequest = async <T>({ method, endpoint, payload, headers = {} }: RequestOptions): Promise<ApiResponse<T>> => {
  try {
    const isFormData = payload instanceof FormData;
    const cookieStore = cookies();
    const token = cookieStore.get('access_token')?.value;

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
      return { data: errorResponse };
    }

    const data: T = await response.json();
    return { data };
  } catch (error: any) {
    console.error('Error during API request:', error);
    return { error: error?.message };
  }
};