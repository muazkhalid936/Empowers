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
    <div className="py-[30px] bg-[#2e2e2e] overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-3xl font-semibold mb-6 text-white">As Seen On</h2>

      {/* Scrolling logos */}
      <div className="flex bg-[#2e2e2e] gap-20 px-10 animate-scroll">
        {newsLogo.concat(newsLogo).map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img src={logo} alt="no Image" className="h-[120px] rounded" />
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
          animation: scroll 25s linear infinite; /* Reduced speed */
          width: max-content;
        }
      `}</style>
    </div>
  );
}
