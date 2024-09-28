import React from "react";
import Image from "next/image";
const Container = () => {
  return (
    <div className="main flex flex-col my-4">
      <div className="name-main flex flex-col mt-12 justify-center text-center">
        <div className="google-text flex gap-2 justify-center ">
          <div className="word1 flex ">
            <div className="g1 text-4xl lg:text-5xl font-bold">G</div>
            <div className="o1 text-4xl lg:text-5xl font-bold">o</div>
            <div className="o2 text-4xl lg:text-5xl font-bold">o</div>
            <div className="g2 text-4xl lg:text-5xl font-bold">g</div>
            <div className="l text-4xl lg:text-5xl font-bold">l</div>
            <div className="e text-4xl lg:text-5xl font-bold">e</div>
          </div>
          <div className="word2 text-4xl lg:text-5xl font-bold ">Developer</div>
          <div className="word3 text-4xl lg:text-5xl font-bold ">Groups</div>
        </div>
        <div className="text-gray-500 rbu-text font-bold text-2xl">
          RBU Chapter
        </div>
      </div>
      <div className="part2-main flex flex-col justify-center text-center">
        <div className="img-people pl-20 md:pl:44 md:ml-32 lg:pl-96 lg:ml-5">
          <Image
            // src="https://tse3.mm.bing.net/th?id=OIP.cgK8zb-EiOmq_9XGolXF2QHaGB&pid=Api&P=0&h=180"
            src="https://drive.google.com/uc?export=view&id=11XvmtMiO8JOlhIHcGNd-_dch2bbYEz4X
"
            width={500}
            height={500}
          />
        </div>
        <div className="txt-below-gdg-people text-gray-600 font-bold px-12 text-wrap md:px-32 lg:px-80 lg:mx-12 part2-main">
          Google Developer Groups are community groups for college and
          university students interested in Google developer technologies.
        </div>
        <div className="join-butn-div mt-16">
          <button className=" join-butn rounded-sm shadow-sm shadow-blue-600">
            JOIN US
          </button>
        </div>
        <div className=" mt-8 flex flex-col items-center gap-5">
          <svg
            width="70"
            height="70"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 12L11 17.5L16.5 12"
              stroke="#D9D9D9"
              stroke-width="2"
              transform="translate(0, -12)"
            />
            <path
              d="M2.5 12L8 17.5L13.5 12"
              stroke="#8F8F8F"
              stroke-width="2"
              transform="translate(3, -5)"
            />
            <path
              d="M0.5 12L6 17.5L11.5 12"
              stroke="#4D4D4D"
              stroke-width="2"
              transform="translate(5, 2)"
            />
          </svg>
        </div>
      <div className="know-us mt-5">
        <div className="txt-knowus text-3xl md:text-4xl lg:text-4xl font-bold text-gray-500">Get To Know Us!</div>
      </div>
      </div>
    </div>
  );
};

export default Container;
