"use client";
import React from "react";
import {
  AiOutlineLogout,
} from "react-icons/ai";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { isActiveLink } from "@/utils/isActiveLink";
import { loggedInMenuItems } from "@/utils/menuData";



const Sidebar = () => {
  const router = useRouter();
  const path = usePathname();

 

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    path !== "/" &&
    path !== "/register" && (
      <div className="hidden lg:flex lg:flex-col lg:w-64  text-white  px-4 pt-3 pb-8 border-r-2 border-gray-700">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul>
          {loggedInMenuItems.map((link) => (
            <li key={link.id} className={`mb-2 hover:bg-gray-700 px-2 py-1 rounded `}>
              <Link href={link.href} className={`${isActiveLink(path, link.href) ? 'text-blue-500' : 'text-white'}`}>
                <span className="flex items-center">
                  <link.icon className="h-6 w-6 mr-2" />
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
          <li
            className="mb-2 hover:bg-gray-700 px-2 py-1 rounded"
            onClick={handleLogout}
          >
            <span className="flex items-center">
              <AiOutlineLogout className="h-6 w-6 mr-2" />
              Logout
            </span>
          </li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;