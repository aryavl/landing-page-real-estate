"use client";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { CloseOutlined } from "@mui/icons-material";
interface Navbarprops{
  open:boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}
const Navbar:React.FC<Navbarprops> = ({open,setOpen}) => {
  return (
    <div>
    <nav className="w-[90%] flex items-center justify-between mx-auto my-5">
      <div>
        <h1 className="lg:text-2xl md:text-sm font-extralight italic">
          {" "}
          <span className="font-bold">XYZ</span> INDUSTRIES
        </h1>
      </div>
      <div className="bg-[#070b36] text-gray-300 text-[14px] font-light md:flex items-center gap-6 lg:px-6 lg:py-4 md:px-4 md:py-2 rounded-full hidden ">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/"}>Property</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <div className="md:flex gap-4 items-center hidden">
        <button className="border border-[#070b36] rounded-full lg:px-4 lg:py-3 md:px-2 md:py-1 ">
          Sign Up
        </button>
        <button className="bg-[#4b9eec] text-gray-200 rounded-full lg:px-4 lg:py-3 md:px-2 md:py-1">
          Sign In
        </button>
      </div>
      <div className="md:hidden">
        {
          open ? (<button
            className="border text-lg border-[#070b36] rounded-md px-2 py-1 hover:scale-110"
            onClick={() => setOpen(false)}
          >
            <CloseOutlined className="text-[#070b36]" />
          </button>) :(<button
            className="border text-lg border-[#070b36] rounded-md px-2 py-1 hover:scale-110"
            onClick={() => setOpen(true)}
          >
            <MenuOpenIcon className="text-[#070b36]" />
          </button>)
        }
        
      </div>
    </nav>
      {open && (
        <div className="w-[100vw] h-[80vh] mt-[10%] flex flex-col gap-4 items-center justify-center text-black ">
          <Link className="py-2 bg-[#070b36] text-gray-200 w-[80%] rounded-full text-center hover:scale-105" href={"/"}>Home</Link>
          <Link className="py-2 bg-[#070b36] text-gray-200 w-[80%] rounded-full text-center hover:scale-105" href={"/"}>About Us</Link>
          <Link className="py-2 bg-[#070b36] text-gray-200 w-[80%] rounded-full text-center hover:scale-105" href={"/"}>Property</Link>
          <Link className="py-2 bg-[#070b36] text-gray-200 w-[80%] rounded-full text-center hover:scale-105" href={"/"}>Services</Link>
          <Link className="py-2 bg-[#070b36] text-gray-200 w-[80%] rounded-full text-center hover:scale-105" href={"/"}>Contact</Link>
          <button className="border border-[#070b36] rounded-full  py-2 w-[80%]">
          Sign Up
        </button>
        <button className="bg-[#4b9eec] text-gray-200 rounded-full py-2 w-[80%]">
          Sign In
        </button>
        </div>
      )}
      </div>
  );
};

export default Navbar;
