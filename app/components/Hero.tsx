import React from "react";
import Image from "next/image";
import heroimg from "../assets/svg-icons/hero-img.png";
import iphonesvg from "../assets/svg-icons/iphone-heri.svg";

export const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-full gap-24 flex mx-auto max-w-[94%]">
        <div className="w-[217px] pt-10 h-auto border-r border-r-gray-500/45 p-3">
          <ul className="cursor-pointer flex space-y-5 flex-col">
            <li className="text-sm font-medium flex items-center gap-3">
              {" "}
              <p>Women's Fashion</p>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li className="text-sm font-medium flex items-center gap-3">
              {" "}
              <p>Men's Fashion</p>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li className="text-sm font-medium flex items-center gap-3">
              {" "}
              <p>Electronics</p>{" "}
            </li>
            <li className="text-sm font-medium flex items-center gap-3">
              {" "}
              <p>Home & Lifestyle</p>{" "}
            </li>
            <li className="text-sm font-medium flex items-center gap-3">
              {" "}
              <p>Medicine</p>{" "}
            </li>
            <li className="text-sm font-medium flex items-center gap-3">
              {" "}
              <p>Sports & Outdoors</p>{" "}
            </li>
            <li className="text-sm font-medium flex items-center gap-3">
              {" "}
              <p>Babies & Toys</p>{" "}
            </li>
            <li className="text-sm font-medium flex items-center gap-3">
              {" "}
              <p>Groceries & Pets</p>{" "}
            </li>
            <li className="text-sm font-medium flex items-center gap-3">
              {" "}
              <p>Health & Beauty</p>{" "}
            </li>
          </ul>
        </div>

        <div className="p-3 pt-10">
          <div className=" flex-grow flex cursor-pointer items-center overflow-hidden rounded-md h-[375] bg-black p-3">
            <Image src={iphonesvg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
