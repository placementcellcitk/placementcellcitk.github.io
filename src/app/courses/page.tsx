"use client";

import { useState } from "react";

// ----------------- Courses Data -----------------
const btechCourses = [
  {
    name: "B.tech in Computer Science and Engineering",
    subjects: [
      "Data structure and algorithm",
      "Database management system",
      "AI",
      "Machine Learning",
      "Block chain",
      "Computer architecture",
      "Automata theory",
    ],
  },
  {
    name: "B.tech in Electronics and Communication Engineering",
    subjects: [
      "In VLSI & Embedded System: Digital System Design",
      "VLSI Design",
      "Linear IC",
      "Analog IC Design Microcontrollers",
      "Communication Systems: Analog Communication, Digital Communication, Computer Networks",
      "Signal Processing: Signal and Systems, DSP",
    ],
  },
  {
    name: "B.tech in Civil Engineering",
    subjects: ["Geotechnical engineering", "Building materials", "Design of structures and RCC", "Autocad"],
  },
  {
    name: "B.tech in Food Engineering and Technology",
    subjects: [
      "Food Process Engineering",
      "Principles of Food Processing and Preservation",
      "Food Product Technology",
      "Food Packaging Technology",
      "Food Analysis, Quality Control and Management",
    ],
  },
  {
    name: "B.tech in Instrumentation Engineering",
    subjects: [ "CONTROL SYSTEMS",
       "EMBEDDED SYSTEMS", 
       "MICROPROCESSOR & MICROCONTROLLER", 
       "ELECTRONIC INSTRUMENTATION", 
       "PROCESS CONTROL", 
       "BIOMEDICAL INSTRUMENTATION", 
    ],
  },
  { name: "B. des in Multimedia Communication and Design", 
    subjects: [ "3D Modeling", 
      "Graphic Design", 
      "UI/UX Design", 
      "Design studio", 
      "Introduction to game design", 
      "Animation Production design",
     ],
   },
];

const mtechCourses = [
  {
    name: "M.tech in Computer Science & Engineering",
    subjects: ["Advanced DBMS", 
      "Machine Learning", 
      "Advanced Computer Network",
       "Artificial Intelligence", 
       "Data Mining and Data Warehousing."
      ],
  },
  {
    name: "M.tech in Food Engineering & Technology",
    subjects: [
      "Research Methodology and IPR",
      "Recent Trends in Food Engineering and Technology",
      " Recent Advances in Enzyme and Microbial Technology",
      "Emerging Food Processing Technologies", 
      "Recent Trends in Food Safety and Quality Management",
    ],
  },
  {
    name: "M.tech in Green Energy Technology (GET)", 
    subjects: [ "Green Energy Technology", 
      "Energy & Environment", 
      "Fundamentals of Energy Technology", 
      "Energy Management & Auditing", 
      "Numerical Methods for Energy Systems", 
      "Power Plant Engineering", 
      "Fuels & Combustions", 
      "Bio-energy & Conversion Systems", 
      "Wind and Hydro Power Systems", 
      "Solar Thermal Energy Conversions", ],
  },
  { name: "M.tech in Water Resources and Hydraulic Engineering (WRH)", 
    subjects: [ "Research Methodology", 
      "Water resources systems analysis", 
      "Hydropower engineering", 
      "Human resource Management for water resources projects", 
      "Advanced computational hydraulics", 
    ], 
  },
  { name: "M.Des in Multimedia Communication & Design", 
    subjects: [ "Multimedia Communication & Design", 
      "Understanding Aesthetics: Analytical studies", 
      "Game Design for digital media", 
      "Animation & Visual Effects", 
      "Animation Production Techniques", 
      "3D Sculpture & Visualization Techniques", 
    ], 
  },
];

const diplomaCourses = [
  { name: "Diploma in Computer Science and Engineering (CSE)", 
    subjects: [ "System Programming", 
      "Computer Architecture and Organization", 
      "Operating System", 
      "Database Management Systems",
       "Cryptography & Network Security", 
       "Software Engineering", 
      ], 
    }, 
       { name: "Diploma in Electronics and Communication Engineering (ECE)", 
        subjects: [ "Electronic Devices and Circuits",
           "Microcontroller and Applications", 
           "Digital Electronics", 
           "Embedded Systems", 
           "Mobile and Wireless Communication", 
           "Power Electronics", 
           "Electronic Measurements and Instrumentation",
           ], 
          }, 
          { name: "Diploma in Control and Instrumentation (CAI)", 
            subjects: [ "Electrical Circuits and Networks", 
              "Electronics Devices and Circuits", 
              "Microprocessors", 
              "Control Systems", 
              "Biomedical Instrumentation", 
              "Industrial Instrumentation", 
            ], 
          }, 
          { name: "Diploma in Food Processing Technology (FPT)",
             subjects: [ "Food Product Technology", 
              "Basics of Food Chemistry", 
              "Food Storage and Packaging", 
              "Food Quality Control", 
              "Elements of Food Engineering", 
            ], 
          }, 
          { name: "Diploma in Civil Engineering (CE)", 
            subjects: [ "Construction Materials", 
              "Surveying", 
              "Water Supply & Sanitary Installation", 
              "Structural Analysis", 
              "Construction Technology", 
              "Concrete Technology", 
              "Design of steel structures", 
              "Design of RCC Structures", 
            ], 
          }, 
          { name: "Diploma in Animation & Multimedia Technology (AMT)", 
            subjects: [ "Art Fundamentals and Graphics Design", 
              "2D Animation Techniques", 
              "3D Animation", 
              "Introduction to Multimedia Design", 
              "Audio Video Editing", 
              "Lighting in Animation", 
              "Compositing & Visual Effects",
             ], 
            }, 
          ];

// ----------------- Tabs Component -----------------
export default function Page() {
  const [activeTab, setActiveTab] = useState("btech");

  const renderCourses = (courses: { name: string; subjects: string[] }[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {courses.map((course, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">{course.name}</h3>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            {course.subjects.map((subject, i) => (
              <li key={i}>{subject}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <main className="min-h-screen py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Courses Offered</h1>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 border-b pb-2">
          <button
            className={`px-4 py-2 rounded-t-lg font-medium ${
              activeTab === "btech" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("btech")}
          >
            B.Tech
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-medium ${
              activeTab === "mtech" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("mtech")}
          >
            M.Tech
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-medium ${
              activeTab === "diploma" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("diploma")}
          >
            Diploma
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "btech" && renderCourses(btechCourses)}
        {activeTab === "mtech" && renderCourses(mtechCourses)}
        {activeTab === "diploma" && renderCourses(diplomaCourses)}
      </div>
    </main>
  );
}
