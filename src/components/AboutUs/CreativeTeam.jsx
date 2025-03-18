import React from "react";

const CreativeTeam = () => {
  const outCreativeTeam = [
    {
      name: "Qasim Sana Ramay",
      image: "/team1.png",
      detail: "FOUNDER AND C.E.O OF EMPOWERERS",
    },
    {
      name: "Asif Latif",
      image: "/team2.png",
      detail: "MANAGER SOURCING",
    },
    {
      name: "Saif Asim",
      image: "/team3.png",
      detail: "MANAGER",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="py-10 text-center">
        <h1 className="font-bold text-5xl text-[#29AB87] drop-shadow-md">
          Our Creative Team
        </h1>
      </div>
      <div className="flex justify-around p-10">
        {outCreativeTeam.map((info, index) => {
          return (
            <div
              key={index}
              className="border border-gray-300 drop-shadow-md shadow-lg rounded-[10%] overflow-hidden cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
            >
              <div className="h-[400px] p-2 ">
                <img
                  src={info.image}
                  alt="Image"
                  className=" object-contain rounded-[10%] max-h-full"
                />
              </div>
              <div className="text-center my-5">
                <h1 className="mb-5 font-bold text-[#29AB87] text-[20px]">{info.name}</h1>
                <h1 className="text-[16px] text-[#7a7a7a]">{info.detail}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreativeTeam;
