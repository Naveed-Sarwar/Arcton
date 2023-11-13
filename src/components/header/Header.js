"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import Arbiturm from "../../../assets/arbitrum.png";
import Link from "next/link";
const Header = () => {
  const [invest, setInvest] = useState(false);
  const [learn, setLearn] = useState(false);
  const [raise, setRaise] = useState(false);
  return (
    <div className=" flex justify-between items-center px-4 lg:px-14">
      <div className="py-4 flex items-center gap-x-4">
       <Link target="_blank" href="https://www.arcton.com/">
         <Image src={Logo} alt="logo" className="lg:h-[40px] h-8 w-28 lg:w-[152px] cursor-pointer" />
         </Link>
         <Link target="_blank" href={"https://arcton.gitbook.io/documentation/"}><p className="underline pl-4 text-base">Docs</p></Link>
      </div>
      <div className="flex items-center gap-x-6">
      <button className="font-medium flex items-center gap-x-2">
        <Image src={Arbiturm} className="w-8 h-8"  />
            Arbitrum
        </button>
          <button className="font-medium">
            Connect
        </button>
      </div>
      {/* <div className="flex gap-x-6">
        <div className="flex gap-x-6 items-center">
          <div>
            <button
              className="text-black flex items-center gap-x-1"
              onClick={() => setInvest(!invest)}
            >
              Invest
              <IoIosArrowDown />
            </button>
          </div>
          <div className="relative">
            {invest && (
              <div className="absolute bg-white -ml-28 top-8 rounded-md shadow-lg">
                <p className="text-[#FD6A6A] cursor-pointer p-4 underline">
                  StartUps
                </p>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setLearn(!learn)}
              className="text-black flex items-center gap-x-1"
            >
              Learn
              <IoIosArrowDown />
            </button>
          </div>

          <div className="relative">
            {learn && (
              <div className="absolute bg-white text-white w-40 -left-28 top-8 rounded-md shadow-lg">
                <p className="text-[#FD6A6A] cursor-pointer p-4 underline">
                  About
                </p>
                <p className="text-[#FD6A6A] cursor-pointer p-4 underline">
                  Why Invest
                </p>
                <p className="text-[#FD6A6A] cursor-pointer p-4 underline">
                  How its Works
                </p>
              </div>
            )}
          </div>

          <div>
            <button className="text-black">Docs</button>
          </div>

          <div className="bg-[#EDEDED] rounded-xl px-4 py-2">
            <button
              onClick={() => setRaise(!raise)}
              className="text-black flex items-center gap-x-1"
            >
              Raise Capital
              <IoIosArrowDown />
            </button>
          </div>

          <div className="relative">
            {raise && (
              <div className="absolute right-5 w-40 bg-white text-white top-8 rounded-md shadow-lg">
                <p className="text-[#FD6A6A] cursor-pointer p-4 underline">
                  Raise Capital
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-x-6 items-center">
          <p className="text-[#FD6A6A] cursor-pointer font-medium">Dashboard</p>
          <button className="bg-[#FD6A6A] text-white font-medium rounded-md px-4 py-2">
            Login
          </button>
          <button className="bg-[#FD6A6A] text-white font-medium rounded-md px-4 py-2">
            Signup
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
