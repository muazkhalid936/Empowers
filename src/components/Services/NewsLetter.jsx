import Image from "next/image";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex container mx-auto items-center justify-center p-10 ">
      {/* Left Side - Image */}
      <div className="w-1/2 flex justify-center">
        <Image
          width={500}
          height={500}
          src="/mobile.png"
          alt="Mobile Illustration"
          className="object-contain"
        />
      </div>

      {/* Right Side - Text & Form */}
      <div className="w-1/2 flex flex-col  gap-5">
        <h2 className="text-[#29AB87] text-2xl font-bold">
          GET OUR FREE EBAY GUIDE AND OTHER FREE GIFTS
        </h2>
        <p className="text-gray-600 mt-3">
          Get a free eBay selling guide to sell products on eBay and later on,
          you will get updates about eCommerce business.
        </p>
        <p className="font-semibold mt-2">Never Miss any Gift!</p>

        <div className="mt-5 flex">
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
