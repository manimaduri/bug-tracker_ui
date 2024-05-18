'use client';
import React from 'react';
import Link from "next/link"
import { useFormik } from 'formik';
import loginValidationSchema from './loginValidationSchema';
import { useRouter } from 'next/navigation';
import { AiOutlineLock } from 'react-icons/ai';

export default function Home() {
  const router = useRouter();
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      router.push('/dashboard');
    },
    validateOnChange: true,
  });

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center w-3/4 lg:w-1/2 p-8 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-500 rounded-full">
          <AiOutlineLock className="w-8 h-8 text-white" />
        </div>
        <h2 className="mb-2 text-lg font-bold text-gray-700">Login</h2>
        <form className="w-full" onSubmit={handleSubmit} data-theme="light">
          <input
            className="w-full px-3 py-2 mb-3 border rounded-md outline-none text-sm text-gray-600 placeholder-gray-400"
            type="email"
            name="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          <input
            className="w-full px-3 py-2 mb-3 border rounded-md outline-none text-sm text-gray-600 placeholder-gray-400"
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-500">Remember me</span>
            </label>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-600">Forgot password?</Link>
          </div>
          <button type="submit" className="w-full py-2 mt-4 text-sm font-semibold text-white bg-gray-800 rounded-lg">
            Login
          </button>
        </form>
        <p className="mt-4 text-xs text-blue-500">
        Don&apos;t have an account? <Link href="/register" className=" hover:text-blue-600">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}