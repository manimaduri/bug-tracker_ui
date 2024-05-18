"use client";
import { AiOutlineLock } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import OrganizationForm from "./OrganizationForm";

export default function Register() {
  const [role, setRole] = useState("");



  const getButtonClass = (buttonRole : string) => {
    let classes = 'btn btn-accent';

    if (role === buttonRole) {
      classes += ' btn-active ';
    } else if (role !== "") {
      classes += ' btn-outline  btn-sm';
    } else {
      classes += ' btn-outline ';
    }

    return classes;
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center w-3/4 lg:w-1/2 p-8  bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-500 rounded-full">
          <AiOutlineLock className="w-8 h-8 text-white" />
        </div>
        <h2 className="mb-2 text-lg font-bold text-gray-700">Sign up</h2>
          
        <div className={`flex ${role === "" ? "flex-col w-3/4" : "flex-row items-center mb-3"} gap-4 `}>
          <button className={getButtonClass("Employee")} onClick={() => setRole("Employee")}>Employee</button>
          <button className={getButtonClass("Organization")} onClick={() => setRole("Organization")}>Organization</button>
        </div>


        {role === "Employee" && <EmployeeForm/>}
        {role === "Organization" && <OrganizationForm />}
        <p className="mt-4 text-sm">
          <Link href="/" className="text-blue-500 hover:text-blue-600">
            Already have an account? Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
