import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Experience = () => {
  return (
    <div className='container mx-auto '> <div className="flex justify-center items-center gap-20 m-20 p-10 ">
              <div className="w-1/2">
                <img src="/about.png" alt="Service Image" />
              </div>
              <div className=" w-1/2 p-5">
                <h1 className="text-5xl text-[#29AB87] drop-shadow-md font-bold mb-10">
                  We have years of work experience
                </h1>
                <p className="text-lg mb-10">
                  Being the pioneer organization in the eBay marketplace education
                  in Pakistan, to date, Empowerers is considered the most detailed
                  and most advanced organization in the knowledge and skills of the
                  eBay marketplace.
                </p>
                <div className="my-10">
                  <h1 className="text-5xl text-[#29AB87] font-bold">Values</h1>
                  <ul className="mt-3 space-y-2">
                                 {[
                                   "Continuous improvement",
                                   "Collective Growth",
                                   "Professionalism",
                                   "Excellence",
                                   "Fun",
                                 ].map((value, index) => (
                                   <li key={index} className="flex items-center  text-gray-700">
                                     <FaChevronDown className="mr-2 bg-[#29AB87] text-white rounded-full text-lg p-[2px]" />
                                     {value}
                                   </li>
                                 ))}
                               </ul>
                </div>
              </div>
            </div></div>
  )
}

export default Experience