"use client";
import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";



const ProjectDetails = () => {
  return (
    <>
      <h3 className="text-xl">Project 1</h3>
      <div className="grid grid-cols-3 lg:grid-cols-2 gap-2 items-center mt-3">
        <span className="col-span-2 lg:col-span-1 flex flex-row ">
          <span className="flex-grow">By Manikanta</span>
        </span>

        <div className="flex gap-2 items-center col-span-1 justify-self-end">
          <div className="tooltip tooltip-info" data-tip="Previous">
            <button className="p-2">
              <IoIosArrowUp />
            </button>
          </div>
          <div className="tooltip tooltip-info" data-tip="Next">
            <button className="p-2">
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex flex-row gap-2 my-3  border p-4 text-black rounded shadow"
        data-theme="light"
      >
        <span className="text-sm font-semibold">Status: Open</span>
        <div className="divider divider-secondary divider-horizontal"></div>
        <span className="text-sm font-semibold">Deadline: 24-06-2024</span>
      </div>
      <div className="rounded text-black shadow p-4 " data-theme="light">
        <h3 className="text-xl">Description</h3>

        <p>This is a possible description or not</p>
      </div>
      <div className="rounded text-black shadow p-4 my-3" data-theme="cupcake">
        <div className="flex flex-row flex-wrap justify-between gap-2">
        <h3 className="text-xl mb-3">Team Members Assigned: </h3>
        <h3 className="text-lg mb-3">Add+ </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 items-center">
          <div className="col-span-1   items-center">
            <div className="flex flex-row gap-2 items-center justify-between">
              <Image
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full w-10 h-10"
              />
              <div className="flex-grow">
                <p className="text-sm font-semibold">Manikanta Maduri</p>
                <p className="text-sm">Developer</p>
              </div>
              <div className="flex flex-row gap-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1   items-center">
            <div className="flex flex-row gap-2 items-center justify-between">
              <Image
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full w-10 h-10"
              />
              <div className="flex-grow">
                <p className="text-sm font-semibold">Manikanta</p>
                <p className="text-sm">Tester</p>
              </div>
              <div className="flex flex-row gap-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1   items-center">
            <div className="flex flex-row gap-2 items-center justify-between">
              <Image
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full w-10 h-10"
              />
              <div className="flex-grow">
                <p className="text-sm font-semibold">Manikanta</p>
                <p className="text-sm">UI/UX Designer</p>
              </div>
              <div className="flex flex-row gap-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
