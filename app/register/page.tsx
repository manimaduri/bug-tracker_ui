import Register from '@/components/register'
import { Metadata } from 'next';
import React from 'react';

export const metadata : Metadata = {
    title: 'Register - Bug Tracker',
    description: 'Register page'
}; 

const RegisterPage = () => {
  return (
    <Register/>
  )
}

export default RegisterPage