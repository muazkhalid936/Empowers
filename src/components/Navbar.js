"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaTiktok,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import News from "./News";
import Link from "next/link";
const tools = [
  { label: "eBoss", href: "/eboss" },
  { label: "GoLogin", href: "/gologin" },
  { label: "ContentStudio", href: "/contentstudio" },
  { label: "VidIq", href: "/vidiq" },
  { label: "ZikAnalytics", href: "/zikanalytics" },
  { label: "Payoneer", href: "/payoneer" },
  { label: "SendInBlue", href: "/sendinblue" },
  { label: "NameCheap", href: "/namecheap" },
];

function Navbar() {
  const [animation, setAnimation] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);
  const [showTools,setShowTools] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimation(true), 1000);

    if (animation) {
      setTimeout(() => setAnimation(false), 10000);
    }
  }, [animation]);
  return (
    <>
      <div className=" hidden bg-[#29ab87] font_inter p-2 lg:flex justify-between items-center text-white px-16">
        <div className="container mx-auto flex justify-between items-center">
          {/* Email and contact on top bar */}
          <div className="flex gap-5 text-xl">
            <div className="flex items-center gap-1">
              <FaPhoneAlt />
              <p className="text-[16px]">+92 3327195240</p>
            </div>
            <div className="flex items-center gap-1">
              <MdEmail />
              <p className="text-[16px]">info@empowerers.co</p>
            </div>
          </div>

          {/* Offers div */}
          <div className="text-xl   px-3 py-2  text-white   ">
            <p
              className={`${
                animation === true
                  ? "translate-x-[-450px] text-[16px] transition-all duration-13000 ease-in-out"
                  : "translate-x-[450px] text-[16px] invisible"
              } tracking-wide`}
            >
              🎉 Limited Time Offer: <span className="font-bold">20% Off</span>{" "}
              on All Courses! 🚀
            </p>
          </div>

          {/* Social media Links */}
          <div className="text-xl flex gap-4 items-center ">
            <FaFacebook />
            <FaLinkedin />
            <FaTiktok />
            <FaYoutube />
            <MdOutlineEmail />
            <div className="border-l-2 border-gray-400 px-3">
              <div className=" flex items-center  px-2 py-1 text-[16px] rounded-sm gap-1 text-xl hover:cursor-pointer">
                <Link href={"/auth/student-registeration"}>Register</Link>
                <span>/</span>
                <Link href={"/auth/Login"}>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" font_inter py-1 shadow-lg">
        <div className=" flex justify-between md:items-center mx-10 lg:mx-16">
          <div className="">
            <Image
              alt="Hero image"
              src={"/empowerer_logo.png"}
              className="h-auto w-auto"
              width={200}
              height={150}
              priority
            />
          </div>
          <div className="lg:hidden">
            <FaBars
              onClick={() => setShowSidebar(true)}
              className={`text-2xl  cursor-pointer duration-300 ease-in-out ${
                showSidebar ? "rotate-90" : ""
              }`}
            />
          </div>

          <div
            className={`fixed top-0 left-0 h-screen w-[80%] max-w-[300px]
                !font-lato main_hero_slogan bg-[#FFFFFF]  transform
                ${
                  showSidebar ? "translate-x-0" : "translate-x-[-400px]"
                } transition-transform duration-300 z-[999]`}
          >
            <div className="flex justify-end items-center px-4 py-4 border-b border-gray-600">
              <button
                onClick={() => setShowSidebar(false)}
                className="text-xl bg-black text-white hover:cursor-pointer focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>

            <ul className="flex flex-col gap-4 p-6 text-lg">
              <Link href="/">
                <li className="hover:text-[#77C9B3] border-b text-[13px] pb-[10px] border-b-gray-200 ">
                  Home
                </li>
              </Link>
              <Link href="/about-us">
                <li className="hover:text-[#77C9B3]  border-b text-[13px] pb-[10px] border-b-gray-200">
                  About Us
                </li>
              </Link>
              <Link href="/trainingPage">
                <li className="hover:text-[#77C9B3]  border-b text-[13px] pb-[10px] border-b-gray-200">
                  Trainings
                </li>
              </Link>
              <Link href="/ourServices">
                <li className="hover:text-[#77C9B3]  border-b text-[13px] pb-[10px] border-b-gray-200">
                  Services
                </li>
              </Link>
              <Link href="/gallery">
                <li className="hover:text-[#77C9B3]  border-b text-[13px] pb-[10px] border-b-gray-200">
                  Gallery
                </li>
              </Link>
              <Link href="/blog">
                <li className="hover:text-[#77C9B3]  border-b text-[13px] pb-[10px] border-b-gray-200">
                  Blog
                </li>
              </Link>
              <Link href="/contact-us">
                <li className="hover:text-[#77C9B3]  border-b text-[13px] pb-[10px] border-b-gray-200">
                  Contact Us
                </li>
              </Link>
              <li
                className="relative cursor-pointer  border-b text-[13px] pb-[10px] border-b-gray-200"
                onClick={() => setShowToolsDropdown(!showToolsDropdown)}
              >
                Tools
                {showToolsDropdown && (
                  <ul className="absolute left-0 top-full bg-white shadow-lg py-2 w-40  border-b text-[13px] pb-[10px] border-b-gray-200">
                    <Link href="/tool1">
                      <li className="px-4 py-2 hover:bg-gray-100">Tool 1</li>
                    </Link>
                    <Link href="/tool2">
                      <li className="px-4 py-2 hover:bg-gray-100">Tool 2</li>
                    </Link>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div className="hidden text-[16px] lg:flex text-xl list-none justify-center items-center flex-wrap gap-5 md:font-semibold">
            <Link href={"/"}>
              <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
                Home
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
              </li>
            </Link>

            <Link href={"/about-us"}>
              <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
                About Us
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
              </li>
            </Link>

            <Link href={"/trainingPage"}>
              <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
                Trainings
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
              </li>
            </Link>

            <Link href={"/ourServices"}>
              <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
                Services
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
              </li>
            </Link>

            <Link href={"/gallery"}>
              <li className="relative group cursor-pointer text-gray-700  hover:text-[#77C9B3]">
                Gallery
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
              </li>
            </Link>

            <Link href={"/blog"}>
              <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
                Blog
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
              </li>
            </Link>
            <Link href={"/contact-us"}>
              <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
                Contact Us
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
              </li>
            </Link>
            <div className="relative">
      {/* Dropdown Button */}
      <button
        onMouseEnter={() => setShowTools(true)}
        onMouseLeave={() => setShowTools(false)}
        className="cursor-pointer text-gray-700 hover:text-[#77C9B3] flex items-center gap-1"
      >
        Tools <span className="text-sm">▼</span>
      </button>

      {/* Dropdown Menu */}
      {showTools && (
        <div
          onMouseEnter={() => setShowTools(true)}
          onMouseLeave={() => setShowTools(false)}
          className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 translate-y-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
        >
          <ul className="py-2">
            {tools.map((service, index) => (
              <li key={index}>
                <Link
                  href={service.href}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

            <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
              My Account
              <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
            </li>
            <li className="relative group cursor-pointer text-white py-2 bg-[#29ab87] px-5  rounded-full hover:text-white">
              Enroll Now
              {/* <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span> */}
            </li>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-screen w-[80%] max-w-[300px] bg-white shadow-lg transform ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
        >
          <div className="flex justify-end p-4 border-b border-gray-300">
            <button
              onClick={() => setShowSidebar(false)}
              className="text-2xl bg-black text-white p-2 rounded-full"
            >
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col gap-4 p-6 text-lg">
            <Link href="/">
              <li className="hover:text-[#77C9B3]">Home</li>
            </Link>
            <Link href="/about-us">
              <li className="hover:text-[#77C9B3]">About Us</li>
            </Link>
            <Link href="/trainingPage">
              <li className="hover:text-[#77C9B3]">Trainings</li>
            </Link>
            <Link href="/ourServices">
              <li className="hover:text-[#77C9B3]">Services</li>
            </Link>
            <Link href="/gallery">
              <li className="hover:text-[#77C9B3]">Gallery</li>
            </Link>
            <Link href="/blog">
              <li className="hover:text-[#77C9B3]">Blog</li>
            </Link>
            <Link href="/contact-us">
              <li className="hover:text-[#77C9B3]">Contact Us</li>
            </Link>
            <li
              className="relative cursor-pointer"
              onClick={() => setShowToolsDropdown(!showToolsDropdown)}
            >
              Tools
              {showToolsDropdown && (
                <ul className="absolute left-0 top-full bg-white shadow-lg py-2 w-40">
                  <Link href="/tool1">
                    <li className="px-4 py-2 hover:bg-gray-100">Tool 1</li>
                  </Link>
                  <Link href="/tool2">
                    <li className="px-4 py-2 hover:bg-gray-100">Tool 2</li>
                  </Link>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <News />
      </div>
    </>
  );
}

export default Navbar;
