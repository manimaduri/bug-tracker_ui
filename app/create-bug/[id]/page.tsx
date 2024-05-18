import BreadCrumb from '@/components/common/BreadCrumb'
import CreateBug from '@/components/create-bug'
import { Metadata } from 'next';
import React from 'react'

export const metadata : Metadata = {
  title: 'Create Bug - Bug Tracker',
  description: 'Create a Bug page by project id'
};

const CreateBugByIdPage = () => {
  return (
    <>
    <BreadCrumb title="Create a Bug" />
    <CreateBug/>
    </>
  )
}

export default CreateBugByIdPage