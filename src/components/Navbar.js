"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
import SaleBanner from "./SaleBanner";
const tools = [
  { label: "eBoss", href: "https://eboss.pk/" },
  { label: "GoLogin", href: "https://gologin.com/register" },
  { label: "ContentStudio", href: "https://contentstudio.io/" },
  { label: "VidIq", href: "https://vidiq.com/LetsEmpower/" },
  {
    label: "ZikAnalytics",
    href: "https://www.zikanalytics.com/pricing/?ReferrerId=244083",
  },
  {
    label: "Payoneer",
    href: "https://payouts.payoneer.com/partners/or.aspx?pid=YOYIZC74IO2s4KZQp7tgsw%3d%3d&utm_source=affiliatesCN&utm_medium=The+Empowerers+LLP&utm_campaign=RevShare&transaction_id=1023e758b6b90485844f115e222099&offer_id=505&aff_id=43090",
  },
  {
    label: "SendInBlue",
    href: "https://www.brevo.com/?tap_a=30591-fb13f0&tap_s=2845714-4d5a62",
  },
  {
    label: "NameCheap",
    href: "https://www.namecheap.com/?clickID=wUowdbwQGxyPU30Q9YR3mQobUkHyjoxXfTJITk0&irgwc=1&utm_source=IR&utm_medium=Affiliate&utm_campaign=3230165&affnetwork=ir&ref=ir",
  },
];

const trainingPrograms = [
  {
    label: "eBay Training",
    submenu: [
      { label: "eBay VBT (Video Based Training)" },
      { label: "eBay Incubator Based Training" },
      { label: "eBay Business Course - EBC" },
      { label: "eBay Crash Course – ECC 3.0" },
    ],
  },
  {
    label: "TikTok Shop Training",
    submenu: [
      { label: "TikTok Shop VBT (Video Based Training)" },
      { label: "TikTok Shop Incubator Based Training" },
      { label: "TikTok Shop Online Training - TTS" },
    ],
  },
  {
    label: "Etsy Training",
    submenu: [
      { label: "Etsy VBT (Video Based Training)" },
      { label: "Etsy Incubator Based Training" },
      { label: "Etsy Training Program - ETP" },
    ],
  },
];

const services = [
  { label: "eCommerce Consultation" },
  { label: "Staff Augmentation" },
  { label: "Managerial Services" },
  { label: "Fulfillment Centers" },
  {
    label: "Shared Spaces in Incubators",
    submenu: [
      {
        label: "Multan",
        submenu: [
          { label: "Multan Head Office" },
          { label: "Multan Central Incubator" },
        ],
      },
      { label: "Lahore" },
      { label: "Faisalabad" },
      { label: "Rawalpindi" },
      { label: "Sialkot" },
      { label: "Sahiwal" },
      { label: "Swat" },
    ],
  },
  { label: "Social Media Management" },
  { label: "Artificial Intelligence Services" },
  { label: "Cyber Security" },
];

function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showTraining, setShowTraining] = useState(false);
  const [subMenuTraining, setSubMenuTraining] = useState(null);

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
          {/* <div className="text-xl   px-3 py-2  text-white   ">
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
          </div> */}

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

            <div
              className="relative"
              onMouseEnter={() => setShowTraining(true)}
              onMouseLeave={() => setShowTraining(false)}
            >
              <button className="cursor-pointer relative text-gray-700 gap-2 hover:text-[#77C9B3] flex items-center gap-1">
                Training{" "}
                <span className="text-sm">
                  <FaChevronUp
                    className={`${
                      showTraining ? "" : "-rotate-180"
                    } transition-all ease-in-out duration-300`}
                  />
                </span>
              </button>

              <AnimatePresence>
                {showTraining && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-2 top-2 z-50 w-56 bg-white shadow-lg rounded-lg"
                  >
                    <ul className="py-2 text-left">
                      {trainingPrograms.map((training, index) => (
                        <li key={index} className="relative group">
                          <div
                            className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex justify-between items-center cursor-pointer"
                            onMouseEnter={() =>
                              training.submenu &&
                              setSubMenuTraining(training.label)

                            }
                            onMouseLeave={()=>{
                              training.submenu &&
                              setSubMenuTraining(null)
                            }}
                          >
                            {training.label}
                            {training.submenu && (
                              <FaChevronRight className="text-xs" />
                            )}
                          </div>

                          {/* Submenu */}
                          <AnimatePresence>
                            {training.submenu &&
                              subMenuTraining === training.label && (
                                <motion.div
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 10 }}
                                  transition={{ duration: 0.3 }}
                                  className="absolute left-full top-0 w-80 bg-white shadow-lg rounded-lg"
                                  onMouseEnter={() =>
                                    setSubMenuTraining(training.label)
                                  }
                                  onMouseLeave={() => setSubMenuTraining(null)}
                                >
                                  <ul className="py-2 text-left">
                                    {training.submenu.map((sub, subIndex) => (
                                      <li key={subIndex} className="relative">
                                        <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                                          {sub.label}
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                          </AnimatePresence>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button className="cursor-pointer relative text-gray-700 gap-2 hover:text-[#77C9B3] flex items-center gap-1">
                Services{" "}
                <span className="text-sm">
                  <FaChevronUp
                    className={`${
                      showServices ? "" : "-rotate-180"
                    } transition-all ease-in-out duration-300`}
                  />
                </span>
              </button>
              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-2 top-2 z-100 w-56 bg-white shadow-lg rounded-lg"
                  >
                    <ul className="py-2 text-left">
                      {services.map((service, index) => (
                        <li key={index} className="relative group">
                          <div
                            className=" px-4 py-2 text-gray-800 hover:bg-gray-100 flex justify-between items-center cursor-pointer"
                            onMouseEnter={() => {
                              if (service.submenu) setOpenSubmenu(true);
                            }}
                            onMouseLeave={() => setOpenSubmenu(false)}
                          >
                            {service.label}
                            {service.submenu && (
                              <FaChevronRight className="text-xs" />
                            )}
                          </div>
                          {service.submenu && openSubmenu && (
                            <AnimatePresence>
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.3 }}
                                className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-lg"
                              >
                                <ul className="py-2 text-left">
                                  {service.submenu.map((sub, subIndex) => (
                                    <li
                                      key={subIndex}
                                      className="relative text-start group"
                                    >
                                      <div
                                        className=" px-4 py-2 text-gray-800 hover:bg-gray-100 flex justify-between items-center cursor-pointer"
                                        onMouseEnter={() =>
                                          setOpenSubmenu(sub.label)
                                        }
                                      >
                                        {sub.label}
                                        {sub.submenu && (
                                          <FaChevronRight className="text-xs" />
                                        )}
                                      </div>
                                      {sub.submenu &&
                                        openSubmenu === sub.label && (
                                          <motion.div
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-lg"
                                          >
                                            <ul className="py-2">
                                              {sub.submenu.map(
                                                (nested, nestedIndex) => (
                                                  <li
                                                    key={nestedIndex}
                                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                                  >
                                                    {nested.label}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </motion.div>
                                        )}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            </AnimatePresence>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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

            <button
              onMouseEnter={() => setShowTools(true)}
              onMouseLeave={() => setShowTools(false)}
              className="cursor-pointer relative text-gray-700 gap-2 hover:text-[#77C9B3] flex items-center gap-1"
            >
              Tools{" "}
              <span className="text-sm">
                <FaChevronUp
                  className={` ${
                    showTools ? "" : "-rotate-180 "
                  } transition-all ease-in-out duration-300`}
                />
              </span>
              <AnimatePresence>
                {showTools && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} // Start hidden and slightly offset
                    animate={{ opacity: 1, y: 0 }} // Animate to fully visible
                    exit={{ opacity: 0, y: 10 }} // Animate out (fade and move down)
                    transition={{ duration: 0.3 }} // Animation duration
                    onMouseEnter={() => setShowTools(true)}
                    onMouseLeave={() => setShowTools(false)}
                    className="absolute left-0 mt-2 top-2 z-100 w-48 bg-white shadow-lg rounded-lg"
                  >
                    <ul className="py-2">
                      {tools.map((service, index) => (
                        <li key={index}>
                          <Link
                            href={service.href}
                            className="block  text-start pl-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

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
      <SaleBanner />
    </>
  );
}

export default Navbar;
