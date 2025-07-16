"use client"

import { useState } from "react"
import { Check, ArrowLeft } from "lucide-react"

import OrderDetailView from "./OrderDetailView"

const sampleBookings = [
  {
    id: "1",
    orderId: "fwnmis50ahg",
    photographerName: "AbdulBasit",
    photographerLogo: "/placeholder.svg?height=60&width=60",
    isVerified: true,
    date: "22 July 2025",
    eventTitle: "Cherish Every Wedding Day Moment",
    category: "Photographers",
    details: {
      package: "Premium Package",
      hours: 8,
      deliverables: ["100+ Edited Photos", "Online Gallery", "Print Release"],
      price: 1200,
      deposit: 400,
      balance: 800,
      dueDate: "15 July 2025"
    }
  },
  {
    id: "2",
    orderId: "abc123def",
    photographerName: "Sarah Johnson",
    photographerLogo: "/placeholder.svg?height=60&width=60",
    isVerified: true,
    date: "15 August 2025",
    eventTitle: "Corporate Event Photography",
    category: "Photographers",
    details: {
      package: "Corporate Package",
      hours: 6,
      deliverables: ["50+ Edited Photos", "Online Gallery", "Social Media Images"],
      price: 900,
      deposit: 300,
      balance: 600,
      dueDate: "1 August 2025"
    }
  },
  {
    id: "3",
    orderId: "xyz789ghi",
    photographerName: "Mike Chen",
    photographerLogo: "/placeholder.svg?height=60&width=60",
    isVerified: false,
    date: "03 September 2025",
    eventTitle: "Birthday Party Memories",
    category: "Photographers",
    details: {
      package: "Basic Package",
      hours: 4,
      deliverables: ["30+ Edited Photos", "Online Gallery"],
      price: 600,
      deposit: 200,
      balance: 400,
      dueDate: "20 August 2025"
    }
  },
]

export default function BookingDashboard() {
  const [bookings] = useState(sampleBookings)
  const [selectValue, setSelectValue] = useState("select")
  const [viewingDetails, setViewingDetails] = useState(null)

  const currentBooking = bookings.find(booking => booking.id === viewingDetails)

  return (
    <div className="min-h-screen bg-gray-50 lg:p-6 p-3 mt-16">
      <div className="max-w-6xl mx-auto space-y-6">
        {!viewingDetails && (
          // Only show financial summary & select when NOT viewing details
          <>
            <div className="flex flex-wrap gap-4 justify-between items-start">
              <div className="flex gap-8">
                <div className="space-y-2">
                  <p className="text-gray-500 text-sm">Total Amount</p>
                  <p className="text-2xl font-bold text-black">£</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-500 text-sm">Amount Paid</p>
                  <p className="text-2xl font-bold text-green-600">£</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-500 text-sm">Balance</p>
                  <p className="text-2xl font-bold text-red-600">£</p>
                </div>
              </div>

              <div className="relative w-32">
                <select 
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  className="w-full py-3 px-4 text-lg rounded-md border-none outline-none appearance-none bg-[#E0D7D1]"
                >
                  <option className="bg-white" value="select">Select</option>
                  <option className="bg-white" value="all">All</option>
                  <option className="bg-white" value="Completd">Confirmed</option>
                  <option className="bg-white" value="Scheduled">Scheduled</option>
                  <option className="bg-white" value="pending">Pending</option>
                  <option className="bg-white" value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* Pending Status Section */}
            <div className="space-y-2 mt-12">
              <h2 className="text-2xl font-bold text-gray-900">Pending</h2>
              <p className="text-gray-500">Payment did not receive, please make payment to confirm your booking!</p>
            </div>
          </>
        )}

        {viewingDetails ? (
          // Order Details View (hides financial summary & select)
        <div>
          <OrderDetailView/>
        </div>
        ) : (
          // Bookings Grid (shown when not viewing details)
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-lg shadow-sm border-gray-400 lg:p-6 p-2 space-y-4">
                {/* Photographer Header */}
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">ARO</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{booking.photographerName}</h3>
                        {booking.isVerified && (
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{booking.category}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-900">{booking.category}</p>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap justify-between  gap-4 items-start">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-900">{booking.date}</p>
                    <p className="text-sm text-gray-600">{booking.eventTitle}</p>
                  </div>
                  <div className="lg:text-right space-y-1">
                    <p className="text-sm font-medium text-gray-900">Order Id # {booking.orderId}</p>
                    <button 
                      onClick={() => setViewingDetails(booking.id)}
                      className="p-0 h-auto text-blue-600 text-sm underline"
                    >
                      View Order Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}