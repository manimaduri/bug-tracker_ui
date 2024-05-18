"use client";
import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import SelectWithImage, { OptionType } from "../common/SelectWithImage";

const options: OptionType[] = [
  {
    value: "svelte",
    label: "Svelte",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    value: "vue",
    label: "Vue",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    value: "react",
    label: "React",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
];


const BugDetails = () => {
  return (
    <>
      <h3 className="text-xl">Login Issue</h3>
      <div className="grid grid-cols-5 lg:grid-cols-3 gap-2 items-center mt-3">
        <span className="col-span-2 lg:col-span-1 flex flex-row ">
          <span className="flex-grow">By Manikanta</span>

          <div className="divider divider-horizontal divider-accent"></div>
        </span>
        <span className="flex flex-row gap-2 items-center col-span-2 lg:col-span-1">
          <FaFolderOpen /> Project Name
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
        <span className="text-sm font-semibold">Priority: High</span>
      </div>
      <div className="rounded text-black shadow p-4 " data-theme="light">
        <h3 className="text-xl">Description</h3>
        <Image
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt="bug"
          width={300}
          height={300}
          className="rounded my-2"
          priority
        />
        <p>This is a possible description or not</p>
      </div>
      <div className="rounded text-black shadow p-4 my-3" data-theme="cupcake">
        <h3 className="text-xl mb-3">Bug Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div className="col-span-1  grid grid-cols-3 gap-4 items-center">
            <p className="col-span-1">Assignee</p>
            <SelectWithImage
              menuPlacement="auto"
              options={options}
              className="col-span-2"
            />
          </div>
          <div className="divider divider-primary col-span-1 m-0 h-0 md:hidden"></div>

          <div className="col-span-1 grid grid-cols-3 gap-2 items-center">
            <p className="col-span-1">Status</p>

            <SelectWithImage
              menuPlacement="auto"
              options={options}
              className="col-span-2"
            />
          </div>
          <div className="divider divider-primary col-span-1 m-0 h-0"></div>
          <div className="hidden divider divider-primary col-span-1 m-0 h-0 md:flex"></div>
          <div className="col-span-1 grid grid-cols-3 gap-2 items-center">
            <p className="col-span-1 break-words">Priority</p>

            <SelectWithImage
              menuPlacement="auto"
              options={options}
              className="col-span-2"
            />
          </div>
          <div className="divider divider-primary col-span-1 m-0 h-0 md:hidden"></div>

          <div className="col-span-1 grid grid-cols-3 gap-2 items-center">
            <p className="col-span-1 break-words">Classification</p>

            <SelectWithImage
              menuPlacement="auto"
              options={options}
              className="col-span-2"
            />
          </div>
          <div className="divider divider-primary col-span-1 m-0 h-0 "></div>
          <div className="divider divider-primary col-span-1 m-0 h-0 hidden md:flex"></div>
        </div>
      </div>
      <div className="rounded text-black shadow p-4 my-3" data-theme="cupcake">
        <h3 className="text-xl mb-3">Comments</h3>

        <div className="flex flex-row gap-2 items-center mb-3">
          <Image
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full w-10 h-10"
          />
          <input
            type="text"
            placeholder="Write a comment..."
            className="rounded-lg border border-gray-300 px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="btn btn-xs sm:btn-sm md:btn-md  btn-ghost">
            Submit
          </button>
        </div>
        <div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full w-10 h-10"
            />
            <div className="flex-grow">
              <p className="text-sm font-semibold">Manikanta</p>
              <p className="text-sm">This is a comment</p>
            </div>
            <div className="flex flex-row gap-2">
              <button className="text-gray-500 hover:text-gray-700">
                <FiEdit2 size={16} />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <FiTrash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BugDetails;
