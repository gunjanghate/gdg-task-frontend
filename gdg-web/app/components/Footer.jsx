import React from "react";
import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="Footer flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between pb-32 px-24 items-center pt-10">
      <div className="left-foot ml-16 mr-16 ">
        <div className="left-right flex flex-col justify-center items-center text-center  lg:flex-row lg:gap-24">
          <div className="content-left-foot w-72 flex flex-col justify-center items-center text-gray-600 font-semibold">
            <div className="logo-foot">
              <Image
                src="https://drive.google.com/uc?export=view&id=1VMU953Hb1UIBJLvY8iNIqdX4XIY9wPBJ
"
                width={110}
                height={50}
              />
            </div>
            <div className="text-left-foot text-lg">
              Google Developer Groups
            </div>
            <div className="uni-foot flex gap-2">
              <span className="text-blue-500 font-light">On Campus </span>
              <span className="dot text-gray-500 font-normal">• Ramdeobaba University</span>
            </div>
          </div>
          <div className="vertical-dash h-1 w-44 lg:h-28 lg:w-1 mt-2 bg-black"></div>
        </div>
      </div>
      <div className="right-foot flex flex-col justify-center items-center pl-12 pt-6">
        <div className="right-1-foot flex justify-center items-center gap-3">
          <div className="loc-sym text-2xl">
            <MdOutlineLocationOn />
          </div>
          <div className="loc"> 
            Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi,
            Gittikhadan,Katol Road,Nagpur- 440013
          </div>
        </div>
        <div className="right-2-foot mt-6">
          <div className="right-2-parts flex justify-between gap-56">
            <div className="part1 flex justify-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
                // style="fill:#1A1A1A;"
              >
                <path d="M 5.5 7 C 3.03125 7 1.011719 9.015625 1 11.484375 C 1 11.484375 1 11.488281 1 11.492188 C 1 11.496094 1 11.496094 1 11.5 L 1 38.5 C 1 40.972656 3.027344 43 5.5 43 L 44.5 43 C 46.972656 43 49 40.972656 49 38.5 L 49 11.5 C 49 11.496094 49 11.496094 49 11.492188 C 49 11.488281 49 11.484375 49 11.484375 C 48.988281 9.015625 46.96875 7 44.5 7 Z M 8.101563 9 L 41.902344 9 L 25 20.78125 Z M 4.773438 9.117188 L 25 23.21875 L 45.230469 9.117188 C 46.253906 9.425781 46.992188 10.355469 47 11.488281 C 46.996094 11.699219 46.78125 12.121094 46.46875 12.460938 C 46.152344 12.804688 45.84375 13.019531 45.84375 13.019531 L 45.839844 13.027344 L 25 27.777344 L 4.160156 13.027344 L 4.15625 13.019531 C 4.15625 13.019531 3.847656 12.804688 3.53125 12.460938 C 3.21875 12.121094 3.003906 11.699219 3 11.488281 C 3.007813 10.355469 3.746094 9.425781 4.773438 9.117188 Z M 3 14.652344 C 3 14.652344 3.007813 14.660156 3.007813 14.660156 L 3.015625 14.664063 L 3.015625 14.667969 L 6 16.777344 L 6 41 L 5.5 41 C 4.109375 41 3 39.890625 3 38.5 Z M 47 14.652344 L 47 38.5 C 47 39.890625 45.890625 41 44.5 41 L 44 41 L 44 16.777344 L 46.984375 14.667969 L 46.984375 14.664063 C 46.984375 14.664063 47 14.652344 47 14.652344 Z M 8 18.191406 L 25 30.222656 L 42 18.191406 L 42 41 L 8 41 Z"></path>
              </svg>
              <div className="gmail"><u>dsc.rknec@gmail.com</u></div>
            </div>
            <div className="part2 flex flex-col gap-6 justify-center items-center text-center">
                <div className="part2-part1">Follow Us:</div>
                <div className="part2-part2 flex justify-evenly gap-4">
                    <div className="p2p2-insta text-2xl"><IoLogoInstagram /></div>
                    <div className="p2p2-linkedin text-2xl"><FaLinkedinIn /></div>
                    <div className="p2p2-twitter text-2xl"><FaTwitter /></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
