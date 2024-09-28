"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
const ContainerThree = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="ContainerThree mx-auto mt-16">
      <div className="tech flex flex-col justify-center text-center items-center mb-32">
        <div className="tech-up">
          <div className="up1 flex justify-between gap-5">
            <div className="up11 bg-red-500 w-32 lg:w-72 h-1 mt-5"></div>
            <div className="up22 text-4xl font-semibold text-gray-600">
              Technologies
            </div>
            <div className="up33 bg-red-500 w-32 lg:w-72 h-1 mt-5"></div>
          </div>
          <div className="up2 text-md mt-1 font-semibold text-gray-600">
            Domains That Excite Us to Collaborate and Teach!
          </div>
        </div>
        <div className="tect-down mt-20 flex flex-col  justify-evenly gap-12">
          <div className="tech1 flex">
            <div className="cont-tech1 flex flex-col justify-center items-center ">
              <div className="dash rounded lg h-1 w-28 bg-red-500"></div>
              <div className="inside shadow-2xl rounded-xl px-12 h-40">
                <Image
                  src={
                    "https://drive.google.com/uc?id=10pOJZaJdyFR925SIgOoBF8-F8V5mBdkE"
                  }
                  width={100}
                  height={100}
                />
                <div className="ins-txt text-gray-600 text-lg">Android</div>
                <div className="arrw pl-10">
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
          </div>
          <div className="tech2 flex">
            <div className="cont-tech1 flex flex-col justify-center items-center ">
              <div className="dash rounded lg h-1 w-28 bg-blue-500"></div>
              <div className="inside shadow-2xl rounded-xl px-12 h-40">
                <Image
                  src={
                    "https://drive.google.com/uc?id=1FXRytYzmdG3V6ePv6J1sNuB-mHF9BLaz"
                  }
                  width={100}
                  height={100}
                />
                <div className="ins-txt text-gray-600 text-lg">Flutter</div>
                <div className="arrw pl-10">
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
          </div>
          <div className="tech3 flex">
            <div className="cont-tech1 flex flex-col justify-center items-center ">
              <div className="dash rounded lg h-1 w-28 bg-green-500"></div>
              <div className="inside shadow-2xl rounded-xl px-12 h-40">
                <Image
                  src={
                    "https://drive.google.com/uc?export=download&id=1ZdlhVZ3J4V_zps492L_k3imIBsbs7EAx"
                  }
                  width={100}
                  height={100}
                />
                <div className="ins-txt text-gray-600 text-lg">Cloud</div>
                <div className="arrw pl-10">
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FAQ flex flex-col justify-center items-center mb-14">
        <div className="faq-head text-4xl font-semibold text-gray-600">
          FAQs
        </div>
        <div className="que1 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-gray-300 rounded-2xl shadow-md">
          <div
            onClick={toggleAccordion}
            className="flex justify-center gap-2 lg:justify-between pl-5 pr-12 lg:pr-96 items-center px-4 py-3 cursor-pointer rounded-lg"
          >
            <span
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <h3 className="text-lg font-semibold rounded-lg">What is GDG?</h3>
          </div>
        </div>
        {isOpen && (
          <div className="px-4 py-4 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-l-red-500 border-gray-300 rounded-2xl shadow-md">
            <p className="text-gray-600">
              Google Developer Groups (GDG) are community groups for college and
              university students interested in Google developer technologies.
              Students from all undergraduate or graduate programs with an
              interest in growing as a developer are welcome. By joining a GDG,
              students grow their knowledge in a peer-to-peer learning
              environment and build solutions for local businesses and their
              community.
            </p>
          </div>
        )}
        <div className="que2 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-gray-300 rounded-2xl shadow-md">
          <div
            onClick={toggleAccordion}
            className="flex gap-3 justify-center  lg:justify-between lg:pr-44 items-center px-4 py-3 cursor-pointer rounded-lg"
          >
            <span
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="green"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <h3 className="text-lg font-semibold rounded-lg lg:ml-12 ">
              How can you become a part of GDG ?
            </h3>
          </div>
        </div>
        {isOpen && (
          <div className="px-4 py-4 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-l-green-500 border-gray-300 rounded-2xl shadow-md">
            <p className="text-gray-600">
              We conduct an annual team recruitment process. The details of
              recruitment are posted online a few weeks prior. It’s a two step
              process involving form filling and personal interview. Students
              acing both rounds are selected to be the part of the core team.
            </p>
          </div>
        )}
        <div className="que3 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-gray-300 rounded-2xl shadow-md">
          <div
            onClick={toggleAccordion}
            className="flex gap-3 justify-center lg:justify-between pl-5 lg:pr-64 items-center px-4 py-3 cursor-pointer rounded-lg"
          >
            <span
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="blue"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <h3 className="text-lg font-semibold rounded-lg lg:ml-12 w-3/4">
              What does a GDG Lead do?
            </h3>
          </div>
        </div>
        {isOpen && (
          <div className="px-4 py-4 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-l-blue-500 border-gray-300 rounded-2xl shadow-md">
            <p className="text-gray-600">
              A GDG Lead fills a lot of shoes. He works with the university to
              build the club, recruit the core team, host workshops, build
              projects, collaborate with local partners.
            </p>
          </div>
        )}
        <div className="que4 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-gray-300 rounded-2xl shadow-md">
          <div
            onClick={toggleAccordion}
            className="flex gap-3 justify-center lg:justify-between pl-5 lg:pr-52 items-center px-4 py-3 cursor-pointer rounded-lg"
          >
            <span
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="orange"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <h3 className="text-lg font-semibold rounded-lg lg:ml-12 w-3/4">
              How is DSC related to Google?
            </h3>
          </div>
        </div>
        {isOpen && (
          <div className="px-4 py-4 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-l-yellow-500 border-gray-300 rounded-2xl shadow-md">
            <p className="text-gray-600">
              A GDG Lead fills a lot of shoes. He works with the university to
              build the club, recruit the core team, host workshops, build
              projects, collaborate with local partners.
            </p>
          </div>
        )}
        <div className="que5 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-gray-300 rounded-2xl shadow-md">
          <div
            onClick={toggleAccordion}
            className="flex gap-3 justify-center lg:justify-between pl-5 lg:pr-80 items-center px-4 py-3 cursor-pointer rounded-lg"
          >
            <span
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <h3 className="text-lg font-semibold rounded-lg lg:ml-12 w-3/4">
              How to reach us?
            </h3>
          </div>
        </div>
        {isOpen && (
          <div className="px-4 py-4 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-l-red-500 border-gray-300 rounded-2xl shadow-md">
            <p className="text-gray-600">Mail us at "dsc.rknec@gmail.com "</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContainerThree;
