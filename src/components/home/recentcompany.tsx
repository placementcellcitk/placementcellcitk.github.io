"use client";  // ✅ Required for Next.js Client Components

import React, { useEffect, useRef } from "react";

type PlacementDetail = 
  | string
  | { subtitle: string; candidates: string[] };

const placementData: { title: string; details: PlacementDetail[] }[] = [
  {
    title: "Recent Selections",
    details: [
      "Hemanga Das - RDC Concrete",
      "Anuj Kumar - L&T",
      "Jwngshar Basumatary - Numaligarh Refinery, Assam",
    ],
  },
  {
    title: "CHRYSO Campus Recruitment Interview",
    details: [
      {
        subtitle: "Shortlisted Candidates",
        candidates: [
          "Anuj Kumar",
          "Arpan Paul",
          "Subhadeep Das",
          "Abhijit Narzary",
          "Dhritismaan Parasor",
          "Umor Al Rashid",
          "Shamim Shahinur Rahman",
        ],
      },
    ],
  },
];

const amulInterview = {
  title: "Amul Campus Recruitment Interview",
  candidates: [
    "Sudem Narzary",
    "John Star Daimary",
    "San Raja Basumatary",
    "Jyotirmoy Das",
    "Narendhar Lingampelli",
    "Sunsu Mushahary",
    "Samujwal Konch",
    "Jigyas Deka",
    "Ansuli Brahma",
    "Shahil Deka",
    "Hirokjyoti Das",
    "Puja Kumari",
    "Abu Sufian Badsha",
    "Pritam Baishya",
    "Prince Nath",
    "Bitu Rani Narzary",
  ],
};

const PlacementUpdates = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-6">
        📢 Placement Updates
      </h2>

      {/* Scrolling Section */}
      <div className="overflow-hidden relative">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide p-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {placementData.map((item, index) => (
            <div
              key={index}
              className="min-w-[350px] bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.details.map((detail, i) =>
                typeof detail === "string" ? (
                  <li key={i} className="text-sm">{detail}</li>
                ) : (
                  <div key={i}>
                    <h4 className="text-md font-semibold mt-2">{detail.subtitle}</h4>
                    <ul className="list-disc pl-4 mt-2">
                      {detail.candidates.map((candidate, j) => (
                        <li key={j} className="text-sm">{candidate}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Amul Interview Details */}
      <div className="mt-10 bg-gray-50 p-6 rounded-xl shadow-md border border-gray-300">
        <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
          {amulInterview.title}
        </h3>
        <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700">
          Shortlisted Candidates
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {amulInterview.candidates.map((candidate, i) => (
            <span
              key={i}
              className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm text-center font-medium hover:bg-indigo-200 transition-all"
            >
              {candidate}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementUpdates;
