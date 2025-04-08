"use client"
import AsSeenOn from "@/components/ebay-crash-course/AsSeenOn";
import CoreModules from "@/components/ebay-crash-course/CoreModules";
import EarlyBirdDiscount from "@/components/ebay-crash-course/EarlyBirdDiscount";
import Header from "@/components/ebay-crash-course/Header";
import VideoSection from "@/components/ebay-crash-course/VideoSection";

export default function EbayCrashCourse() {
     const newsLogo = [
    "/ary-logo.png",
    "/tbt-logo.jpg",
    "/ptv-logo.png",
    "/top-logo.png",
    "/mux9-logo.png",
    "/rohi-logo.png",
    "/suno-logo.jpg",
    "/dawah-logo.png",
    "/aik-news-logo.jpg",
    "/ridah-oman1-logo.jpg",
    "/lahor-ring.png",
    "/azad-cahiwala-logo.jpg",
    "/news-hd.jpg",
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Header /> */}
      <VideoSection />
      <AsSeenOn/>
      <EarlyBirdDiscount />
      <CoreModules />
    </div>
  );
}
