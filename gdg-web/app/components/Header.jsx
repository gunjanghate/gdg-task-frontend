"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useColorMode } from '@chakra-ui/react';
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

// import { useTheme } from "../context/ThemeContext";
// import './globals.css';

const Header = () => {
  // const { toggleTheme } = useTheme();
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className="flex justify-between  md:px-10 px-2 shadow-md ">
      <div className="logo flex">
        <Image
          // src="https://tse3.mm.bing.net/th?id=OIP.cgK8zb-EiOmq_9XGolXF2QHaGB&pid=Api&P=0&h=180"
          src="https://drive.google.com/uc?export=view&id=1VMU953Hb1UIBJLvY8iNIqdX4XIY9wPBJ
"
          width={110}
          height={50}
        />

        <span className="grey-txt font bold text-l pt-6">GDG RCOEM</span>
      </div>
      <div className="grey-txt flex pt-6 gap-12">
        <ul className="flex  md:gap-12 font-medium">
          <li>Home</li>
          <li>Events</li>
          <li>Team</li>
          <li>Alumni</li>
          <li>Contact</li>
        </ul>
        <button onClick={toggleColorMode} className="pb-6 text-2xl">
       {colorMode === 'light' ? <LuMoon /> : <MdOutlineWbSunny />}
      </button>
      </div>
    </div>
  );
};

export default Header;
