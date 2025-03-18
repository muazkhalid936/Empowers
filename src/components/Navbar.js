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

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [animation, setAnimation] = useState(false);

  // Toggle the sidebar for mobile
  const toggleSidebar = () => {
    setShowNavbar(!showNavbar);
    showAndHideNavbar();
  };
  const showAndHideNavbar = () => {
    const navbar = document.getElementById("navbar");
    const mobileNavbar = document.getElementById("mobileNavbar");

    navbar.classList.remove("hidden");
    navbar.classList.add("flex-col");

    mobileNavbar.appendChild(navbar);

    const child = navbar.childNodes;
    child.forEach((item) => {
      item.classList.add("border-b", "border-gray-400", "mb-2", "py-3");
      item.addEventListener("click", () => {
        setShowNavbar(false);
      });
    });
  };

  useEffect(() => {
    setTimeout(() => setAnimation(true), 1000);

    if (animation) {
      setTimeout(() => setAnimation(false), 10000);
    }
  }, [animation]);
  return (
    <>
      <div className=" hidden bg-[#29ab87] font_inter p-2 md:flex justify-between items-center text-white px-16">
      <div className="container mx-auto flex justify-between items-center">
          {/* Email and contact on top bar */}
          <div className="flex gap-5 text-xl">
          <div className="flex items-center gap-1">
            <FaPhoneAlt />
            <p>+92 3327195240</p>
          </div>
          <div className="flex items-center gap-1">
            <MdEmail />
            <p>info@empowerers.co</p>
          </div>
        </div>

        {/* Offers div */}
        <div className="text-xl  px-3 py-2  text-white overflow-hidden  ">
          <p
            className={`${
              animation === true
                ? "translate-x-[-450px] transition-all duration-13000 ease-in-out"
                : "translate-x-[450px] invisible"
            } tracking-wide`}
          >
            🎉 Limited Time Offer: <span className="font-bold">20% Off</span> on
            All Courses! 🚀
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
            <div className=" flex items-center  px-2 py-1 rounded-sm gap-1 text-xl hover:cursor-pointer">
              <span>Register</span>
              <span>/</span>
              <span>Login</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className=" font_inter py-1 shadow-lg">
        <div className=" flex justify-between md:items-center mx-16">
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
          <div className="md:hidden" onClick={toggleSidebar}>
            <FaBars
              className={`w-10 h-10  cursor-pointer duration-300 ease-in-out ${
                showNavbar ? "rotate-90" : ""
              }`}
            />
          </div>

          <div
            className={`fixed top-0 left-0 h-screen w-[80%] max-w-[300px]
                !font-lato main_hero_slogan bg-[#FFFFFF]  transform
                ${
                  showNavbar ? "translate-x-0" : "translate-x-[-400px]"
                } transition-transform duration-300 z-[999]`}
          >
            <div className="flex justify-end items-center px-4 py-4 border-b border-gray-600">
              <button
                onClick={() => setShowNavbar(false)}
                className="text-2xl bg-black text-white hover:cursor-pointer focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>
            <div
              id="mobileNavbar"
              className="list-none text-2xl py-6 pl-5 gap-10"
            ></div>
          </div>

          <div
            id="navbar"
            className="hidden text-[16px] md:flex text-xl list-none justify-center items-center flex-wrap gap-5 md:font-semibold"
          >
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
              <li className="relative group cursor-pointer text-gray-700 flex justify-center items-center hover:text-[#77C9B3]">
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
            <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
              Tools
              <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
            </li>
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
      </div>
      <div>
        <News />
      </div>
    </>
  );
}

export default Navbar;
