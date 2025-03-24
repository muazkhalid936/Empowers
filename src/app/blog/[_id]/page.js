import CommentForm from "@/components/Blog/CommentBox";
import { BlogsData } from "@/data";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const resolvedParams = await params; // Unwrap the Promise
  console.log(resolvedParams);

  const slug = resolvedParams._id;
  console.log(slug); // Check if _id is correctly extracted

  const work = BlogsData.find((work) => work.id === parseInt(slug));
  console.log(work);
  return (
    <div className="container mx-auto md:px-80 px-10">
      <div className="flex justify-center flex-col my-[45px] sm:py-[55px] items-center gap-5 sm:gap-10">
        <p className="textGray text-2xl sm:text-5xl font-bold w-[90%] text-center">
          {work.title}
        </p>
        <p className="textGray text-xl   w-[90%] text-center">{work.date}</p>

        <Image
          src={work.imgURL}
          width={400}
          height={500}
          className="w-full h-full"
        />

        <div
          dangerouslySetInnerHTML={{ __html: work.description }}
          className=" text-gray-500 space-y-[10px] text-[18px]"
        />
        {/* {work.description} */}
        <CommentForm />
      </div>
    </div>
  );
};

export default page;
