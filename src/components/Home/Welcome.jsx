import React from 'react'

const Welcome = () => {
  return (
    <div className="bg-[#ecf0ea]">
    <div className="mb-20  container mx-auto  py-28 flex md:flex-row gap-10 flex-col  justify-center  md:px-24">
      <div className=" p-5">
        <h1 className="text-3xl md:text-5xl font-bold text-[#29ab87] tex drop-shadow-lg">
          Welcome To Empowrerers
        </h1>
        <p className="text-2xl italic text-[#29ab87] my-3">
          Learning often happens in classrooms but it doesn’t have to.
        </p>
        <div className="flex items-center flex-col my-7 text-2xl">
          {/* <TypeAnimation
                sequence={[
                  'Concerned about the job-shrinking market? Tired of finding a job over and over again? Learn eBay. Join Empowerers.',
                  1000,
                  '', // Clear text before restarting
                  500 // Short pause before repeating
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity} // Infinite loop
              /> */}

          <ul className="flex flex-col gap-2">
            <li className="list-disc">
              Concerned about the job-shrinking market
            </li>
            <li className="list-disc">
              Tired of finding a job over and over again
            </li>
            <li className="list-disc">
              Empowerers Offering Ecommerce learning courses in reasonable
              prices
            </li>
            <li className="list-disc">
              Empowerers offers EBay, Etsy, and many other courses
            </li>
          </ul>

          {/* <p>Concerned about the job-shrinking market? Tired of finding a job over and over again? Learn eBay. Join Empowerers.</p> */}
          {/* <p>Empowerers Offering Ecommerce learning courses in reasonable prices. Empowerers offers EBay, Etsy, and many other courses.</p> */}
        </div>

        <div className="mt-16  mb-5 px-5">
          <button className="tracking-wide cursor-pointer text-xl font-bold text-white bg-[#29ab87] hover:text-[#29ab87] hover:bg-white px-10 py-4 rounded-full transition-all duration-300 ease-in-out">
            Start Learning
          </button>
          <button className="tracking-wide cursor-pointer text-xl font-bold text-white bg-[#29ab87] hover:text-[#29ab87] hover:bg-white px-10 py-4 rounded-full transition-all duration-300 ease-in-out ml-8">
            Get In Touch
          </button>
        </div>
      </div>
      <div className="">
        <div>
          <img src="/bann1.png" alt="" />
        </div>
      </div>
    </div>
  </div>  )
}

export default Welcome