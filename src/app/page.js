"use client";
import Counter from "@/components/Counter";
import GallerySlider from "@/components/GallrySlider";
import ImageSlider from "@/components/ImageSlider";
import News from "@/components/News";
import StudentSlider from "@/components/StudentSlider";
import { useEffect, useState } from "react";

import { TypeAnimation } from "react-type-animation";
import {
  FaBars,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaTiktok,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";
import Welcome from "@/components/Home/Welcome";
import Video from "@/components/Home/Video";
import Training from "@/components/Home/Training";
import Services from "@/components/Home/Sevices";
import Blogs from "@/components/Home/Blogs";
export default function Home() {
  const [counterStart, setCounterStart] = useState(false);
  const [newStudent, setNewStudent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // console.log("Current Scroll Position:", window.scrollY);

      if (window.scrollY >= 4400) {
        // console.log("trigger");
        setCounterStart(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);



  //   {
  //     image : '/student1.png',
  //     name : "Samam Amir",
  //     city : "Multan",
  //     message : "A few years ago, I attempted to sell on eBay but struggled to generate sufficient income. However, after joining the Empowerers, I earned my first dollar within just 20 days. Now, after a long and rewarding journey, I am proud to call myself an eBay consultant."
  //   },
  //   {
  //     image : '/student2.png',
  //     name : "Saif Asim",
  //     city : "Multan",
  //     message : '"Founder of a comprehensive eBay A to Z services agency." Unfulfilled by the typical 9-to-5 grind, I decided to take control of my career. Today, I run my own eBay A to Z services agency, backed by a skilled and professional team.'
  //   },
  //   {
  //     image : '/student3.png',
  //     name : "Hassan Grewal",
  //     city : "Multan",
  //     message : 'Empowerers has been a game-changer for me. The guidance and training on eBay sales have transformed my approach, helping me achieve results I never thought possible. I’m grateful for the support and knowledge I’ve gained from this incredible program.'
  //   },
  //   {
  //     image : '/student4.png',
  //     name : "Abuzar Razaq",
  //     city : "Sahiwal",
  //     message : '"Running my online Company" Joined Empoweres in 2020. Now running my own eBay, Facebook removal and account reinstate based company named as OCCUFix.'
  //   },
  // ]

  // const Gallery = [
  //   '/gallery1.jpg',
  //   '/gallery2.jpg',
  //   '/gallery3.jpg',
  //   '/gallery4.jpg',
  //   '/gallery5.jpg',
  //   '/gallery6.jpg',
  //   '/gallery7.jpg',
  //   ];

  const newsLogo = [
    "/ary-logo.png",
    "/tbt-logo.jpg",
    "/ptv-logo.png",
    "/top-logo.png",
    "/mux9-logo.png",
    "/rohi-logo.png",
    "/suno-logo.jpg",
    "/dawah-logo.png",
    "/aik-news-logo.jpg",
    "/ridah-oman1-logo.jpg",
    "/lahor-ring.png",
    "/azad-cahiwala-logo.jpg",
    "/news-hd.jpg",
  ];

  const nextImage = () => {
    setNewStudent((prevValue) => prevValue + 1);
    if (newStudent === Students.length - 1) {
      setNewStudent(0);
    }
    console.log("click");
  };
  // console.log(newStudent)

  return (
    <div className="bg-[#fafafa]">
      <div>
        <ImageSlider />
      </div>
      <Welcome />

      <Video />

      <Training />

      <Services />
      {/* Blog Section */}
     <Blogs />

      {/* What Our Student Says */}

      <StudentSlider />

      {/* Memorable Moments Gallery */}
      <div className=" mt-40 ">
        <div className="text-center font-bold text-5xl my-16">
          <h1 className="text-[#29ab87] tracking-wide drop-shadow-lg ">
            Memorable Moments
          </h1>
        </div>
        <div>
          <GallerySlider />
        </div>
      </div>

      <div className="my-40 mx-40 hover:shadow-2xl transition-all ease-in-out duration-500 flex justify-center items-center py-20 rounded-lg">
        <iframe
          className="w-[900px] h-[500px]"
          src="https://www.youtube.com/embed/78oNsr98dBY?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fempowerers.co&widgetid=1&forigin=https%3A%2F%2Fempowerers.co%2F&aoriginsup=1&gporigin=https%3A%2F%2Fempowerers.co%2F&vf=1"
          frameBorder="0"
        ></iframe>
      </div>

      {/* As Seen ON */}
      {/* <div className="my-40 py-28 bg-gray-200 overflow-hidden">
        <div className="flex bg-gray-200  gap-8 px-10 translate-x-[-200px]">
         {newsLogo?.map((logo,index) => {
          return <div key={index} className="flex-shrink-0">
              <img src={logo} alt="no Image" className="h-[150px] w-auto " />
          </div>
         })}
        </div>
      </div> */}
      <div className="my-40 py-[30px] bg-gray-200 overflow-hidden">
        <div className="flex bg-gray-200 gap-20 px-10 animate-scroll">
          {/* Duplicating the logos for seamless transition */}
          {newsLogo.concat(newsLogo).map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img src={logo} alt="no Image" className="h-[120px] " />
            </div>
          ))}
        </div>

        {/* CSS for Infinite Scrolling Animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 10s linear infinite;
            width: max-content; /* Prevent shrinking */
          }
        `}</style>
      </div>

      <div className="my-40 mx-40 ">
        <div className="flex justify-between items-center">
          <div>
            <img
              src="https://empowerers.co/wp-content/uploads/2024/03/mobile.png"
              alt=""
            />
          </div>
          <div className="shadow-xl border border-gray-300 rounded-2xl h-[325px] w-[500px] flex flex-col justify-center p-10">
            <div className="pl-7">
              <h1 className="font-bold tracking-wide text-3xl text-[#29ab87] drop-shadow-lg">
                Newsletter
              </h1>
            </div>
            <div className="py-8 text-center">
              <input
                type="text"
                className="border border-gray-400 p-4 rounded-md w-[400px] outline-none"
                placeholder="Email"
              />
            </div>
            <div className="text-right pr-7">
              <button className="text-white bg-[#29ab87] py-3 px-8 rounded-full text-xl tracking-wide hover:bg-[white] hover:text-[#29ab87] hover:cursor-pointer border hover:border-gray-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
