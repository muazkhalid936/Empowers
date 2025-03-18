import BlogCard from "@/components/Blog/BlogCard";
import MainHeader from "@/components/MainHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <MainHeader headings={"Blog Page"} />

      <div className="container flex flex-col sm:flex-row gap-5  py-20 justify-center items-center mx-auto">
        <div className="sm:w-1/3">
          <BlogCard
            imgSrc={"/blog1.jpg"}
            date={"Jan 14, 2020"}
            title={
              "How to avoid eBay new account suspensions, a detailed post."
            }
          />
        </div>
        <div className="sm:w-1/3">
          <BlogCard
            imgSrc={"/blog2.jpg"}
            date={"Jan 14, 2020"}
            title={
              "Amazon seller account from Pakistan, eBay is still easy, amazon is still hard"
            }
          />
        </div>
        <div className="sm:w-1/3">
          <BlogCard
            imgSrc={"/blog3.jpg"}
            date={"Jan 14, 2020"}
            title={"Why Ebay? Why Empowerers?"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
