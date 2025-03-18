// "use client";
// import React, { useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const Gallery = [
//   "/gallery1.jpg",
//   "/gallery2.jpg",
//   "/gallery3.jpg",
//   "/gallery4.jpg",
//   "/gallery5.jpg",
//   "/gallery6.jpg",
//   "/gallery7.jpg",
// ];

// function GallerySlider() {
//   const [index, setIndex] = useState(0);
//   const totalImages = Gallery.length;
//   const imagesPerView = 3; // Number of images visible at a time

//   const scrollLeft = () => {
//     setIndex((prevIndex) =>
//       prevIndex === 0 ? totalImages - imagesPerView : prevIndex - 1
//     );
//   };

//   const scrollRight = () => {
//     setIndex((prevIndex) =>
//       prevIndex >= totalImages - imagesPerView ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative w-[1200px] mx-auto overflow-hidden">
//       {/* Image Container */}
//       <div
//         className="flex gap-2 transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${index * (400 + 10)}px)` }}
//       >
//         {Gallery.concat(Gallery).map((image, i) => (
//           <div key={i} className="w-[400px] flex-shrink-0">
//             <img
//               src={image}
//               alt={`Gallery ${i + 1}`}
//               className="w-full h-[250px] object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Left Button */}
//       <IoIosArrowBack
//         onClick={scrollLeft}
//         className="cursor-pointer absolute top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 text-white bg-black bg-opacity-50 rounded-full p-2"
//       />

//       {/* Right Button */}
//       <IoIosArrowForward
//         onClick={scrollRight}
//         className="cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 text-white bg-black bg-opacity-50 rounded-full p-2"
//       />
//     </div>
//   );
// }

// export default GallerySlider;

"use client";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Gallery = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
];

function GallerySlider() {
  const [index, setIndex] = useState(0);
  const totalImages = Gallery.length;
  const imagesPerView = 3; // Number of images visible at a time

  const scrollLeft = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - imagesPerView : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setIndex((prevIndex) =>
      prevIndex >= totalImages - imagesPerView ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-[1200px] mx-auto overflow-hidden">
      {/* Image Container */}
      <div
        className="flex gap-2 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * (400 + 10)}px)` }}
      >
        {Gallery.concat(Gallery).map((image, i) => {
          // Determine opacity for each image
          let opacity = 1;
          if (i === index + 1) opacity = 1; // Center image full opacity
          else if (i !== index && i !== index + 2) opacity = 0; // Other images hidden

          return (
            <div
              key={i}
              className="w-[400px] flex-shrink-0 transition-opacity duration-500 ease-in-out"
              style={{ opacity }}
            >
              <img
                src={image}
                alt={`Gallery ${i + 1}`}
                className="w-full h-[250px] object-cover rounded-lg"
              />
            </div>
          );
        })}
      </div>

      {/* Left Button */}
      <IoIosArrowBack
        onClick={scrollLeft}
        className="cursor-pointer absolute top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 text-white bg-black bg-opacity-50 rounded-full p-2"
      />

      {/* Right Button */}
      <IoIosArrowForward
        onClick={scrollRight}
        className="cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 text-white bg-black bg-opacity-50 rounded-full p-2"
      />
    </div>
  );
}

export default GallerySlider;



