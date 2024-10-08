"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useColorMode } from "@chakra-ui/react";
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi"; 
import { default as logo } from "../assests/logo.png";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between md:px-10 px-2 shadow-md h-24">
      <div className="logo flex mt-2">
      <img src={logo.src} alt="Logo Image" className="w-36 h-20" />
        <span className="grey-txt w-32 font-bold text-xl pt-7 ml-2">GDG RCOEM</span>
      </div>

      <div className="md:hidden text-2xl mt-5" onClick={toggleMenu}>
        {menuOpen ? (
          <FiX className="grey-txt" />
        ) : (
          <FiMenu className="grey-txt" />
        )}
      </div>
      <div
        className={`md:flex items-center gap-12 ${
          menuOpen ? "flex pb-2 pt-2 gap-4" : "hidden"
        } flex-col md:flex-row md:static absolute top-16 left-0 w-full md:w-auto ${
          !menuOpen ? "bg-transparent" : "bg-slate-50"
        } z-10`}
      >
        <ul className="grey-txt flex flex-col md:flex-row gap-4 md:gap-12 font-medium ">
          <li className="hover:text-blue-500">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Events</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Team</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Alumni</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="#">Contact</a>
          </li>
        </ul>
        <button onClick={toggleColorMode} className="text-2xl mt-4 md:mt-0">
          {colorMode === "light" ? <LuMoon /> : <MdOutlineWbSunny />}
        </button>
      </div>
    </div>
  );
};

export default Header;
