import { FaBookOpen, FaGift, FaTasks, FaBullhorn, FaDollarSign, FaUsers } from "react-icons/fa";

export default function CoreModules() {
  return (
    <section className="bg-white py-10 px-6 md:px-20 text-[#333]">
      {/* Welcome Note */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3 flex justify-center items-center gap-2">
          <FaBullhorn className="text-[#29ab87] text-2xl" /> Welcome to ECC 3.0!
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          What exactly you will learn in this training.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-10">
        <SectionBox
          icon={<FaBookOpen />}
          title="10 Core Modules"
          items={[
            { heading: "Module 1", description: "Setting up the Right Mindset - Strategy Session" },
            { heading: "Module 2", description: "eBay Account Creation" },
            { heading: "Module 3", description: "Product Research (Dropshipping, White Label)" },
            { heading: "Module 4", description: "eBay Listing Creation" },
            { heading: "Module 5", description: "Pakistan-Based Product Sourcing" },
            { heading: "Module 6", description: "eBay Order Processing" },
            { heading: "Module 7", description: "Printing Shipping Labels from eBay" },
            { heading: "Module 8", description: "eBay Stock Product Research" },
            { heading: "Module 9", description: "eBay Stock Product Sourcing" },
            { heading: "Module 10", description: "Advanced eBay Customer Support, Effective Case Handling, and Account Health Management" }
          ]}
        />

        <SectionBox
          icon={<FaGift />}
          title="3 Exclusive Bonuses"
          items={[
            { heading: "Bonus 1", description: "Advancements of eBay through AI (ChatGPT, Photoroom, Gemini)" },
            { heading: "Bonus 2", description: "Financial Closing + Strategies to Grow Your eBay Business" },
            { heading: "Bonus 3", description: "Client Acquisition through Facebook" }
          ]}
        />

        <SectionBox
          icon={<FaTasks />}
          title="3 Assignments"
          items={[
            { heading: "Assignment 1", description: "Artificial Intelligence for eBay​" },
            { heading: "Assignment 2", description: "White Label Product Hunting" },
            { heading: "Assignment 3", description: "Pakistan Based Product Hunting" }
          ]}
        />

        <SectionBox
          icon={<FaDollarSign />}
          title="First Dollar Challenge"
          items={[
            {
              heading: "1 Dollar Challenge",
              description: "We know how exciting it is to make your FIRST DOLLAR online! With our 'First Dollar Challenge', you will get step-by-step guidance to reach your first EBAY FREELANCING CLIENT. Follow the Bonus 3 video, stay active in the Facebook group, set up your profile like a pro, brand yourself, and start attracting clients—and dollars!"
            }
          ]}
        />

        <SectionBox
          icon={<FaUsers />}
          title="Private Community Access"
          items={[
            {
              heading: "Private Group",
              description: "Join our vibrant Facebook community to connect, share wins, ask questions, and grow together!"
            }
          ]}
        />
      </div>
    </section>
  );
}

function SectionBox({ icon, title, items }) {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden">
      <div className="bg-[#29ab87] text-white text-center py-2 font-semibold text-lg flex justify-center items-center gap-2">
        {icon}
        {title}
      </div>
      <div className="bg-white px-4 py-4 space-y-2">
        {items.map((item, index) => (
          <p key={index} className="border-b pb-1 text-sm md:text-base">
            <span className="font-semibold">{item.heading}:</span>{" "}
            <span className="font-normal">{item.description}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
