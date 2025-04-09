import React from "react";

const Video = () => {
  return (
    <div className="bg-[#ecf0ea] py-[55px]">
      <div className="flex container mx-auto px-10 md:px-24 lg:flex-row flex-col justify-center items-center gap-5 sm:gap-10 my-[45px] md:my-[55px]">
        {/* Left Side: Video */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <iframe
            className="rounded-lg w-full max-w-[560px] h-[315px]"
            src="https://drive.google.com/file/d/1Hta2gL0T32y6L6GgP0NZh3c-NrGYGFLy/preview"
            allow="autoplay"
          ></iframe>
        </div>

        {/* Right Side: Text */}
        <div className="lg:w-1/2 flex justify-center items-center flex-col">
          <h1 className="mb-6 text-2xl text-center text-[#4a4d48] lg:text-start md:text-4xl font-bold">
            Learn “eBay”, the World’s 2nd Largest eCommerce Marketplace in Just 4 Hours.
          </h1>
          <p className="text-black text-[16px] sm:text-[18px] text-center lg:text-start">
            Even if you're an absolute beginner with no prior experience on eBay!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
