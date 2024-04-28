import BreadCrumb from "@/components/common/BreadCrumb";
import SelectProject from "@/components/create-bug/SelectProject";
import React from "react";

const CreateBugPage = () => {
  return (
    <>
      <BreadCrumb title="Create a Bug" />
      <SelectProject />
    </>
  );
};

export default CreateBugPage;
