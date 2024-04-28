import BugDetails from '@/components/bug-details'
import BreadCrumb from '@/components/common/BreadCrumb'
import React from 'react'

const BugDetailsPage = () => {
  return (
    <>
    <BreadCrumb title="Bug Details" />
    <BugDetails/>
    </>
  )
}

export default BugDetailsPage