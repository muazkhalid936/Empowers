
"use client";
import Image from "next/image";
import { useState } from "react";

export default function EarlyBirdDiscount() {
  const [isModalOpen, setIsModalOpen] = useState(false);
    return (
    //   <div className="bg-[#ecf0ea] p-0 m-0">
    //   <div className="flex container mx-auto px-8 md:px-12 lg:flex-row flex-col justify-center items-center gap-5 sm:gap-10 my-[45px] md:my-[55px]">
    //     <div className=" lg:w-1/3 flex justify-center items-center">
    //       <h1 className="mb-6 tw text-lg text-center text-[#4a4d48] lg:text-start md:text-xl font-bold">
    //       Our EBAY CRASH COURSE (ECC) 3.0 is designed for Busy Individuals, House Wives, Students and Job Persons who want to learn fast and earn in Dollars! Plus, there's an exclusive offer you can't afford to miss.
    //       </h1> 
        
    //     </div>
    //     <div className="lg:w-1/2 flex justify-center items-center flex-col  ">
    //       {/* <h4 className="md:text-2xl text-xl tracking-wider font-semibold text-[#1B5EC6]">Discover about Empowerers</h4> */}
    //       <Image
    //     alt="image"
    //     src={"/qasim-sir-half-1536x1445.png"}
    //     className=" "
    //     width={450}
    //     height={300}
        
    //     />
          
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#ecf0ea] p-0 m-0 relative">
      {/* Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <Image
              src="/Special-Discount-4-1024x1024.png"
              alt="Full Size Discount"
              width={600}
              height={600}
              className="rounded-md max-h-[90vh] w-auto"
            />
          </div>
        </div>
      )} */}

      {/* Main Section */}
      <div className="flex container mx-auto px-8 md:px-12 lg:flex-row flex-col justify-center items-center gap-5 sm:gap-10 my-[45px] md:my-[55px]">
        
        {/* Text + Discount Image Column */}
        <div className="lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          
          {/* Clickable Discount Image */}
          {/* <div className="mb-6">
            <Image
              alt="Early Bird Discount"
              src="/Special-Discount-4-1024x1024.png"
              width={200}
              height={200}
              className="rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setIsModalOpen(true)}
            />
          </div> */}
          
          {/* Description Text */}
          <h1 className="text-lg text-[#4a4d48] md:text-xl font-bold">
            Our EBAY CRASH COURSE (ECC) 3.0 is designed for Busy Individuals, House Wives, Students and Job Persons who want to learn fast and earn in Dollars! Plus, there's an exclusive offer you can't afford to miss.
          </h1>
        </div>

        {/* Image of Qasim Sir */}
        <div className="lg:w-1/2 flex justify-center items-center flex-col">
          <Image
            alt="Qasim Sir"
            src="/qasim-sir-half-1536x1445.png"
            width={450}
            height={300}
          />
        </div>

      </div>
    </div>
    );
  }
  