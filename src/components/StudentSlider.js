"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const Students = [
  {
    image: "/student1.png",
    name: "Samam Amir",
    city: "Multan",
    message: `A few years ago, I attempted to sell on eBay but struggled to generate sufficient income. However, after joining the Empowerers, I earned my first dollar within just 20 days. Now, after a long and rewarding journey, I am proud to call myself an eBay consultant.`,
  },
  {
    image: "/student2.png",
    name: "Saif Asim",
    city: "Multan",
    message:
      '"Founder of a comprehensive eBay A to Z services agency." Unfulfilled by the typical 9-to-5 grind, I decided to take control of my career. Today, I run my own eBay A to Z services agency, backed by a skilled and professional team.',
  },
  {
    image: "/student3.png",
    name: "Hassan Grewal",
    city: "Multan",
    message:
      "Empowerers has been a game-changer for me. The guidance and training on eBay sales have transformed my approach, helping me achieve results I never thought possible. I’m grateful for the support and knowledge I’ve gained from this incredible program.",
  },
  {
    image: "/student4.png",
    name: "Abuzar Razaq",
    city: "Sahiwal",
    message:
      'Running my online Company" Joined Empowerers in 2020. Now running my own eBay, Facebook removal and account reinstate based company named as OCCUFix.',
  },
];

function StudentSlider() {
  return (
    <div className="text-center my-20">
      <h1 className="font-bold text-5xl text-[#29AB87] drop-shadow-md mb-5">
        What Our Students Say
      </h1>

      <div className="relative mx-auto rounded-lg shadow-lg border border-gray-300 my-20 w-full md:w-[700px] bg-white p-5 text-center">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          // pagination={{ clickable: true }}
          spaceBetween={50}
          loop  = {true}
          slidesPerView={1}
          className="swiper-container"
        >
          {Students.map((student, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <img
                src={student.image}
                alt={student.name}
                className="w-[200px] h-[200px] mx-auto rounded-full aspect-[16/5]"
              />
              <div className="p-5">
                <h1 className="text-xl font-semibold">{student.name}</h1>
                <span className="text-gray-500">{student.city}</span>
                <p className="mt-3 text-lg text-gray-700 relative px-20">
                  <BiSolidQuoteAltLeft className="inline-block mr-3 text-gray-300 h-6 w-6" />
                  {student.message}
                  <BiSolidQuoteAltRight className="inline-block ml-3 text-gray-300 h-6 w-6" />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default StudentSlider;
