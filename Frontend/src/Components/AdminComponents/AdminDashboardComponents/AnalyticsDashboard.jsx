import React from "react";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts";

const monthlyData = [
  { month: "Jan", bookings: 65, revenue: 12500, vendors: 45 },
  { month: "Feb", bookings: 78, revenue: 15200, vendors: 52 },
  { month: "Mar", bookings: 92, revenue: 18900, vendors: 58 },
  { month: "Apr", bookings: 85, revenue: 16800, vendors: 61 },
  { month: "May", bookings: 105, revenue: 22300, vendors: 67 },
  { month: "Jun", bookings: 120, revenue: 25600, vendors: 72 },
];

const serviceData = [
  { name: "Photography", value: 35, color: "#8884d8" },
  { name: "Videography", value: 25, color: "#82ca9d" },
  { name: "Makeup & Beauty", value: 20, color: "#ffc658" },
  { name: "Catering", value: 15, color: "#ff7300" },
  { name: "Others", value: 5, color: "#00ff00" },
];

export function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = React.useState("overview");

  return (
    <div className="space-y-6 mt-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-gray-500">Detailed insights and performance metrics</p>
      </div>

      <div className="space-y-4">
     

        {activeTab === "overview" && (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <h2 className="text-lg font-bold">Monthly Bookings Trend</h2>
                  <p className="text-sm text-gray-500">Booking volume over the last 6 months</p>
                </div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="bookings" 
                        stroke="#8884d8" 
                        strokeWidth={2} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <h2 className="text-lg font-bold">Service Distribution</h2>
                  <p className="text-sm text-gray-500">Popular wedding services</p>
                </div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={serviceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {serviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "revenue" && (
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <h2 className="text-lg font-bold">Revenue Analytics</h2>
                <p className="text-sm text-gray-500">Monthly revenue trends and projections</p>
              </div>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}