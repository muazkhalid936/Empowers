import Image from "next/image";
import React from "react";

const AwesomeServices = () => {
  return (
    <div className="container mx-auto">
      {" "}
      <div className="flex justify-center gap-10 m-20 p-10 ">
        <div className=" w-1/2 flex justify-center items-center">
          <Image
            width={500}
            height={500}
            src="/service1.png"
            alt="Service Image"
          />
        </div>
        <div className=" w-1/2 flex flex-col justify-center items-center gap-10">
          <h1 className="text-5xl text-[#29AB87] drop-shadow-md font-bold ">
            We Provide Awesome Services For You
          </h1>
          <p className="text-[16px] ">
            When you are selling internationally, especially in the USA and the
            UK, the major challenge is, who will be receiving your shipments,
            inspecting them, picking, packing, and shipping to the clients, and
            managing the storage and other operations of these shipments
          </p>
          <div className="flex justify-end items-end w-full">
            <button className="text-white bg-[#29AB87] border shadow-2xl border-[#29AB87] transition-all duration-500 ease-in-out hover:text-[#29AB87] hover:bg-white cursor-pointer py-2 px-4">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwesomeServices;
