'use client';

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Huzaifa",
    video: "/Huzaifa.mp4",
  },
  {
    name: "Moavia",
    video: "/moavia.mp4",
  },
  {
    name: "Sania",
    video: "/Sania.mp4",
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[current];

  return (
    <section className="py-10 bg-[#222]">
      <div className="mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-10">
          Success Stories
        </h2>

        {/* Layout for large screens */}
        <div className="hidden lg:flex items-center justify-center gap-6">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="p-3 bg-[#1e1e1e] border border-gray-700 rounded-full shadow hover:bg-[#333]"
          >
            <FaChevronLeft className="text-white w-5 h-5" />
          </button>

          {/* Video */}
          <div className="bg-[#1e1e1e] p-4 sm:p-6 rounded-lg shadow w-full max-w-xl">
            <div className="w-full aspect-video mb-4">
              <video
                key={testimonial.video}
                className="w-full h-full rounded-md object-cover"
                controls
                src={testimonial.video}
              />
            </div>
            <h4 className="text-sm font-semibold text-[#e0e0e0]">
              — {testimonial.name}
            </h4>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-3 bg-[#1e1e1e] border border-gray-700 rounded-full shadow hover:bg-[#333]"
          >
            <FaChevronRight className="text-white  w-5 h-5" />
          </button>
        </div>

        {/* Layout for small screens */}
        <div className="lg:hidden w-full max-w-md mx-auto">
          <div className="bg-[#1e1e1e] p-4 rounded-lg shadow">
            <div className="w-full aspect-video mb-4">
              <video
                key={testimonial.video}
                className="w-full h-full rounded-md object-cover"
                controls
                src={testimonial.video}
              />
            </div>
            <h4 className="text-sm font-semibold text-[#e0e0e0]">
              — {testimonial.name}
            </h4>
          </div>

          {/* Arrows below on small screens */}
          <div className="mt-4 flex justify-center gap-6">
            <button
              onClick={prevSlide}
              className="p-3 bg-[#1e1e1e] border border-gray-700 rounded-full shadow hover:bg-[#333]"
            >
              <FaChevronLeft className="text-[#29ab87] w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-[#1e1e1e] border border-gray-700 rounded-full shadow hover:bg-[#333]"
            >
              <FaChevronRight className="text-[#29ab87] w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
