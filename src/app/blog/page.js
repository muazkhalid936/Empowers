import BlogCard from "@/components/Blog/BlogCard";
import MainHeader from "@/components/MainHeader";
import React from "react";
import { BlogsData } from "@/data";

const page = () => {
  return (
    <div>
      <MainHeader headings={"Blog Page"} />

      <div className="container flex flex-col sm:flex-row gap-5  py-10 sm:py-20 justify-center items-center md:px-24 px-10 mx-auto">
      {
              BlogsData.map((data, index) => {  
                return (
                  <div key={index} className="lg:w-1/3">
                    <BlogCard
                      imgSrc={data.imgURL}
                      date={data.date}
                      link= {data.id}
                      title={data.title}
                      description={data.description}
                    />
                  </div>
                );
              }
            
            )}
      </div>
    </div>
  );
};

export default page;
