"use client";
import React from "react";
import { useRouter } from "next/navigation";
import BreadCrumb from "../common/BreadCrumb";
import Link from "next/link";

const SelectProject = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur">
      <div className="modal modal-open">
        <div className="modal-box">
          <BreadCrumb title="Select Project" />

          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full mb-4"
          />

          <div className="space-y-4">
            {/* Replace this with your actual data */}
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Link
                  href={`/create-bug/${i}`}
                  className="flex items-center space-x-4 text-white"
                  key={i}
                >
                  <div className="w-10 h-10 rounded-full bg-neutral text-neutral-content flex items-center justify-center">
                    <span className="text-xs">P{i + 1}</span>
                  </div>
                  <span>Project {i + 1}</span>
                </Link>
              ))}
          </div>

          <div className="modal-action">
            <button onClick={handleBack} className="btn">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectProject;
