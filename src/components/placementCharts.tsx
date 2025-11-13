
"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const placementData: Record<
  string,
  { branch: string; offers: number; placed: number }[]
> = {
  "2024-2025": [
    { branch: "CSE", offers: 16, placed: 15 },
    { branch: "ECE", offers: 10, placed: 10 },
    { branch: "CE", offers: 5, placed: 4 },
    { branch: "IE", offers: 7, placed: 7 },
    { branch: "FET", offers: 3, placed: 3 },
    { branch: "IE Diploma", offers: 1, placed: 1 },
  ],
  "2023-2024": [
    { branch: "CSE", offers: 19, placed: 16 },
    { branch: "ECE", offers: 26, placed: 20 },
    { branch: "CE", offers: 3, placed: 3 },
    { branch: "IE", offers: 10, placed: 9 },
    { branch: "FET", offers: 11, placed: 11 },
    { branch: "MCD", offers: 0, placed: 0 },
  ],
  "2022-2023": [
    { branch: "CSE", offers: 22, placed: 18 },
    { branch: "ECE", offers: 20, placed: 15 },
    { branch: "CE", offers: 5, placed: 4 },
    { branch: "IE", offers: 8, placed: 6 },
    { branch: "FET", offers: 7, placed: 6 },
    { branch: "MCD", offers: 2, placed: 1 },
  ],
  "2021-2022": [
    { branch: "CSE", offers: 19, placed: 16 },
    { branch: "ECE", offers: 27, placed: 20 },
    { branch: "CE", offers: 3, placed: 3 },
    { branch: "IE", offers: 10, placed: 10 },
    { branch: "FET", offers: 11, placed: 11 },
    { branch: "MCD", offers: 0, placed: 0 },
  ],
};

// 🟢 Detailed placement table data for 2024–25
const placementDetails2024_25 = 
  [
  {
    CompanyName: "Larsen & Toubro",
    JobPosition: "GET (Civil)",
    SalaryCTCinLPA: 6,
    StudentSelected: "ANUJ KUMAR",
    Department: "CE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "RDC Concrete India",
    JobPosition: "GET (Civil)",
    SalaryCTCinLPA: 4.6,
    StudentSelected: "Hemanga Das",
    Department: "CE",
    ModeOfRecruitment: "Pool Campusing"
  },
  {
    CompanyName: "Amul Dairy",
    JobPosition: "Territory Sales Incharge",
    SalaryCTCinLPA: 6.5,
    StudentSelected: "Pritam Baishya",
    Department: "FET",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "TVS-CS",
    JobPosition: "Technology Trainee",
    SalaryCTCinLPA: 6.5,
    StudentSelected: "Mayank Katyayan",
    Department: "CSE",
    ModeOfRecruitment: "On Campus"
  },
  {
    CompanyName: "TVS-CS",
    JobPosition: "Technology Trainee",
    SalaryCTCinLPA: 6.5,
    StudentSelected: "Gulnaaz Parveen",
    Department: "CSE",
    ModeOfRecruitment: "On Campus"
  },
  {
    CompanyName: "TVS-CS",
    JobPosition: "Technology Trainee",
    SalaryCTCinLPA: 6.5,
    StudentSelected: "Nilom Jyoti Deka",
    Department: "CSE",
    ModeOfRecruitment: "On Campus"
  },
  {
    CompanyName: "TVS-CS",
    JobPosition: "Technology Trainee",
    SalaryCTCinLPA: 6.5,
    StudentSelected: "ATUL ADITYA",
    Department: "CSE",
    ModeOfRecruitment: "On Campus"
  },
  {
    CompanyName: "Planet Spark",
    JobPosition: "Business Development Counsellor",
    SalaryCTCinLPA: 6.5,
    StudentSelected: "Akansha Saha",
    Department: "IE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "EduStation",
    JobPosition: "Business Development Trainee",
    SalaryCTCinLPA: 6,
    StudentSelected: "ESLAVATH AKHILA",
    Department: "ECE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "EduStation",
    JobPosition: "Business Development Trainee",
    SalaryCTCinLPA: 6,
    StudentSelected: "Mahesh Kumar Mandal",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "EduStation",
    JobPosition: "Business Development Trainee",
    SalaryCTCinLPA: 6,
    StudentSelected: "Suraj Chandra Sonowal",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "EduStation",
    JobPosition: "Business Development Trainee",
    SalaryCTCinLPA: 6,
    StudentSelected: "Hriday Muchahary",
    Department: "ECE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "EduStation",
    JobPosition: "Business Development Trainee",
    SalaryCTCinLPA: 6,
    StudentSelected: "Kriti Kumari",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "EduStation",
    JobPosition: "Business Development Trainee",
    SalaryCTCinLPA: 6,
    StudentSelected: "Sandhya Kumari",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "EduStation",
    JobPosition: "Business Development Trainee",
    SalaryCTCinLPA: 6,
    StudentSelected: "Dhanjit Boro",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "EduStation",
    JobPosition: "Business Development Trainee",
    SalaryCTCinLPA: 6,
    StudentSelected: "Arjun Das",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "EduStation",
    JobPosition: "Business Development Trainee",
    SalaryCTCinLPA: 6,
    StudentSelected: "Akanksha Saha",
    Department: "IE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "Corizo Edutech",
    JobPosition: "Business Development Associate",
    SalaryCTCinLPA: 5,
    StudentSelected: "Akanksha Saha",
    Department: "IE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "Corizo Edutech",
    JobPosition: "Inside Sales Representative",
    SalaryCTCinLPA: 5,
    StudentSelected: "Ruksar Parveen",
    Department: "CE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "Corizo Edutech",
    JobPosition: "Inside Sales Representative",
    SalaryCTCinLPA: 5,
    StudentSelected: "Bijoya Roy",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "Corizo Edutech",
    JobPosition: "Inside Sales Representative",
    SalaryCTCinLPA: 5,
    StudentSelected: "Irshad Ali",
    Department: "IE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "Intellipaat",
    JobPosition: "Business Development Trainee",
    SalaryCTCinLPA: 4,
    StudentSelected: "Akanksha Saha",
    Department: "IE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "GlowLogics",
    JobPosition: "Inside Sales Representative",
    SalaryCTCinLPA: 5.2,
    StudentSelected: "Ashim Limbu",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "GlowLogics",
    JobPosition: "Inside Sales Representative",
    SalaryCTCinLPA: 5.2,
    StudentSelected: "Snigdha Borah",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "GlowLogics",
    JobPosition: "Inside Sales Representative",
    SalaryCTCinLPA: 5.2,
    StudentSelected: "Gomasa Nageshwari",
    Department: "ECE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "GlowLogics",
    JobPosition: "Inside Sales Representative",
    SalaryCTCinLPA: 5.2,
    StudentSelected: "Sneha Kumari",
    Department: "ECE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "GlowLogics",
    JobPosition: "Inside Sales Representative",
    SalaryCTCinLPA: 5.2,
    StudentSelected: "Shamim Shahinur Rrahman",
    Department: "CE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "GlowLogics",
    JobPosition: "Inside Sales Representative",
    SalaryCTCinLPA: 5.2,
    StudentSelected: "Utla Rohitha",
    Department: "IE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "GlowLogics",
    JobPosition: "Inside Sales Representative",
    SalaryCTCinLPA: 5.2,
    StudentSelected: "Puja Kumari",
    Department: "FET",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "MindSeekers",
    JobPosition: "Inside Sales Specialist",
    SalaryCTCinLPA: 5,
    StudentSelected: "Gomasa Nageshwari",
    Department: "ECE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "MindSeekers",
    JobPosition: "Inside Sales Specialist",
    SalaryCTCinLPA: 5,
    StudentSelected: "Mahesh Kumar Mandal",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "MindSeekers",
    JobPosition: "Inside Sales Specialist",
    SalaryCTCinLPA: 5,
    StudentSelected: "Ashim Limbu",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "MindSeekers",
    JobPosition: "Inside Sales Specialist",
    SalaryCTCinLPA: 5,
    StudentSelected: "Snighda Borah",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "MindSeekers",
    JobPosition: "Inside Sales Specialist",
    SalaryCTCinLPA: 5,
    StudentSelected: "Ankita Gagoi",
    Department: "IE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "MindSeekers",
    JobPosition: "Inside Sales Specialist",
    SalaryCTCinLPA: 5,
    StudentSelected: "Utla Mohita",
    Department: "IE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "MindSeekers",
    JobPosition: "Inside Sales Specialist",
    SalaryCTCinLPA: 5,
    StudentSelected: "Puja Kumari",
    Department: "FET",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "High Technext Engineering",
    JobPosition: "Technical Site Engineer",
    SalaryCTCinLPA: 3,
    StudentSelected: "Pritam Parajuli",
    Department: "ECE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "High Technext Engineering",
    JobPosition: "Technical Site Engineer",
    SalaryCTCinLPA: 3,
    StudentSelected: "Surajit Barman",
    Department: "ECE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "High Technext Engineering",
    JobPosition: "Technical Site Engineer",
    SalaryCTCinLPA: 3,
    StudentSelected: "Kanishka Brahma",
    Department: "ECE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "High Technext Engineering",
    JobPosition: "Technical Site Engineer",
    SalaryCTCinLPA: 3,
    StudentSelected: "Nazeer Uddin Ahmed",
    Department: "ECE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "High Technext Engineering",
    JobPosition: "Technical Site Engineer",
    SalaryCTCinLPA: 3,
    StudentSelected: "Jisua Daimari",
    Department: "ECE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "High Technext Engineering",
    JobPosition: "Technical Site Engineer",
    SalaryCTCinLPA: 3,
    StudentSelected: "Dharavath Vijaya",
    Department: "ECE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "High Technext Engineering",
    JobPosition: "Technical Site Engineer",
    SalaryCTCinLPA: 3,
    StudentSelected: "Gomasa Nageshwari",
    Department: "ECE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "Tata Power",
    JobPosition: "Diploma Apprenticeship Trainee",
    SalaryCTCinLPA: 2.98,
    StudentSelected: "Mondeep Barpujari",
    Department: "IE Diploma",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "Kodnest",
    JobPosition: "Incubation Drive",
    SalaryCTCinLPA: null,
    StudentSelected: "Nabajit Das",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "Pentagon Space",
    JobPosition: "Incubation Drive",
    SalaryCTCinLPA: null,
    StudentSelected: "Kalpojyoti Koch",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "Pentagon Space",
    JobPosition: "Incubation Drive",
    SalaryCTCinLPA: null,
    StudentSelected: "Prince Hazarika",
    Department: "CSE",
    ModeOfRecruitment: "On Campus (Online)"
  },
  {
    CompanyName: "DaveAI (SocioGraph)",
    JobPosition: "",
    SalaryCTCinLPA: 10,
    StudentSelected: "Prince Hazarika",
    Department: "CSE",
    ModeOfRecruitment: "Off Campus"
  },
  {
    CompanyName: "OSEL DEVICES PVT. LTD.",
    JobPosition: "LED- Software Engineer",
    SalaryCTCinLPA: 2.76,
    StudentSelected: "Hari Nath Pathak",
    Department: "IE",
    ModeOfRecruitment: "Off Campus"
  },
  {
    CompanyName: "ExtraMarks",
    JobPosition: "Trainee System Engineer",
    SalaryCTCinLPA: 3.12,
    StudentSelected: "Nabajit Das",
    Department: "CSE",
    ModeOfRecruitment: "Off Campus"
  },
  {
    CompanyName: "SIBIN Learning Cart Private limited",
    JobPosition: "Vocational Teacher",
    SalaryCTCinLPA: 2.4,
    StudentSelected: "San Raja Basumatary",
    Department: "FET",
    ModeOfRecruitment: "Off Campus"
  }
]


  // Add more rows here if you want full data
;

export default function PlacementChart() {
  const [selectedYear, setSelectedYear] = useState("2024-2025");
  const data = placementData[selectedYear];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-orange-600">
        Placement Data
      </h1>
      <h2 className="text-xl text-center text-gray-700 mt-2">{selectedYear}</h2>

      <div className="flex justify-center mt-6">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-orange-500"
        >
          {Object.keys(placementData).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-12 max-w-7xl mx-auto">
        {selectedYear === "2024-2025" ? (
          <>
            {/* Chart + Summary Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={data}
                    margin={{ top: 20, right: 20, left: 0, bottom: 40 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="branch" />
                    <YAxis />
                    <Tooltip />
                    <Legend
                      verticalAlign="bottom"
                      align="center"
                      layout="horizontal"
                    />
                    <Bar dataKey="offers" fill="#f87171" name="No. of Offers" />
                    <Bar
                      dataKey="placed"
                      fill="#facc15"
                      name="No. of Students Placed"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
                <table className="w-full border-collapse text-center text-sm">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">Branch</th>
                      <th className="border p-2">No. of Offers</th>
                      <th className="border p-2">No. of Students Placed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, idx) => (
                      <tr key={idx}>
                        <td className="border p-2">{row.branch}</td>
                        <td className="border p-2">{row.offers}</td>
                        <td className="border p-2">{row.placed}</td>
                      </tr>
                    ))}
                    <tr className="font-bold bg-gray-100">
                      <td className="border p-2">Total</td>
                      <td className="border p-2">
                        {data.reduce((sum, row) => sum + row.offers, 0)}
                      </td>
                      <td className="border p-2">
                        {data.reduce((sum, row) => sum + row.placed, 0)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 🟢 Detailed Table replacing image */}
            <div className="bg-white p-6 rounded-xl shadow-lg mt-10 overflow-x-auto">
              <h3 className="text-2xl font-semibold text-orange-600 mb-4 text-center">
                Detailed Placement Records (2024–25)
              </h3>
              <table className="w-full border-collapse text-sm text-center">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Company Name</th>
                    <th className="border p-2">Job Position</th>
                    <th className="border p-2">Salary (CTC in LPA)</th>
                    <th className="border p-2">Student Selected</th>
                    <th className="border p-2">Department</th>
                    <th className="border p-2">Mode of Recruitment</th>
                  </tr>
                </thead>
                <tbody>
                  {placementDetails2024_25.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="border p-2">{row. CompanyName}</td>
                      <td className="border p-2">{row.JobPosition}</td>
                      <td className="border p-2">{row.SalaryCTCinLPA}</td>
                      <td className="border p-2">{row.StudentSelected}</td>
                      <td className="border p-2">{row.Department}</td>
                      <td className="border p-2">{row.ModeOfRecruitment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : selectedYear === "2023-2024" ? (
          <>
            {/* Unchanged for previous years */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={data}
                    margin={{ top: 20, right: 20, left: 0, bottom: 40 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="branch" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="offers" fill="#f87171" name="No. of Offers" />
                    <Bar
                      dataKey="placed"
                      fill="#facc15"
                      name="No. of Students Placed"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
                <table className="w-full border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">Branch</th>
                      <th className="border p-2">No. of Offers</th>
                      <th className="border p-2">No. of Students Placed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, idx) => (
                      <tr key={idx}>
                        <td className="border p-2">{row.branch}</td>
                        <td className="border p-2">{row.offers}</td>
                        <td className="border p-2">{row.placed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg mt-10 flex justify-center">
              <img
                src="/T&P data/PlacementData_2023-24.png"
                alt="Placement Data 2023-24"
                className="rounded-lg shadow-md max-h-[500px] object-contain"
              />
            </div>
          </>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-lg flex justify-center items-center">
            <img
              src={
                selectedYear === "2022-2023"
                  ? "/T&P data/PlacementData_2022-23.png"
                  : "/T&P data/PlacementData_2021-22.png"
              }
              alt={`Placement Data ${selectedYear}`}
              className="rounded-lg shadow-md max-h-[500px] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}
