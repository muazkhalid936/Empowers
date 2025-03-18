import React from 'react'

const Video = () => {
  return (
    <div>

<div className="md:flex md:justify-evenly my-40">
        <div className="">
          <iframe
            className="rounded-lg w-[500px] md:w-[560px]"
            // width="560"
            height="315"
            src="https://www.youtube.com/embed/iGLhevhnF9E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:w-[500px] p-5 ">
          {/* <h4 className="md:text-2xl text-xl tracking-wider font-semibold text-[#1B5EC6]">Discover about Empowerers</h4> */}
          <h1 className="mb-8 text-3xl md:text-4xl font-bold">
            Welcome To Empowerers
          </h1>
          <p className="md:text-2xl ">
            Founded in Oct 2020, primarily covering Pakistani people (overseas
            and residents), Empowerers started as an online eCommerce education
            organization covering the education of how to earn online on
            eCommerce marketplaces including eBay, ETSY, Shopify, Amazon, Daraz,
            Fiverr, and Upwork.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Video