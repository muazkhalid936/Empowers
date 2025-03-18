import React from 'react'
import { FaThList } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { FaCommentsDollar } from "react-icons/fa";
import { FaStoreSlash } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function ourServicesPage() {
  return (
    <div >
      <div className='bg-[#ECF0EA] py-10 text-center'>
        <h1 className='font-bold text-5xl text-[#29AB87] drop-shadow-md'>Our Services</h1>
      </div>
      <div className='flex justify-center gap-10 m-20 p-10 '>
        <div className=''>
            <img src="/service1.png" alt="Service Image" />
        </div>
        <div className=' w-[500px] p-5'>
            <h1 className='text-5xl text-[#29AB87] drop-shadow-md font-bold mb-10'>We Provide Awesome Services For You</h1>
            <p className='text-xl mb-10'>When you are selling internationally, especially in the USA and the UK, the major challenge is, who will be receiving your shipments, inspecting them, picking, packing, and shipping to the clients, and managing the storage and other operations of these shipments</p>
            <div className='text-xl text-right'>
                <button className='text-white bg-[#29AB87] border border-[#29AB87] transition-all duration-500 ease-in-out hover:text-[#29AB87] hover:bg-white cursor-pointer py-2 rounded-full px-4'>Contact Us</button>
            </div>
        </div>
      </div>
      <div className='bg-[#ECF0EA] py-10 '>
        <div className='py-10 text-center'>
            <h1 className='font-bold text-5xl text-[#29AB87] drop-shadow-md'>What We Provide</h1>
        </div>
        <div className='m-10 p-10'>
            <div className='flex flex-wrap justify-around gap-20'>
                <div className="flex flex-col items-center rounded-md text-center text-[#29AB87] border p-5 w-[500px]">
                    <FaThList className='h-20 w-20' />
                    <h1 className='text-3xl font-bold my-5'>eCommerce Consultation​</h1>
                    <p className='text-2xl '>Empowerers are Providing Consultation about Ecommerce business Consultation.</p>
                </div>
                <div className="flex  flex-col items-center text-center rounded-md text-[#29AB87] border p-5 w-[500px]">
                    <FaStoreAlt className='h-20 w-20' />
                    <h1 className='text-3xl font-bold my-5'>Staff Augmentation (eBay, ETSY, Tiktok Shop)​</h1>
                    <p className='text-2xl '>We provide expert staff augmentation for Etsy, eBay, and TikTok Shop, ensuring your online store is managed by professionals who understand the nuances of each platform.</p>
                </div>
                <div className="flex  flex-col items-center rounded-md text-center text-[#29AB87] border p-5 w-[500px]">
                    <FaCommentsDollar className='h-20 w-20' />
                    <h1 className='text-3xl font-bold my-5'>Managerial Services (eBay, ETSY, Tiktock Shop)​</h1>
                    <p className='text-2xl '>Our team handles everything from inventory management to customer support, allowing you to focus on growing your brand</p>
                </div>
                <div className="flex  flex-col items-center rounded-md text-center text-[#29AB87] border p-5 w-[500px]">
                    <FaStoreSlash className='h-20 w-20' />
                    <h1 className='text-3xl font-bold my-5'>Fulfillments Centers​</h1>
                    <p className='text-2xl '>Empowerers Providing Fullfilment center in UK, USA and Aus.</p>
                </div>
                <div className="flex  flex-col items-center rounded-md text-center text-[#29AB87] border p-5 w-[500px]">
                    <FaRegHandshake className='h-20 w-20' />
                    <h1 className='text-3xl font-bold my-5'>Shared Spaces in incubators</h1>
                    <p className='text-2xl '>Our incubators provide shared spaces designed to foster collaboration and innovation among entrepreneurs.</p>
                </div>
                <div className="flex  flex-col rounded-md items-center text-center text-[#29AB87] border p-5 w-[500px]">
                    <FaFacebook className='h-20 w-20' />
                    <h1 className='text-3xl font-bold my-5'>Social Media Management​</h1>
                    <p className='text-2xl '>We provide comprehensive social media management services that enhance your brand's online presence across all platforms.</p>
                </div>
            </div>
        </div>
      </div>
      <div className="my-40 mx-40 ">
         <div className="flex justify-between items-center">
            <div>
              <img src="https://empowerers.co/wp-content/uploads/2024/03/mobile.png" alt="" />
            </div>
            <div className="shadow-xl border border-gray-300 rounded-2xl h-[325px] w-[500px] flex flex-col justify-center p-10">
              <div className="pl-7">
                <h1 className="font-bold tracking-wide text-3xl text-[#29ab87] drop-shadow-lg">Newsletter</h1>
              </div>
              <div className="py-8 text-center">
                <input 
                type="text" 
                className="border border-gray-400 p-4 rounded-md w-[400px] outline-none"
                placeholder="Email" />
              </div>
              <div className="text-right pr-7">
                <button 
                className="text-white bg-[#29ab87] py-3 px-8 rounded-full text-xl tracking-wide hover:bg-[white] hover:text-[#29ab87] hover:cursor-pointer border hover:border-gray-300">
                  Subscribe
                </button>
              </div>
            </div>
         </div>
   </div>
    </div>
  )
}

export default ourServicesPage
