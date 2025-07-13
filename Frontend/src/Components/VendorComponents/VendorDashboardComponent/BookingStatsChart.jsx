"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

const data = [
  { month: "Jan", bookings: 0 },
  { month: "Feb", bookings: 0 },
  { month: "Mar", bookings: 0 },
  { month: "Apr", bookings: 0 },
  { month: "May", bookings: 0 },
  { month: "Jun", bookings: 0 },
  { month: "Jul", bookings: 0 },
  { month: "Aug", bookings: 0 },
  { month: "Sep", bookings: 0 },
  { month: "Oct", bookings: 0 },
  { month: "Nov", bookings: 0 },
  { month: "Dec", bookings: 0 },
];

export default function BookingStatsChart() {
  const [hiddenLines, setHiddenLines] = useState({});

  const handleLegendClick = (dataKey) => {
    setHiddenLines((prev) => ({
      ...prev,
      [dataKey]: !prev[dataKey],
    }));
  };

  const CustomLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex justify-center mb-6  ">
        {payload.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleLegendClick(entry.dataKey)}
          >
            <div className={`w-4 h-3 rounded-sm ${hiddenLines[entry.dataKey] ? "bg-gray-300" : "bg-blue-400"}`} />
            <span className={`text-sm ${hiddenLines[entry.dataKey] ? "text-gray-400 line-through" : "text-gray-600"}`}>
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className=" mt-6 lg:p-4 p-2  bg-white ">
      <h1 className="text-2xl font-normal text-gray-500 mb-8">Booking Stats</h1>

      <div className="bg-white lg:p-6 rounded-lg">
        <CustomLegend payload={[{ value: "Bookings", dataKey: "bookings", color: "#60a5fa" }]} />

        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="1 1" stroke="#e5e7eb" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
              <YAxis
                domain={[-1, 1]}
                ticks={[-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
              />
              {!hiddenLines.bookings && (
                <Line
                  type="monotone"
                  dataKey="bookings"
                  stroke="#60a5fa"
                  strokeWidth={2}
                  dot={{ fill: "#60a5fa", strokeWidth: 0, r: 3 }}
                  activeDot={{ r: 5, fill: "#60a5fa" }}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 
