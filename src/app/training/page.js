"use client";
import Training from "@/components/Home/Training";
import React from "react";
import { LuShoppingCart } from "react-icons/lu";

function trainingPage() {
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
      price: "$ 297.00",
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
      price: "$ 197.00",
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
      price: "$ 197.00",
    },
  ];
  return <Training />;
}

export default trainingPage;
