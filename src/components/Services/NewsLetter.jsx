import Image from "next/image";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex container mx-auto gap-10 sm:gap-0 flex-col-reverse sm:flex-row items-center sm:max-h-[600px] px-10 md:px-24 justify-center sm:py-[55px] py-[45px] ">
      {/* Left Side - Image */}
      <div className="sm:w-1/2 flex justify-center">
        <Image
          width={500}
          height={500}
          objectFit="contain"
          src="/mobile.png"
          
          alt="Mobile Illustration"
          className="object-contain  sm:!h-[400px]"
        />
      </div>

      {/* Right Side - Text & Form */}
      <div className="sm:w-1/2 flex flex-col  gap-2 sm:gap-5">
        <h2 className="text-[#29AB87] text-2xl font-bold">
          GET OUR FREE EBAY GUIDE AND OTHER FREE GIFTS
        </h2>
        <p className="text-gray-600 mt-3">
          Get a free eBay selling guide to sell products on eBay and later on,
          you will get updates about eCommerce business.
        </p>
        <p className="font-semibold mt-2">Never Miss any Gift!</p>

        <div className="mt-5 flex gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-3 border rounded-full focus:outline-none"
          />
          <button className="bg-[#29AB87] whitespace-nowrap text-white px-5 rounded-full">
            Get Free Gift
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
