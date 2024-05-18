import BreadCrumb from "@/components/common/BreadCrumb";
import CreateProject from "@/components/new-project";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create Project - Bug Tracker",
  description: "Projects page",
};

const ProjectsPage = () => {
  return (
    <>
      <BreadCrumb title="Create Projects" />
      <CreateProject />
    </>
  );
};

export default ProjectsPage;
