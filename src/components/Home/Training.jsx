import React from "react";
const outTrainings = [
  {
    img: "/trainingEbay.jpg",
    text: "eBay Training",
    features: [
      "*25 eBay Sessions* (A to Z) with Practical Demonstrations",
      "*1-Year Access* to Recorded Sessions",
      "*Exclusive WhatsApp & Facebook Groups* (1 Year)",
      "*Dedicated Support* (1 Year)",
      "*Incubator Visit Access* (1 Year)",
    ],
  },
  {
    img: "/trainingEtsy.jpg",
    text: "Etsy Training",
    features: [
      "*16 Etsy Sessions* (A to Z)",
      "*1-Year Recording Access*",
      "*Dedicated WhatsApp & Facebook Groups",
      "*Technical Support Access",
      "*Warehouse Access",
    ],
  },
  {
    img: "/trainingTiktok.jpg",
    text: "Tik Tok Shop Training",
    features: [
      "*18 TikTok Sessions* (A to Z)",
      "*90+ Hours of Video Lectures",
      "*1-Year Recording Access",
      "*Dedicated Technical Support*",
      "*Access to Empowerers Stock Products",
    ],
  },
];

const Training = () => {
  return (
    <div className="bg-[#ecf0ea]">
      <div className="  container mx-auto py-[45px] px-10 md:py-[55px] md:px-24">
        <div className="flex justify-center   flex-col gap-4 sm:gap-8 items-center  ">
          <h1 className="md:text-5xl text-2xl drop-shadow-lg font-bold">
            Our Training
          </h1>
          <button className="md:text-[15px] font-semibold md:tracking-wide border hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full px-5 text-white bg-[#29ab87] hover:text-[#29ab87] hover:bg-white md:px-10 py-2">
            Browse Training
          </button>
        </div>
        <div className="md:flex md:justify-between mt-10 gap-10 lg:flex-row flex-col  ">
          {outTrainings.map((data, index) => {
            return (
              <div
                key={index}
                className=" border border-gray-300 rounded-lg mt-5 sm:mt-0 flex flex-col min-h-[250px]"
              >
                <img
                  src={`${data.img}`}
                  alt="no Image"
                  className="hover:cursor-pointer rounded-t-md"
                />
                <div className=" m-4">
                  {data.features.map((features, index) => {
                    return (
                      <div key={index} className="mb-2">
                        <p className="text-[16px]">{features}</p>
                      </div>
                    );
                  })}
                </div>
                <button className=" text-lg bg-[#29ab87] shadow-2xl hover:cursor-pointer text-white tracking-wide font-bold mt-auto py-2 rounded-lg m-2">
                  Enrolled Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Training;
