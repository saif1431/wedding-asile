import React from 'react'
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TrendingUp, TrendingDown, Users, Calendar, CreditCard, Star } from "lucide-react";

const stats = [
  {
    title: "Total Vendors",
    value: "1,247",
    change: "+12%",
    trend: "up",
    icon: Users,
    description: "Active wedding vendors",
  },
  {
    title: "Monthly Bookings",
    value: "856",
    change: "+8%",
    trend: "up",
    icon: Calendar,
    description: "This month's bookings",
  },
  {
    title: "Revenue",
    value: "£45,231",
    change: "+15%",
    trend: "up",
    icon: CreditCard,
    description: "Monthly revenue",
  },
  {
    title: "Average Rating",
    value: "4.8",
    change: "+0.2",
    trend: "up",
    icon: Star,
    description: "Platform average rating",
  },
  {
    title: "Active Users",
    value: "3,542",
    change: "+5%",
    trend: "up",
    icon: Users,
    description: "Currently active users",
  },
  {
    title: "Pending Orders",
    value: "128",
    change: "-3%",
    trend: "down",
    icon: Calendar,
    description: "Orders awaiting processing",
  },
];

function DashboardCard() {
  return (
    <div className='space-y-6'>
      {/* First row with 3 cards */}
      <div className='grid gap-4 md:grid-cols-3'>
        <div className='bg-white px-6 py-6 w-full rounded-md space-y-8 shadow-sm border border-gray-300'>
          <div className='text-2xl text-gray-500 font-semibold flex items-center gap-2 justify-between'>
            <h1 className='text-gray-500'>Bookings</h1>
            <IoBagCheckOutline />
          </div>
          <p className='text-4xl font-bold'>1</p>
        </div>
        
        <div className='bg-white px-6 py-6 w-full rounded-md space-y-8 shadow-sm border border-gray-300'>
          <div className='text-2xl text-gray-500 font-semibold flex items-center gap-2 justify-between'>
            <h1 className='text-gray-500'>Revenue</h1>
            <CiMoneyCheck1 className='text-3xl' />
          </div>
          <p className='text-4xl font-bold text-green-500'>$0</p>
        </div>
        
        <div className='bg-white px-6 py-6 w-full rounded-md space-y-8 shadow-sm border border-gray-300'>
          <div className='text-2xl text-gray-500 font-semibold flex items-center gap-2 justify-between'>
            <h1 className='text-gray-500'>Transactions</h1>
            <FaRegMoneyBillAlt className='text-3xl' />
          </div>
          <p className='text-4xl font-bold'>0</p>
        </div>
      </div>

      {/* Second row with 3 cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {stats.slice(0, 3).map((stat) => (
          <div key={stat.title} className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-medium">{stat.title}</h3>
              {stat.icon && React.createElement(stat.icon, { className: "h-4 w-4 text-gray-400" })}
            </div>
            <div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  stat.trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}>
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {stat.change}
                </span>
                <span>{stat.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Third row with 3 cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {stats.slice(3, 6).map((stat) => (
          <div key={stat.title} className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-medium">{stat.title}</h3>
              {stat.icon && React.createElement(stat.icon, { className: "h-4 w-4 text-gray-400" })}
            </div>
            <div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  stat.trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}>
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {stat.change}
                </span>
                <span>{stat.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardCard