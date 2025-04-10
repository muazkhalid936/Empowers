import React from "react";

const Video = () => {
  return (
    <div className="bg-[#222] py-[55px]"> {/* Darker background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 flex flex-col lg:flex-row justify-center items-center gap-10">
        {/* Left Side: Video */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full aspect-video max-w-[560px]">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://drive.google.com/file/d/1Hta2gL0T32y6L6GgP0NZh3c-NrGYGFLy/preview"
              allow="autoplay"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
          <h1 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Learn “eBay”, the World’s 2nd Largest eCommerce Marketplace in Just 4 Hours.
          </h1>
          <p className="text-[16px] sm:text-[18px] text-white">
            Even if you're an absolute beginner with no prior experience on eBay!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
