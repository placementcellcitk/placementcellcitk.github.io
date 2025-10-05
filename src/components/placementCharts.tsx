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

export default function PlacementChart() {
  const [selectedYear, setSelectedYear] = useState("2023-2024");
  const data = placementData[selectedYear];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-orange-600">
        Placement Data
      </h1>
      <h2 className="text-xl text-center text-gray-700 mt-2">{selectedYear}</h2>

      {/* Year Selector */}
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

      {/* Content */}
      <div className="mt-12 max-w-6xl mx-auto">
        {selectedYear === "2023-2024" ? (
          <>
            {/* Chart + Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Chart */}
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

              {/* Table */}
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
                    {/* Totals */}
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

            {/* Image below chart+table */}
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
