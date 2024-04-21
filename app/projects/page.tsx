import Projects from '@/components/projects';
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title: 'Projects - Bug Tracker',
    description: 'Projects page'
};

const ProjectsPage = () => {
  return (
    <Projects/>
  )
}

export default ProjectsPage