import React from "react";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
    FaBriefcase,
    FaChalkboardTeacher,
    FaMarkdown,
    FaPeopleCarry,
    FaRegBuilding,
    FaStreetView,
  } from "react-icons/fa";
const ourServicesLeft = [
    {
      icon: <FaChalkboardTeacher className="w-10 h-10 text-[#29ab87]" />,
      text: "eCommerce Consultancy",
    },
    {
      icon: <FaRegBuilding className="w-10 h-10 text-[#29ab87]" />,
      text: "Staff Augmentation | (eBay, ETSY, Tiktok Shop)",
    },
    {
      icon: <FaBriefcase className="w-10 h-10 text-[#29ab87]" />,
      text: "Managerial Services | (eBay, ETSY, Tiktok Shop)",
    },
  ];

  const ourServicesRight = [
    {
      icon: <FaPeopleCarry className="w-10 h-10 text-[#29ab87]" />,
      text: "Fulfillments Centers",
    },
    {
      icon: <FaStreetView className="w-10 h-10 text-[#29ab87]" />,
      text: "Shared Spaces in incubators",
    },
    {
      icon: <FaMarkdown className="w-10 h-10 text-[#29ab87]" />,
      text: "Social Media Management",
    },
  ];

const Sevices = () => {
  return (
    <div>
      <div className="md:mt-[55px] md:px-24 container mx-auto">
        <div className="text-center my-10 ">
          <h1 className="text-5xl font-bold tracking-wide text-[#29ab87] drop-shadow-lg">
            Our Services
          </h1>
        </div>

        <div className=" my-10 flex justify-around items-center gap-16 relative">
          <div className="absolute border border-gray-300 w-[120px]  rotate-30 top-35 left-[280px]"></div>
          <div className="absolute border border-gray-300 w-[90px]  rotate- top-75 left-[278px]"></div>
          <div className="absolute border border-gray-300 w-[120px]  rotate-150 top-115 left-[280px]"></div>

          <div className="absolute border border-gray-300 w-[120px]  rotate-150 top-38 right-[300px]"></div>
          <div className="absolute border border-gray-300 w-[90px]  rotate- top-75 right-[305px]"></div>
          <div className="absolute border border-gray-300 w-[120px]  rotate-205 top-115 right-[308px]"></div>
          <div>
            {ourServicesLeft.map((leftData, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-end items-center gap-5 h-[150px]"
                >
                  <h1 className="text-2xl">
                    {leftData.text.split("|").map((line, index) => (
                      <span className="text-[18px]" key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h1>
                  <div>{leftData.icon}</div>
                </div>
              );
            })}
          </div>
          <div className="w-[350px] h-[350px] border shadow-2xl border-gray-300 rounded-full flex items-center justify-center">
            <img src="/empowerer_logo.png" alt="" className="w-[200px] " />
          </div>
          <div>
            {ourServicesRight.map((leftData, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-start items-center gap-5 h-[150px]"
                >
                  <div>{leftData.icon}</div>
                  <h1 className="text-[18px]">{leftData.text}</h1>
                </div>
              );
            })}
          </div>
        </div>
        {/* {counterStart ? <div className="md:flex md:justify-between flex-wrap gap-10">
        <Counter value={1400} Data={"Students"}/>
        <Counter value={100} Data={"Meetup in 3 Months"}/>
        <Counter value={200} Data={"Satisfied Clients"}/>
        <Counter value={20} Data={"Fullfilment Centers In UK, US, and AUS"}/>
      </div> : ""*/}
      </div>
    </div>
  );
};

export default Sevices;
