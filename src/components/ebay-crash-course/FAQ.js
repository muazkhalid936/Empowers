'use client';

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How long do I have access to the course?",
    answer:
      "You get One Year access to the course content, so you can learn at your own pace.",
  },
  {
    question: "What happens after I enroll?",
    answer:
      "You will receive an email or WhatsApp message with your login credentials and access to the course material.",
  },
  {
    question: "Are there any prerequisites for this course?",
    answer:
      "No prior experience is needed, however knowing English and understanding of computer and internet world is mandatory. This course is designed for complete beginners.",
  },
  {
    question: "How can I pay for the course?",
    answer:
      "You can pay through our secure online payment gateway on the checkout page or manually transfer the fee to our bank account.",
  },
  {
    question: "What is the First Dollar Challenge?",
    answer:
      "The First Dollar Challenge is designed to help you get your eBay Freelancing Client as quickly as possible.",
  },
  {
    question: "What if I need additional help?",
    answer:
      "In case if you need any technical help, post in the Empowerers Facebook Group and get your questions answered there. If you have questions related to ECC 3.0, you can WhatsApp at the number shared with you.",
  },
  {
    question: "Can I still join if I'm not based in Pakistan?",
    answer:
      "Yes! Our course is available internationally as long as you understand Urdu or Hindi language, and the strategies work for anyone looking to sell on eBay.",
  },
  {
    question: "Where to Contact, if you need any help?",
    answer: "+92 30 8090 1111",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-12 px-6 mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#29ab87] mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-lg transition-all duration-300 ${
                isOpen ? "bg-green-50 border-l-4" : "bg-gray-50"
              } ${isOpen ? "border-[#29ab87]" : "border-transparent"} border`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full px-5 py-4 text-left rounded-t-lg hover:bg-[#29ab87]/10 transition-colors"
              >
                <span className="text-base sm:text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#29ab87]" : "text-gray-600"
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-4 pt-1 text-sm text-gray-700 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Fade animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
}
