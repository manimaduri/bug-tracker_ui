import Dashboard from '@/components/dashboard';
import { Metadata } from 'next';
import React from 'react'

export const metadata : Metadata = {
    title: 'Dashboard - Bug Tracker',
    description: 'Dashboard page'
};  

const DashboardPage = () => {
  return (
    <Dashboard/>
  )
}

export default DashboardPage