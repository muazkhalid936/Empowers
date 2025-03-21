"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SaleBanner = () => {
  return (
    <div className="h-[200px] justify-center flex items-center space-x-4">
      <motion.div
      className="w-1/2 flex justify-center items-center"
        animate={{ scale: [1, 1.1, 1] }} // Scale up and down
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} // Infinite loop
      >
        <Image
          src="/sale.jpg"
          alt="sale"
          width={300}
          height={300}
          className="!h-[150px] !w-auto"
        />
      </motion.div>

      <div className="w-1/2 flex flex-col justify-center items-center">
        <p className="textGray text-2xl font-bold">
          Limited Time Offer: <span className="text-xl font-normal"> <br/>20% Off on All Courses! </span>🚀
        </p>
      </div>
    </div>
  );
};

export default SaleBanner;
