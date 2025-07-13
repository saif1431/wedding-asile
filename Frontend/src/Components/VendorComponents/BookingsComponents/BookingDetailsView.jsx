"use client"

import { X, Camera } from "lucide-react"

export default function BookingDetailsView() {
  const bookingData = {
    orderId: "y500tvnbidk",
    bookingStatus: "Cancelled",
    service: {
      type: "Photographers",
      date: "26 June 2025",
      name: "Cherish Every Wedding Day Moment",
    },
    totalAmount: 2800,
    amountPaid: 0,
    balance: 0,
    vendor: {
      name: "AbdulBasit",
      type: "Photographers",
      phone: "+447426479002",
      price: 2800,
    },
    location: {
      address: "ulafufsdbfu dnfucifn",
      postcode: "23455",
    },
    customer: {
      name: "Ahmed",
    },
    serviceDetails: [
      {
        service: "AbdulBasit- Photographers- Cherish Every Wedding Day Moment",
        bookingDateTime: "26 June 2025 / 15:36",
        location: "ulafufsdbfu dnfucifn",
        orderPlaced: "24 June 2025",
        nextPaymentDue: "NA",
        amount: 2800,
      },
    ],
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Cancelled":
        return "text-red-600"
      case "Confirmed":
        return "text-green-600"
      case "Pending":
        return "text-yellow-600"
      case "Completed":
        return "text-blue-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto lg:p-6 p-2 bg-gray-50 min-h-screen">
      {/* Payment Status Progress Bar */}
      <div className="mb-8 bg-white lg:p-6 p-2 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 font-medium">Payment Status:</span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">20%</span>
            <span className="text-sm text-gray-600">100%</span>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-red-500 rounded-full" style={{ width: "20%" }}></div>
          </div>
          <div className="absolute top-0 left-[20%] transform -translate-x-1/2 -translate-y-1">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <X className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <X className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Order Header */}
      <div className="bg-white lg:p-6 p-2  rounded-lg shadow-sm mb-6">
        <div className="flex flex-wrap gap-4 justify-between items-start">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 mb-2">Order Id # {bookingData.orderId}</h1>
            <p className="text-gray-700 mb-4">
              <span className="font-medium">Booking Status:</span>{" "}
              <span className={getStatusColor(bookingData.bookingStatus)}>{bookingData.bookingStatus}</span>
            </p>
            <div className="text-gray-700">
              <span className="font-medium">{bookingData.service.type}</span>{" "}
              <span className="mx-2">{bookingData.service.date}</span> <span>{bookingData.service.name}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-8 text-sm">
              <div>
                <span className="text-gray-500">Total Amount</span>
                <div className="font-semibold text-gray-900">£{bookingData.totalAmount}</div>
              </div>
              <div>
                <span className="text-gray-500">Amount Paid</span>
                <div className="font-semibold text-green-600">£{bookingData.amountPaid}</div>
              </div>
              <div>
                <span className="text-gray-500">Balance</span>
                <div className="font-semibold text-red-600">£{bookingData.balance}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Vendor Details */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Vendor Details</h3>
          <div className="space-y-3">
            <div>
              <span className="text-gray-500 text-sm">Name:</span>
              <div className="font-medium text-gray-900">{bookingData.vendor.name}</div>
            </div>
            <div>
              <span className="text-gray-500 text-sm">Type:</span>
              <div className="text-gray-700">{bookingData.vendor.type}</div>
            </div>
            <div>
              <span className="text-gray-500 text-sm">Phone:</span>
              <div className="text-gray-700">{bookingData.vendor.phone}</div>
            </div>
            <div>
              <span className="text-gray-500 text-sm">Price:</span>
              <div className="font-medium text-gray-900">£{bookingData.vendor.price}</div>
            </div>
          </div>
        </div>

        {/* Wedding Location */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Wedding Location</h3>
          <div className="space-y-3">
            <div className="text-gray-700">{bookingData.location.address}</div>
            <div className="text-gray-700">
              <span className="text-gray-500 text-sm">postcode:</span> {bookingData.location.postcode}
            </div>
          </div>
        </div>

        {/* Customer Details */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Customer Details</h3>
          <div className="font-medium text-gray-900">{bookingData.customer.name}</div>
        </div>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left p-4 font-bold text-gray-700">Services</th>
                <th className="text-left p-4 font-bold text-gray-700">Booking Date/Time</th>
                <th className="text-left p-4 font-bold text-gray-700">Location</th>
                <th className="text-left p-4 font-bold text-gray-700">Order Placed</th>
                <th className="text-left p-4 font-bold text-gray-700">Next Payment Due</th>
                <th className="text-left p-4 font-bold text-gray-700">Amount</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.serviceDetails.map((service, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-gray-900">{service.service}</div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-700">{service.bookingDateTime}</td>
                  <td className="p-4 text-gray-700">{service.location}</td>
                  <td className="p-4 text-gray-700">{service.orderPlaced}</td>
                  <td className="p-4 text-gray-700">{service.nextPaymentDue}</td>
                  <td className="p-4 font-medium text-gray-900">£{service.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Financial Summary */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex justify-end">
            <div className="w-64 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Total</span>
                <span className="font-medium text-gray-900">£{bookingData.totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Amount Paid</span>
                <span className="font-medium text-green-600">£{bookingData.amountPaid}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-3">
                <span className="text-gray-700 font-medium">Balance</span>
                <span className="font-medium text-red-600">£{bookingData.balance}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-start">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-3 rounded-full font-medium">
          View Invoice
        </button>
      </div>
    </div>
  )
}