import BreadCrumb from '@/components/common/BreadCrumb';
import ProjectDetails from '@/components/project-details';
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title: 'View Project - Bug Tracker',
    description: 'Projects page'
};

const ProjectsPage = () => {
  return (
    <>
    <BreadCrumb title="View Project" />
    <ProjectDetails/>
    </>
  )
}

export default ProjectsPage