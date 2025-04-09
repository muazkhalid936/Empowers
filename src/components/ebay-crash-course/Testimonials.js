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
    <section className="py-6 bg-gray-50">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-[#29ab87] mb-8">
          Success Stories
        </h2>

        {/* Main layout with arrows outside */}
        <div className="flex items-center justify-center space-x-4">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100"
          >
            <FaChevronLeft className="text-[#29ab87] w-5 h-5" />
          </button>

          {/* Testimonial Content */}
          <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
          <video
           key={testimonial.video}
           className="rounded-md w-full h-64 object-cover mb-4"
           controls
           src={testimonial.video}
         />
            <h4 className="text-sm font-semibold text-gray-900">
              — {testimonial.name}
            </h4>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100"
          >
            <FaChevronRight className="text-[#29ab87] w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
