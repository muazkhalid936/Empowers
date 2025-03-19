import React from "react";
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
    <div className="container mx-auto">
      <div className="mt-[0px] sm:mt-[100px] md:mx-24">
        <div className="text-center font-bold  text-2xl sm:text-5xl my-10 sm:my-16">
          <h1 className="text-[#29ab87] tracking-wide drop-shadow-lg ">
            Blog Post
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:justify-between gap-7">
          {Blog.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[350px] shadow-md hover:shadow-xl flex flex-col rounded-md"
              >
                <img
                  src={item.image}
                  alt="No Blog Image"
                  className="w-[350px] h-[200px] rounded-md"
                />
                <h1 className="my-5 text-xl sm:text-2xl font-bold  px-5">{item.title}</h1>
                <p className="px-5 mb-5">{item.description}</p>
                <button className="px-5 text-[blue] mt-auto text-start mb-4 cursor-pointer">
                  Read More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
