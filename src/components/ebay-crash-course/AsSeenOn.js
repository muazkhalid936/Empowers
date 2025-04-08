"use client";
export default function AsSeenOn() {
  const newsLogo = [
    "/Ary.png",
    "/Geo.jpg",
    "/Bol.png",
    "/suno.jpg",
    "/DPakistan.png",
    "/Rohi.jpg",
    "/btalks.png",
    "ecom.png",
    "MH.jpg",
    "/bolchal.jpg",
    "/ogImage.jpg",
    "/ROman.jpg",
    "Media-coverage.png",
  ];
  
  
  return (
    <div className="  py-[30px] bg-gray-200 overflow-hidden">
        <div className="flex bg-gray-200 gap-20 px-10 animate-scroll">
          {newsLogo.concat(newsLogo).map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img src={logo} alt="no Image" className="h-[120px] " />
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 10s linear infinite;
            width: max-content; /* Prevent shrinking */
          }
        `}</style>
      </div>
  );
}
