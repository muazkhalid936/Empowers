import React from 'react'

const Contact = () => {
  return (
    <div className='container mx-auto'>
        <div className="flex justify-center items-center my-20 ">
      {/* Left side - Contact Form */}
      <div className="w-1/2 ">
        <h2 className="text-4xl font-bold text-gray-900">
          We are always open <br /> <span className="text-gray-900">24/7 for you.</span>
        </h2>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-md focus:ring focus:ring-green-200 outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full mt-1 p-3 border rounded-md focus:ring focus:ring-green-200 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-md focus:ring focus:ring-green-200 outline-none"
              placeholder="Enter subject"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Description</label>
            <textarea
              rows="4"
              className="w-full mt-1 p-3 border max-h-40 min-h-10 rounded-md focus:ring focus:ring-green-200 outline-none"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="bg-[#29AB87] text-white py-3 px-6 rounded-md hover:bg-[#29AB87] transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Right side - Contact Details */}
      <div className="w-1/2 flex justify-center items-center p-6">
        <div className="space-y-6">
          <div className='flex flex-col gap-5'>
            <h3 className="text-2xl font-bold text-gray-900">Visit us</h3>
            <p className="text-gray-600">166-B, Model Town, Multan, 60700.</p>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className="text-2xl font-bold text-gray-900">Call us</h3>
            <p className="text-[#29AB87]">+92 30 8090 1111</p>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className="text-2xl font-bold text-gray-900">Email us</h3>
            <p className="text-[#29AB87]">info@empowerers.co</p>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className="text-2xl font-bold text-gray-900">Customer Support</h3>
            <p className="text-[#29AB87]">support@empowerers.co</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact