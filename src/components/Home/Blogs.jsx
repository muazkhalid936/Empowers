import React from "react";
import BlogCard from "../Blog/BlogCard";
const Blog = [
  {
    image: "/blog1.jpg",
    title: "How to avoid eBay new account suspensions, a detailed post.",
    description: "How to avoid eBay new account suspensions, a detailed post.",
  },
  {
    image: "/blog2.jpg",
    title:
      "Amazon seller account from Pakistan, eBay is still easy, amazon is still hard ",
    description:
      "People were asking about the future of eBay in Pakistan while Amazon has included Pakistan in its seller.",
  },
  {
    image: "/blog3.jpg",
    title: "Why Ebay? Why Empowerers?",
    description:
      "1. eBay is your step one to the eCommerce world due to its friendly nature for sellers. 2.",
  },
];
const Blogs = () => {
  return (
    <div className=" ">
      <div className="container mx-auto mt-[45px] md:mt-[55px]">
        <div className="  md:mx-24">
          <div className="text-center font-bold  text-2xl sm:text-5xl">
            <h1 className="text-[#29ab87] tracking-wide drop-shadow-lg ">
              Blog Post
            </h1>

            <button className="md:text-[15px] font-semibold md:tracking-wide border hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full px-5 text-[#4a4d48] bg-transparent hover:text-[#29ab87]  md:px-10 py-2">
              Explore More
            </button>
          </div>
          <div className="container flex flex-col lg:flex-row gap-5  py-10 sm:py-20 justify-center items-center  mx-auto">
            <div className="lg:w-1/3">
              <BlogCard
                imgSrc={"/blog1.jpg"}
                date={"Jan 14, 2020"}
                title={
                  "How to avoid eBay new account suspensions, a detailed post."
                }
              />
            </div>
            <div className="lg:w-1/3">
              <BlogCard
                imgSrc={"/blog2.jpg"}
                date={"Jan 14, 2020"}
                title={
                  "Amazon seller account from Pakistan, eBay is still easy, amazon is still hard"
                }
              />
            </div>
            <div className="lg:w-1/3">
              <BlogCard
                imgSrc={"/blog3.jpg"}
                date={"Jan 14, 2020"}
                title={"Why Ebay? Why Empowerers?"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
