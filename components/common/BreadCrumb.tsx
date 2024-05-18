import React from 'react'

interface BreadCrumbProps {
    title: string;
  }

const BreadCrumb : React.FC<BreadCrumbProps> = ({title}) => {
  return (
    <h2 className='text-2xl mb-4'>{title}</h2>
  )
}

export default BreadCrumb