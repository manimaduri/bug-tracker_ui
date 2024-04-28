import BreadCrumb from '@/components/common/BreadCrumb'
import CreateBug from '@/components/create-bug'
import React from 'react'

const CreateBugByIdPage = () => {
  return (
    <>
    <BreadCrumb title="Create a Bug" />
    <CreateBug/>
    </>
  )
}

export default CreateBugByIdPage