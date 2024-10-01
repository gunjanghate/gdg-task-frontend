import React from "react";
import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { default as logo } from "../assests/logo.png";
const Footer = () => {
  return (
    <div className="footer-main flex flex-col">
      <div className="Footer flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between pb-5 px-24 items-center pt-10">
        <div className="left-foot mr-16 ml-12 mb-4 ">
          <div className="left-right flex flex-col justify-center items-center text-center  lg:flex-row lg:gap-24">
            <div className="content-left-foot w-72 flex flex-col justify-center items-center text-gray-600 font-semibold">
              <div className="logo-foot w-32">
                <img src={logo.src} alt="Logo Image" />
              </div>
              <div className="text-left-foot text-lg">
                Google Developer Groups
              </div>
              <div className="uni-foot flex gap-2">
                <span className="text-blue-500 font-light">On Campus </span>
                <span className="dot text-gray-500 font-normal">
                  • Ramdeobaba University
                </span>
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
              Shri Ramdeobaba College of Engineering and Management, Ramdeo
              Tekdi, Gittikhadan,Katol Road,Nagpur- 440013
            </div>
          </div>
          <div className="right-2-foot mt-6">
            <div className="right-2-parts flex flex-col lg:flex-row justify-between gap-12 mt-6 lg:mt-0 lg:gap-56">
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
                <div className="gmail">
                  <u>dsc.rknec@gmail.com</u>
                </div>
              </div>
              <div className="part2 flex flex-col gap-6 justify-center items-center text-center">
                <div className="part2-part1">Follow Us:</div>
                <div className="part2-part2 flex  justify-evenly gap-4">
                  <div className="p2p2-insta text-2xl">
                    <IoLogoInstagram />
                  </div>
                  <div className="p2p2-linkedin text-2xl">
                    <FaLinkedinIn />
                  </div>
                  <div className="p2p2-twitter text-2xl">
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <svg
          // width="485"
          // height="200"
          viewBox="0 0 1440 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-fit"
        >
          <g clip-path="url(#clip0_23_1831)">
            <path
              d="M-60 132.977L22.8824 87.1824L71.5523 175.526L-11.3302 221.321L-60 132.977Z"
              fill="#0F9D58"
            />
          </g>
          <path
            d="M64.8158 123.999C93.2969 131.991 123.022 115.929 131.208 88.1238L28.069 59.1821C19.8826 86.9878 36.3346 116.007 64.8158 123.999Z"
            fill="#EA4335"
          />
          <path
            d="M123.359 105.182L83.9236 163.182H162.795L123.359 105.182Z"
            fill="#FCCA23"
          />
          <path
            d="M262.639 103.308C243.135 132.102 251.232 170.873 280.725 189.914L302.243 158.147C290.723 150.71 287.565 135.566 295.183 124.319C302.798 113.077 318.308 109.986 329.828 117.423L351.346 85.6561C321.853 66.6153 282.139 74.5199 262.639 103.308Z"
            fill="#FBBC04"
          />
          <path
            d="M1453.36 30.2073C1434.92 46.893 1433.83 75.0077 1450.92 93.0084L1471.26 74.5995C1464.59 67.5684 1465.02 56.5879 1472.22 50.0702C1479.42 43.5556 1490.67 43.9689 1497.34 51L1517.68 32.5911C1500.59 14.5906 1471.79 13.5247 1453.36 30.2073Z"
            fill="#4285F4"
          />
          <circle cx="361" cy="148.182" r="42" fill="#4285F4" />
          <circle cx="618" cy="96.1821" r="42" fill="#FBBC04" />
          <circle cx="433" cy="133.182" r="13" fill="#FCCA23" />
          <circle cx="253" cy="69.1821" r="22" fill="#EA4335" />
          <circle cx="147.5" cy="120.682" r="13.5" fill="#0F9D58" />
          <rect
            x="334"
            y="78.0923"
            width="32"
            height="95"
            transform="rotate(-60.7136 334 78.0923)"
            fill="#0F9D58"
          />
          <path
            d="M496.361 197.578L568.98 130.416L461.119 106.182L496.361 197.578Z"
            fill="#4285F4"
          />
          <g clip-path="url(#clip1_23_1831)">
            <path
              d="M1148.92 51.1021L1198.1 84.084L1166.38 127.215L1117.2 94.2329L1148.92 51.1021Z"
              fill="#FBBC04"
            />
            <path
              d="M1155.47 79.6445L1167.76 87.89L1159.83 98.6727L1147.54 90.4272L1155.47 79.6445Z"
              fill="#FBBC04"
            />
          </g>
          <g clip-path="url(#clip2_23_1831)">
            <path
              d="M1181.27 107.209L1218.07 89.1825L1278.73 202.751L1241.93 220.778L1181.27 107.209Z"
              fill="#EA4335"
            />
          </g>
          <path
            d="M1130.4 114.794L1148.57 200.45L1221.18 135.486L1130.4 114.794Z"
            fill="#34AD5C"
          />
          <g clip-path="url(#clip3_23_1831)">
            <path
              d="M532 83.2769L562.649 70.1826L602.162 162.984L571.512 176.078L532 83.2769Z"
              fill="#EA4335"
            />
            <path
              d="M558.311 113.167L565.973 109.893L575.851 133.094L568.189 136.367L558.311 113.167Z"
              fill="#EA4335"
            />
          </g>
          <path
            d="M1084.51 87.8847C1067.78 112.021 1074.66 143.935 1099.87 159.167L1160.46 71.7612C1135.24 56.5295 1101.24 63.7482 1084.51 87.8847Z"
            fill="#4285F4"
          />
          <path
            d="M658.238 120.85L618.843 210.615L727.707 191.117L658.238 120.85Z"
            fill="#34AD5C"
          />
          <g clip-path="url(#clip4_23_1831)">
            <path
              d="M500.66 60.1821L532.198 91.8711L502.538 121.317L471 89.6284L500.66 60.1821Z"
              fill="#FBBC04"
            />
            <path
              d="M501.365 83.1079L509.249 91.0302L501.834 98.3917L493.949 90.4695L501.365 83.1079Z"
              fill="#FBBC04"
            />
          </g>
          <path
            d="M1017.57 124.182C982.933 124.182 954.858 152.388 954.858 187.182L1080.27 187.182C1080.27 152.388 1052.2 124.182 1017.57 124.182Z"
            fill="#FBBC04"
          />
          <g clip-path="url(#clip5_23_1831)">
            <path
              d="M979 59.1821L1006.61 42.2118L1052.55 111.384L1024.94 128.354L979 59.1821Z"
              fill="#34A853"
            />
            <path
              d="M1006.58 78.7578L1013.48 74.5152L1024.97 91.8083L1018.06 96.0509L1006.58 78.7578Z"
              fill="#34A853"
            />
          </g>
          <ellipse cx="898" cy="80.1821" rx="31" ry="29" fill="#FBBC04" />
          <path
            d="M891.898 102.724L903.561 189.454L980.868 129.886L891.898 102.724Z"
            fill="#4285F4"
          />
          <ellipse
            cx="969.768"
            cy="104.682"
            rx="24.5"
            ry="22.5"
            fill="#EA4335"
          />
          <g clip-path="url(#clip6_23_1831)">
            <path
              d="M182.848 74.1821L252.695 95.5454L229.848 169.916L160 148.553L182.848 74.1821Z"
              fill="#4285F4"
            />
            <path
              d="M200.473 110.083L217.934 115.423L212.223 134.016L194.761 128.675L200.473 110.083Z"
              fill="#4285F4"
            />
          </g>
          <g clip-path="url(#clip7_23_1831)">
            <path
              d="M768.12 131.182L783.087 135.76L779.967 145.916L765 141.338L768.12 131.182Z"
              fill="#4285F4"
            />
          </g>
          <g clip-path="url(#clip8_23_1831)">
            <path
              d="M670 108.75L727.431 61.1819L778.211 122.645L720.78 170.213L670 108.75Z"
              fill="#0F9D58"
            />
            <path
              d="M710.579 113.961L724.937 102.069L737.632 117.434L723.274 129.327L710.579 113.961Z"
              fill="#0F9D58"
            />
          </g>
          <path
            d="M811.022 122.773C832.909 133.563 859.963 124.307 871.449 102.101L792.189 63.0269C780.703 85.2339 789.134 111.983 811.022 122.773Z"
            fill="#EA4335"
          />
          <path
            d="M853.689 118.182L824.497 161.182H882.882L853.689 118.182Z"
            fill="#FCCA23"
          />
          <rect
            x="137.079"
            y="98.1724"
            width="32"
            height="95"
            transform="rotate(-118.113 137.079 98.1724)"
            fill="#FBBC04"
          />
          <g clip-path="url(#clip9_23_1831)">
            <path
              d="M1260 136.977L1342.88 91.1824L1391.55 179.526L1308.67 225.321L1260 136.977Z"
              fill="#0F9D58"
            />
          </g>
          <path
            d="M1416.9 127.999C1445.38 135.991 1475.1 119.929 1483.29 92.1238L1380.15 63.1821C1371.97 90.9878 1388.42 120.007 1416.9 127.999Z"
            fill="#EA4335"
          />
          <path
            d="M1475.44 109.182L1436.01 167.182H1514.88L1475.44 109.182Z"
            fill="#FCCA23"
          />
          <path
            d="M1326.72 110.64C1346.95 96.4879 1350.27 67.1815 1334.13 45.1823L1260.85 96.4312C1276.99 118.431 1306.48 124.792 1326.72 110.64Z"
            fill="#4285F4"
          />
          <defs>
            <clipPath id="clip0_23_1831">
              <rect
                width="94.6924"
                height="100.863"
                fill="white"
                transform="matrix(0.875281 -0.483615 0.482535 0.875877 -60 132.977)"
              />
            </clipPath>
            <clipPath id="clip1_23_1831">
              <rect
                width="59.2156"
                height="53.5381"
                fill="white"
                transform="matrix(0.830526 0.55698 -0.592445 0.805611 1148.92 51.1021)"
              />
            </clipPath>
            <clipPath id="clip2_23_1831">
              <rect
                width="40.9774"
                height="128.755"
                fill="white"
                transform="matrix(0.898034 -0.439925 0.471147 0.882055 1181.27 107.209)"
              />
            </clipPath>
            <clipPath id="clip3_23_1831">
              <rect
                width="33.3291"
                height="100.863"
                fill="white"
                transform="matrix(0.91959 -0.392879 0.391744 0.920074 532 83.2769)"
              />
            </clipPath>
            <clipPath id="clip4_23_1831">
              <rect
                width="44.7086"
                height="41.7948"
                fill="white"
                transform="matrix(0.705419 0.70879 -0.70966 0.704544 500.66 60.1821)"
              />
            </clipPath>
            <clipPath id="clip5_23_1831">
              <rect
                width="32.4069"
                height="83.0362"
                fill="white"
                transform="matrix(0.851924 -0.523665 0.553218 0.833036 979 59.1821)"
              />
            </clipPath>
            <clipPath id="clip6_23_1831">
              <rect
                width="73.0413"
                height="77.8009"
                fill="white"
                transform="matrix(0.956271 0.292483 -0.293662 0.955909 182.848 74.1821)"
              />
            </clipPath>
            <clipPath id="clip7_23_1831">
              <rect
                width="15.6516"
                height="10.6245"
                fill="white"
                transform="matrix(0.956271 0.292483 -0.293662 0.955909 768.12 131.182)"
              />
            </clipPath>
            <clipPath id="clip8_23_1831">
              <rect
                width="74.5731"
                height="79.7262"
                fill="white"
                transform="matrix(0.770137 -0.637879 0.636928 0.770923 670 108.75)"
              />
            </clipPath>
            <clipPath id="clip9_23_1831">
              <rect
                width="94.6924"
                height="100.863"
                fill="white"
                transform="matrix(0.875281 -0.483615 0.482535 0.875877 1260 136.977)"
              />
            </clipPath>
          </defs>
        </svg>

    </div>
  );
};

export default Footer;
