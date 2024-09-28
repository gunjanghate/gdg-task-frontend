import React from "react";
import Image from "next/image";
const ContainerTwo = () => {
  return (
    <div class="py-12">
      <div class="container mx-auto text-center">
        <div className="mission">
          <h2 class="text-3xl text-gray-600 font-bold mb-4">Our Mission</h2>
          <div class="w-36 mx-auto h-1 bg-blue-500 rounded-full "></div>
          <div className="mission-content flex flex-col md:flex-row justify-between px-20 gap-0 md:gap-8 ">
            <Image
              src="https://drive.google.com/uc?export=view&id=1EFi_8g-r24RkpWn9SdYSoS74_e-zbWPn"
              alt="Our mission image"
              class="rounded-lg md:pb-6 lg:pb-6"
              width={800}
              height={800}
            />
            <div className="mission-left flex flex-col md:flex-row lg:flex-row gap-2 lg:pl-12 md:mt-16 lg:mt-20">
              <p class="text-lg  text-gray-600 font-bold text-wrap text-centre md:text-right lg:mt-12 lg:pl-36 lg:ml-12">
                Our mission involves community engagement, leadership
                development, building strong tech foundation, while enabling all
                tech enthusiasts to contribute to the global society.
              </p>
              <div class="w-3/4 mt-5 h-1 md:h-44 md:w-7 lg:w-7 ml-12 md:ml-0 lg:ml-0 md:mt-0 lg:h-36 bg-blue-500 md:my-auto  lg:mt-10"></div>
            </div>
          </div>
        </div>
        <div className="perspective mt-16 md:mt-12 lg:mt-0 mb-12">
          <h2 class="text-3xl text-gray-600 font-bold mb-4">Our Perspective</h2>
          <div class="w-36 mx-auto h-1 bg-green-500 rounded-full mb-8"></div>
          <div className="persepective-content flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-between px-20 md:gap-8 lg:gap-8">
            <div className="perspective-right flex flex-col-reverse md:flex-row lg:flex-row gap-2 md:pl-12 lg:ml-12 mt-5">
              <div class="w-3/4 mt-5 h-1 md:h-44 md:w-7 lg:w-7 lg:h-44 bg-green-500 md:my-auto ml-12 md:ml-0 lg:ml-0  lg:mt-8"></div>
              <p class="text-lg  text-gray-600 font-bold md:pr-10 lg:pl:3 text-wrap text-centre md:text-left lg:mt-8 lg:pr-36 lg:mr-12">
                We’re a community-driven initiative aiming to bridge the gap
                between research and practice , develop evolutionary thinking
                and network throughout the process. We believe in connecting
                fellow developers , spreading stimulative ideas and working for
                a solution driven team.
              </p>
            </div>
            <Image
              src="https://drive.google.com/uc?export=view&id=1jk31HrEXepOAj31To9P5x9cIMqiEJmIe"
              alt="Our mission image"
              class="rounded-lg"
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="What-keep mt-24">
          <h2 class="text-3xl text-gray-600 font-bold mb-4">
            What Keeps Us Going?
          </h2>
          <div class="w-36 mx-auto h-1 bg-yellow-500 rounded-full mb-8"></div>
          <div className="What-Keeps-content flex flex-col md:flex-col lg:flex-row justify-between px-20 md:gap-8 lg:gap-2">
            <Image
              src="https://drive.google.com/uc?export=view&id=1q5a9V8InrLRloN3Eig1EJkM9RXSq-idM"
              alt="Our mission image"
              class="rounded-lg mt-5"
              width={800}
              height={800}
            />
            <div className="what-keep-right flex flex-col md:flex-row lg:flex-row gap-2 md:pl-12 lg:pl-12 mt-5 md:mr-10">
              <p class="text-lg  text-gray-600 font-bold md:pl-10 text-wrap text-centre md:text-right lg:mt-12 lg:pl-36 lg:ml-12">
                Our club helps students to connect, learn, empower and grow.
                Teamwork, innovative thinking, communication, and leading with
                solutions is what helps us achieve new heights. The entire team
                works in coordination, to inspire and motivate the upcoming
                coding community to evolve their skills and broaden their
                horizons of knowledge.
              </p>
              <div class="w-3/4 mt-5 h-1 md:h-44 md:w-7 lg:w-7 lg:h-44 bg-yellow-500 md:my-auto ml-12 md:ml-0 lg:ml-0 lg:mt-12"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="rings items-center mx-auto mt-32 lg:mt-44 flex flex-col md:px-44 md:flex-row md:flex-wrap lg:flex:row justify-evenly lg:justify-around gap-10">
        <div className="text-center ring1">
          <div className="flex justify-center items-center w-44 h-44 md:32 lg:32 md:32 lg:32 rounded-full border-8 border-t-blue-500 border-r-green-500 border-b-yellow-500 border-l-red-500">
            <span className="text-5xl md:text-4xl lg:text-4xl font-bold">
              03+
            </span>
          </div>
          <p className="mt-2 text-lg font-semibold">Years</p>
        </div>
        <div className="text-center ring1">
          <div className="flex justify-center items-center w-44 h-44 md:32 lg:32 md:32 lg:32 rounded-full border-8 border-t-blue-500 border-r-green-500 border-b-yellow-500 border-l-red-500">
            <span className="text-5xl md:text-4xl lg:text-4xl font-bold">
              10+
            </span>
          </div>
          <p className="mt-2 text-lg font-semibold">Events</p>
        </div>
        <div className="text-center ring1">
          <div className="flex justify-center lg:relative lg:top-3 items-center w-44 h-44 md:32 lg:32 md:32 lg:32 rounded-full border-8 border-t-blue-500 border-r-green-500 border-b-yellow-500 border-l-red-500">
            <span className="text-5xl md:text-4xl lg:text-4xl font-bold">
              1K+
            </span>
          </div>
          <p className="mt-2 md:w-32 md:pl-7 text-lg font-semibold lg:relative lg:top-3">Community Members</p>
        </div>
        <div className="text-center ring1">
          <div className="flex justify-center items-center w-44 h-44 md:32 lg:32 md:32 lg:32 rounded-full border-8 border-t-blue-500 border-r-green-500 border-b-yellow-500 border-l-red-500">
            <span className="text-5xl md:text-4xl lg:text-4xl font-bold">
              200+
            </span>
          </div>
          <p className="mt-2 text-lg font-semibold">Attendees</p>
        </div>

      </div>
    </div>
  );
};

export default ContainerTwo;
