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
    text: "Etsy Training",
    url: "Etsy-Training",
    features: [
      "16 Etsy Sessions* (A to Z)",
      "1-Year Recording Access*",
      "Dedicated WhatsApp & Facebook Groups",
      "Technical Support Access",
      "Warehouse Access",
    ],
  },
  {
    id: 2,
    img: "/trainingTiktok.jpg",
    text: "Tik Tok Shop Training",
    url: "TikTok-Shop-Training",
    features: [
      "18 TikTok Sessions* (A to Z)",
      "90+ Hours of Video Lectures",
      "1-Year Recording Access",
      "Dedicated Technical Support*",
      "Access to Empowerers Stock Products",
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
    <div className="md:flex md:justify-center my-10 md:items-center gap-5 lg:flex-row flex-col">
      {outTrainings
        .filter(data => data.url === label)
        .map((data, index) => (
          <div
            key={index}
            className="border lg:w-1/3 border-gray-300 hover:shadow-2xl transition-all ease-in-out duration-300 rounded-2xl bg-white overflow-hidden mt-5 sm:mt-0 flex flex-col min-h-[250px]"
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
          </div>
        ))}
    </div>
  );
}

export default Page;
