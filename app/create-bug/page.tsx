import BreadCrumb from "@/components/common/BreadCrumb";
import SelectProject from "@/components/create-bug/SelectProject";
import { Metadata } from "next";
import React from "react";

export const metadata : Metadata = {
  title: 'Create Bug - Bug Tracker',
  description: 'Create Bug page'
};

const CreateBugPage = () => {
  return (
    <>
      <BreadCrumb title="Create a Bug" />
      <SelectProject />
    </>
  );
};

export default CreateBugPage;
