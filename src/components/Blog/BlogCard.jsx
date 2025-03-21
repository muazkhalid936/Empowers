import Image from "next/image";
import React from "react";
import { LuMoveRight } from "react-icons/lu";

const BlogCard = ({ imgSrc, date, title }) => {
  return (
    <div className="hover:shadow-2xl  shadow-xl transition-all ease-in-out duration-300 cursor-pointer w-auto h-[420px] xl:h-[520px] rounded-2xl overflow-hidden">
      <div className="relative group">
        <Image
          src={imgSrc}
          width={400}
          height={300}
          alt="Blog"
          className="transition  !w-full duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></div>
      </div>
      <div className="flex flex-col justify-between flex-1 h-auto gap-2 p-5">
        <p className="text-[#7a7a7a]">{date}</p>
        <p className=" text-xl md:text-2xl xl:text-3xl font-bold">{title}</p>
        <button className=" text-[#7a7a7a] py-2  flex justify-start items-center gap-2 rounded-lg">
          Continue Reading <LuMoveRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
