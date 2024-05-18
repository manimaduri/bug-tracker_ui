import BugDetails from '@/components/bug-details'
import BreadCrumb from '@/components/common/BreadCrumb'
import { Metadata } from 'next';
import React from 'react'

export const metadata : Metadata = {
  title: 'View Bug - Bug Tracker',
  description: 'View Details of a Bug'
};

const BugDetailsPage = () => {
  return (
    <>
    <BreadCrumb title="Bug Details" />
    <BugDetails/>
    </>
  )
}

export default BugDetailsPage