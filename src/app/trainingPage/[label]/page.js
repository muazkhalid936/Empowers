'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const outTrainings = [
  {
    id: 0,
    img: "/trainingEbay.jpg",
    text: "eBay Training",
    url: "eBay-Training",
    features: [
      "25 eBay Sessions* (A to Z) with Practical Demonstrations",
      "1-Year Access* to Recorded Sessions",
      "Exclusive WhatsApp & Facebook Groups* (1 Year)",
      "Dedicated Support* (1 Year)",
      "Incubator Visit Access* (1 Year)",
    ],
  },
 

 
  {
    id: 1,
    img: "/trainingEtsy.jpg",
    text: "Etsy Zoom Based Training",
    url: "Etsy-Training",
    features: [
      "2-Month Intensive Program",
      "Practical Assignments",
      "1-Year Access to VBT (Video Training)",
      "Lifetime Access to Updated Content",
      "Empowerers Product Stock Access",
      "Private Community & WhatsApp Group",
      "One Year Post-Course Support"
    ],
  },

  {
    id: 1,
    img: "/trainingEtsy.jpg",
    text: "Etsy Video Based Training",
    url: "Etsy-Training",
    features: [
      "55+ Hours of High-Quality Recorded Sessions",
      "Etsy Store Setup + SEO Optimization",
      "Product Research, Pricing, Branding & Marketing",
      "Full guidance on Digital & Physical Product Selling",
      "Empowerers Private Community for Continuous Support",
    ],
  },

    {
    id: 1,
    img: "/trainingEtsy.jpg",
    text: "Etsy Incubator Based Training",
    url: "Etsy-Training",
    features: [
      "2-Month Based Incubator Training",
      "Practical assignments ",
      "one-on-one mentorship",
      "1-Year Access to VBT",
      "Lifetime Content Updates",
      "Empowerers stock access",
      "Private Community & WhatsApp Group"
    ],
  },


  
  {
    id: 2,
    img: "/trainingTiktok.jpg",
    text: "TikTok Zoom Based Training",
    url: "TikTok-Shop-Training",
    features: [
      "2-Month Intensive Program",
      "Practical Assignments",
      "1-Year Access to VBT (Video Training)",
      "Lifetime Access to Updated Content",
      "Empowerers Product Stock Access",
      "Private Community & WhatsApp Group",
      "Hotline Support for TikTok Issues"
    ],
  },
  
   {
    id: 2,
    img: "/TTS-VBT.jpg",
    text: "TikTok Video Based Training",
    url: "TikTok-Shop-Training",
    features: [
      "90+ Hours of Video Lectures",
      "1-Year Recording Access",
      "Step-by-step TikTok Shop setup & selling guide",
      "Learn product hunting, order management, marketing & more",
    ],
  },

   {
    id: 2,
    img: "/TTS-IBT.jpg",
    text: "TikTok Incubator Based Training",
    url: "TikTok-Shop-Training",
    features: [
      "2-Month Intensive Training Program",
      "Mentorship & One-on-One Support",
      "Networking Opportunities",
      "Lifetime Access to Updated Content",
      "Empowerers Product Stock Access",
      "Private Facebook Community & WhatsApp Group"

    ],
  },
];

function Page() {
  const params = useParams();
  const label = params.label;

  // Optionally log matched training
  const matchedTraining = outTrainings.find(val => val.url === label);
  console.log("Matched Training:", matchedTraining);

  return (
    <div className='my-20'>
    <div className='text-center'>
       <h1 className="md:text-5xl text-[#29ab87] text-2xl drop-shadow-lg font-bold">
            {label} 
          </h1>
    </div>
    <div className="md:flex my-10 px-10 md:mx-10  gap-5 lg:flex-row flex-wrap flex-col">
      {outTrainings
        .filter(data => data.url === label)
        .map((data, index) => (
          <div
            key={index}
            className="border lg:w-[400px] border-gray-300 hover:shadow-2xl transition-all ease-in-out duration-300 rounded-2xl bg-white overflow-hidden mt-5 sm:mt-0 flex flex-col min-h-[250px]"
          >
            <img
              src={data.img}
              alt="Training"
              className="hover:cursor-pointer rounded-t-md"
            />
            <div className="mx-auto my-5 font-bold text-xl">{data.text}</div>
            <div className="m-4">
              {data.features.map((feature, i) => (
                <ul key={i} className="mb-2 list-disc ml-5">
                  <li className="text-[16px]">{feature}</li>
                </ul>
              ))}
            </div>
             <button onClick={()=>router.push('/trainingPage')} className=" text-lg bg-[#29ab87] shadow-2xl hover:cursor-pointer text-white tracking-wide font-bold mt-auto py-2 rounded-lg m-2">
                  Enrolled Now
                </button>
          </div>
        ))}
    </div>
    </div>
  );
}

export default Page;
