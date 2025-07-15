"use client"

import { useState } from "react"
import { Search, Eye, CheckCircle, XCircle, Clock, CalendarIcon, Edit } from "lucide-react"

const bookings = [
  {
    id: "BK001",
    customer: "Sarah Johnson",
    vendor: "Premium Photography Co.",
    service: "Wedding Photography",
    date: "2024-03-15",
    amount: "£1,200",
    status: "confirmed",
    paymentStatus: "paid",
    createdAt: "2024-01-10",
  },
  // ... (rest of the booking data remains same)
];

 function BookingManagementTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [editingBooking, setEditingBooking] = useState(null)
  const [activeTab, setActiveTab] = useState("all")
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status) => {
    const colors = {
      confirmed: "bg-blue-100 text-blue-800",
      pending: "bg-yellow-100 text-yellow-800",
      completed: "bg-gray-100 text-gray-800",
      cancelled: "bg-red-100 text-red-800"
    }
    return colors[status] || "bg-gray-100 text-gray-800"
  }

  const getPaymentStatusColor = (status) => {
    const colors = {
      paid: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      refunded: "bg-gray-100 text-gray-800"
    }
    return colors[status] || "bg-red-100 text-red-800"
  }

  const handleViewBooking = (booking) => {
    setSelectedBooking(booking)
    setIsViewDialogOpen(true)
  }

  const handleEditBooking = (booking) => {
    setEditingBooking(booking)
    setIsEditDialogOpen(true)
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Booking Management</h1>
        <p className="text-gray-500">Manage all wedding service bookings</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Total Bookings", value: "856", icon: <CalendarIcon className="h-4 w-4" />, desc: "+8% from last month" },
          { title: "Pending", value: "45", icon: <Clock className="h-4 w-4" />, desc: "Awaiting confirmation" },
          { title: "Confirmed", value: "678", icon: <CheckCircle className="h-4 w-4" />, desc: "Ready to proceed" },
          { title: "Completed", value: "133", icon: <CheckCircle className="h-4 w-4" />, desc: "Successfully finished" }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              {stat.icon}
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b">
        {[
          { id: "all", label: "All Bookings" },
          { id: "pending", label: "Pending" },
          { id: "confirmed", label: "Confirmed" },
          { id: "calendar", label: "Calendar View" }
        ].map(tab => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm font-medium ${activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* All Bookings Tab */}
      {activeTab === "all" && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold">All Bookings</h2>
            <p className="text-gray-500 text-sm">Manage and track all booking requests</p>
            <div className="mt-4 border border-gray-200 rounded-lg w-fit flex items-center">
              <input
                type="text"
                placeholder="Search bookings..."
                className="border-none outline-none rounded-md px-3 py-2 text-sm w-full max-w-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
                            <Search className="h-4 w-4 text-gray-400 mr-2" />

            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vendor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{booking.id}</td>
                    <td className="px-6 py-4">{booking.customer}</td>
                    <td className="px-6 py-4">{booking.vendor}</td>
                    <td className="px-6 py-4">{booking.service}</td>
                    <td className="px-6 py-4">{booking.date}</td>
                    <td className="px-6 py-4">{booking.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
                        {booking.paymentStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleViewBooking(booking)}
                          className="p-1 rounded-md hover:bg-gray-100"
                          title="View booking"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleEditBooking(booking)}
                          className="p-1 rounded-md hover:bg-gray-100"
                          title="Edit booking"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        {booking.status === "pending" && (
                          <>
                            <button className="p-1 rounded-md hover:bg-gray-100 text-green-600" title="Confirm">
                              <CheckCircle className="h-4 w-4" />
                            </button>
                            <button className="p-1 rounded-md hover:bg-gray-100 text-red-600" title="Cancel">
                              <XCircle className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Calendar View Tab */}
      {activeTab === "calendar" && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">Booking Calendar</h2>
            <p className="text-gray-500 text-sm">View bookings in calendar format</p>
          </div>
          <div className="p-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Calendar</h3>
                {/* Simple calendar placeholder - you'd implement a proper calendar here */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div
                      key={i}
                      className={`p-2 text-center border rounded ${i + 1 === selectedDate.getDate() ? 'bg-blue-100' : ''}`}
                      onClick={() => setSelectedDate(new Date(selectedDate.setDate(i + 1)))}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-4">Bookings for {selectedDate.toDateString()}</h3>
                <div className="space-y-2">
                  {bookings
                    .filter((booking) => booking.date === selectedDate.toISOString().split("T")[0])
                    .map((booking) => (
                      <div key={booking.id} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{booking.service}</p>
                            <p className="text-sm text-gray-500">
                              {booking.customer} → {booking.vendor}
                            </p>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Booking Dialog */}
      {isViewDialogOpen && selectedBooking && (
        <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white border border-gray-300 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">Booking Details - {selectedBooking.id}</h3>
                  <p className="text-gray-500">Complete booking information and timeline</p>
                </div>
                <button
                  onClick={() => setIsViewDialogOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold">Booking Information</h4>
                    <div className="space-y-2 mt-2">
                      <div><strong>Booking ID:</strong> {selectedBooking.id}</div>
                      <div><strong>Service:</strong> {selectedBooking.service}</div>
                      <div><strong>Date:</strong> {selectedBooking.date}</div>
                      <div><strong>Amount:</strong> {selectedBooking.amount}</div>
                      <div><strong>Created:</strong> {selectedBooking.createdAt}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Status</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedBooking.status)}`}>
                        {selectedBooking.status}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${getPaymentStatusColor(selectedBooking.paymentStatus)}`}>
                        {selectedBooking.paymentStatus}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Customer Details</h4>
                    <div className="space-y-1 mt-2">
                      <div>{selectedBooking.customer}</div>
                      <div className="text-sm text-gray-500">customer@email.com</div>
                      <div className="text-sm text-gray-500">+44 7123 456789</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Vendor Details</h4>
                    <div className="space-y-1 mt-2">
                      <div>{selectedBooking.vendor}</div>
                      <div className="text-sm text-gray-500">vendor@email.com</div>
                      <div className="text-sm text-gray-500">+44 7987 654321</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <h4 className="font-semibold mb-2">Booking Timeline</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Booking Created</span>
                    <span>{selectedBooking.createdAt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Received</span>
                    <span>{selectedBooking.paymentStatus === "paid" ? selectedBooking.createdAt : "Pending"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Date</span>
                    <span>{selectedBooking.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-2 mt-6">
                <button
                  className="px-4 py-2 border rounded-md hover:bg-gray-50"
                  onClick={() => {
                    setIsViewDialogOpen(false)
                    handleEditBooking(selectedBooking)
                  }}
                >
                  Edit Booking
                </button>
                {selectedBooking.status === "pending" && (
                  <>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                      Confirm
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Booking Dialog */}
      {isEditDialogOpen && editingBooking && (
        <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white border border-gray-400 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">Edit Booking - {editingBooking.id}</h3>
                  <p className="text-gray-500">Update booking details</p>
                </div>
                <button
                  onClick={() => setIsEditDialogOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  ×
                </button>
              </div>

              <div className="grid gap-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                    <input
                      type="text"
                      className="w-full border rounded-md p-2"
                      defaultValue={editingBooking.service}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Date</label>
                    <input
                      type="date"
                      className="w-full border rounded-md p-2"
                      defaultValue={editingBooking.date}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                    <input
                      type="text"
                      className="w-full border rounded-md p-2"
                      defaultValue={editingBooking.amount}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select className="w-full border rounded-md p-2" defaultValue={editingBooking.status}>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <textarea
                    className="w-full border rounded-md p-2 min-h-[100px]"
                    placeholder="Add booking notes..."
                  />
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    className="px-4 btn2 py-2 border rounded-md hover:bg-gray-50"
                    onClick={() => setIsEditDialogOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 btn text-white rounded-md "
                    onClick={() => setIsEditDialogOpen(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookingManagementTable
