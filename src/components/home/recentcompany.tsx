"use client"; // Required for React hooks

import React, { useRef } from "react";
import Image from "next/image";

const placementData = [
  {
    title: "Recent Selections",
    details: [
      "📌 Hemanga Das - RDC Concrete",
      "📌 Anuj Kumar - L&T",
      "📌 Jwngshar Basumatary - Numaligarh Refinery, Assam",
      "📌 Pritam Baishya - Amul (GCMMF LTD.)",
    ],
  },
];

const PlacementUpdates = () => {
  const scrollRef = useRef(null);

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-6">
        📢 Placement Updates
      </h2>

      {/* TCS NQT Hiring Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
          TCS Fresher Hiring Through NQT || Registration Starts For YoP 2025
        </h3>
        <Image
          src="/homepage pics/image001.jpg"
          alt="TCS NQT Hiring"
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <p className="text-gray-700 mt-4">
          Apply now:{" "}
          <a
            href="https://nextstep.tcs.com/campus/#/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            TCS NQT Application Link
          </a>
        </p>
      </div>

      {/* Ninjacart Short Info */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
          Ninjacart Tech Internship | Deadline Extended
        </h3>
        <p className="text-gray-700 mb-2">
          📌 <b>Eligibility:</b> B.Tech/B.E. students in CSE/IT (2024/2025 batches),
          Minimum CGPA/Percentage: 7/70%
        </p>
        <p className="text-gray-700 mb-2">
          📅 <b>Important Dates:</b> Application Deadline: 3rd March 2025 - 10 AM
          <br />
          📝 Assessment: 3rd March 2025 - 2 PM - 8 PM (30-min window)
        </p>
        <p className="text-gray-700">
          🔗 <b>Apply Now:</b>{" "}
          <a
            href="https://apna.co/contests/ninjacart-tech-ninja-intern-hiring-challenge-2025?utm_source=Email&utm_medium=Email&utm_campaign=POC20&utm_id=2002"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ninjacart Application Link
          </a>
        </p>
      </div>

      {/* Recent Selections Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-6 border border-gray-300">
        <h3 className="text-3xl font-semibold text-indigo-800 mb-4 text-center">
          🎉 Recent Selections
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {placementData[0].details.map((detail, i) => (
            <div
              key={i}
              className="flex items-center bg-indigo-100 text-indigo-900 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <span className="text-lg">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementUpdates;
