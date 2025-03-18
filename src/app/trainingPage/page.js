"use client";
import React from 'react'
import { LuShoppingCart } from "react-icons/lu";


function trainingPage() {
  const outTrainings = [
    {
      img : '/trainingEbay.jpg',
      text : "eBay Training",
      features : [
        "*25 eBay Sessions* (A to Z) with Practical Demonstrations",
        "*1-Year Access* to Recorded Sessions",
        "*Exclusive WhatsApp & Facebook Groups* (1 Year)",
        "*Dedicated Support* (1 Year)",
        "*Incubator Visit Access* (1 Year)"
      ],
      price : "$ 297.00"
    },
    {
      img : '/trainingEtsy.jpg',
      text : "Etsy Training",
      features : [
        "*16 Etsy Sessions* (A to Z)",
        "*1-Year Recording Access*",
        "*Dedicated WhatsApp & Facebook Groups",
        "*Technical Support Access",
        "*Warehouse Access"
      ],
      price : "$ 197.00"
    },
    {
      img : '/trainingTiktok.jpg',
      text : "Tik Tok Shop Training",
      features : [
        "*18 TikTok Sessions* (A to Z)",
        "*90+ Hours of Video Lectures",
        "*1-Year Recording Access",
        "*Dedicated Technical Support*",
        "*Access to Empowerers Stock Products"
      ],
      price : "$ 197.00"
    }
  ];
  return (
    <div>
      <div className='bg-[#ECF0EA] py-10 text-center'>
        <h1 className='font-bold text-5xl text-[#29AB87] drop-shadow-md'>Our Trainings</h1>
      </div>
      <div className='my-28'>
        <div className="md:flex md:justify-between my-5 mx-5 gap-16 md:mx-40">
          {outTrainings.map((data,index) => {
            return <div key={index} className="my-10 border border-gray-300 rounded-lg flex flex-col min-h-[400px]">
              <img src={`${data.img}`} alt="no Image" className="hover:cursor-pointer rounded-t-md" />
              <div className=" m-4">
                {data.features.map((features,index) => {
                return <div key = {index} className="py-2">
                  <p className="">{features}</p>
                </div>
              })}
              </div>
              <div className='flex justify-between items-center mt-auto py-5 mx-5'>
                <span>{data.price}</span>
                <div className='flex items-center gap-5'>
                    <LuShoppingCart className='h-7 w-7 text-[#29ab87]' />
                <button className=" text-xl bg-[#29ab87] hover:text-[#29ab87] hover:bg-white border border-[#29ab87] shadow-2xl hover:cursor-pointer transition-all ease-in-out duration-500 text-white tracking-wide font-bold mt-auto py-1 px-4 rounded-full">Add to Cart</button>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default trainingPage
