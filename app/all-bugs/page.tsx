import BugsTable from "@/components/bugs-table";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const AllBugsPage = () => {
  return (
    <>
      <h3 className="mb-4 text-2xl flex  justify-between">
        <span>All Bugs</span>
        <Link href="create-bug" className="text-white text-sm flex justify-center items-center">
          Create Bug
          <FaPlus className="mx-1" />
        </Link>
      </h3>
      <BugsTable />
    </>
  );
};

export default AllBugsPage;
