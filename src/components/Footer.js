import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-[#807d79]">
      <div className=" container mx-auto pt-10 sm:pt-20 px-10 md:px-24  text-white">
        <div className="flex flex-wrap gap-5  justify-between  my-5 sm:my-20">
          <div>
            <Link href={"/"}>
              <Image
              width={500}
              height={500}
                src="/empowerer_logo_re_bg.png"
                alt=""
                className="w-[300px] cursor-pointer drop-shadow-md  mx-auto  rounded-lg"
              />
            </Link>
            <p className="text-[14px] sm:text-[20px] mt-8">
              Being the pioneer organization in the eBay <br /> marketplace
              education in Pakistan, to date, <br /> Empowerers is considered
              the most detailed <br /> and most advanced organization in the
              knowledge <br /> and skills of the eBay marketplace.
            </p>
          </div>
          <div>
            <h1 className="cursor-pointer text-2xl textGray font-bold tracking-wide mb-5">
              Quick Links
            </h1>
            <p className="mb-2 cursor-pointer text-[14px] sm:text-[20px] ">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                About Us
              </span>
            </p>
            <p className="mb-2 hover:cursor-pointer text-[14px] sm:text-[20px]">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Services
              </span>
            </p>
            <p className="mb-2 hover:cursor-pointer text-[14px] sm:text-[20px]">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Blog
              </span>
            </p>
            <p className="hover:cursor-pointer text-[14px] sm:text-[20px]">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Contact Us
              </span>
            </p>
          </div>
          <div>
            <h1 className="cursor-pointer text-2xl textGray font-bold tracking-wide mb-5">
              Resources
            </h1>
            <p className="mb-2 hover:cursor-pointer text-[14px] sm:text-[20px]">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Courses
              </span>
            </p>
            <p className="mb-2 hover:cursor-pointer text-[14px] sm:text-[20px]">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Our Experts
              </span>
            </p>
            <p className="mb-2 hover:cursor-pointer text-[14px] sm:text-[20px]">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Student
              </span>
            </p>
            <p className="mb-2 hover:cursor-pointer text-[14px] sm:text-[20px]">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Verification
              </span>
            </p>
            <p className="hover:cursor-pointer text-[14px] sm:text-[20px]">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Platform
              </span>
            </p>
          </div>
          <div>
            <h1 className="cursor-pointer text-2xl textGray font-bold tracking-wide mb-5">
              Support
            </h1>
            <p className="mb-2 hover:cursor-pointer text-[14px] sm:text-[20px]">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Forums
              </span>
            </p>
            <p className="mb-2 hover:cursor-pointer text-[14px] sm:text-[20px]">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Documentation
              </span>
            </p>
            <p className="mb-2 hover:cursor-pointer text-[14px] sm:text-[20px]">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Services
              </span>
            </p>
            <p className="mb-2 hover:cursor-pointer text-[14px] sm:text-[20px]">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Verification
              </span>
            </p>
            <p className="hover:cursor-pointer text-[14px] sm:text-[20px]">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Community
              </span>
            </p>
          </div>
          <div className="">
          <h1 className="cursor-pointer text-2xl textGray font-bold tracking-wide mb-5">
Contact Us            </h1>

            <p className="mt-5 mb-3 text-[14px] sm:text-[20px]">+92 3327195240</p>
            <p className="text-[14px] sm:text-[20px] underline">info@empowerers.co</p>
            <div className="text-[14px] sm:text-[20px] flex gap-4 my-8 items-center ">
              <FaFacebook />
              <FaLinkedin />
              <FaTiktok />
              <FaYoutube />
              <MdOutlineEmail />
            </div>
          </div>
          {/* Email section
        <div className='mx-40 px-20 mb-24'>
            <label htmlFor="email"  className='text-2xl'>Email <span className='text-red-600'>*</span></label><br />
            <input type="text" id='email'
            placeholder='Your Email address'
            className='outline-none rounded-md textGray mt-2 w-[400px] p-3 text-[14px] sm:text-[20px] bg-gray-300' /> <br />
            <button className='mt-8 px-8 py-2 rounded-md cursor-pointer hover:bg-white hover:text-[#29ab87] border text-[14px] sm:text-[20px] tracking-wide'>Subscribe</button>
        </div> */}
        </div>
        <div className=" px-20 text-center border-green-300 border-t-1 py-5 ">
          <p className="">Empowerers | © All right reserved 2025 </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
