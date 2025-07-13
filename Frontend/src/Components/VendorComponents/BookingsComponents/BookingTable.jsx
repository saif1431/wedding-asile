import { useState } from "react";
import { User, X } from "lucide-react";
import BookingDetailsView from "./BookingDetailsView";

export default function BookingTable() {
  const [searchId, setSearchId] = useState("");
  const [filters, setFilters] = useState({
    all: true,
    completed: false,
    schedule: false,
    cancelled: false,
  });
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Sample booking data
  const [bookings] = useState([
    {
      id: "1",
      customer: {
        name: "Ahmed",
        email: "ahmed@example.com",
        phone: "+1234567890"
      },
      package: {
        name: "Cherish Every Wedding Day Moment",
        price: 2800,
        duration: "8 hours",
        includes: ["Photography", "Videography", "Album"]
      },
      addOn: "NA",
      bookingId: "y500tvnbidk",
      eventDate: "26 June 2025",
      orderPlaced: "24 June 2025",
      amount: 2800,
      paymentStatus: "Refunded",
      serviceStatus: "Cancel",
      notes: "Customer requested cancellation due to change in wedding date"
    },
  ]);

  const handleFilterChange = (filterName) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const getStatusColor = (status, type) => {
    if (type === "payment") {
      switch (status) {
        case "Paid": return "bg-green-500 text-white";
        case "Refunded": return "bg-red-500 text-white";
        case "Pending": return "bg-yellow-500 text-white";
        case "Failed": return "bg-red-600 text-white";
        default: return "bg-gray-500 text-white";
      }
    } else {
      switch (status) {
        case "Completed": return "bg-green-500 text-white";
        case "Scheduled": return "bg-blue-500 text-white";
        case "Cancel": return "bg-red-500 text-white";
        case "In Progress": return "bg-yellow-500 text-white";
        default: return "bg-gray-500 text-white";
      }
    }
  };

  const handleViewBooking = (booking) => {
    setSelectedBooking(booking);
  };

  const closeView = () => {
    setSelectedBooking(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Conditional rendering based on whether a booking is selected */}
      {selectedBooking ? (
        // Booking Details View
       <div>
            <BookingDetailsView/>
       </div>
      ) : (
        // Booking Table View (with header section)
        <>
          {/* Header Section - only shown in table view */}
          <div className="mb-6">
            {/* Sort By Filters */}
            <div className="flex items-center justify-end gap-6 mb-4">
              <span className="text-gray-700 font-medium">Sort By:</span>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={filters.all} 
                    onChange={() => handleFilterChange("all")} 
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">All</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={filters.completed} 
                    onChange={() => handleFilterChange("completed")} 
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Completed</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={filters.schedule} 
                    onChange={() => handleFilterChange("schedule")} 
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Schedule</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={filters.cancelled} 
                    onChange={() => handleFilterChange("cancelled")} 
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Cancelled</span>
                </label>
              </div>
            </div>

            {/* Search Section */}
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Enter booking id"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="max-w-xs bg-white border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-full font-medium">
                Find
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left p-4 font-medium text-gray-700">Customer</th>
                    <th className="text-left p-4 font-medium text-gray-700">Packages</th>
                    <th className="text-left p-4 font-medium text-gray-700">Add-On</th>
                    <th className="text-left p-4 font-medium text-gray-700">Booking ID</th>
                    <th className="text-left p-4 font-medium text-gray-700">Event Date</th>
                    <th className="text-left p-4 font-medium text-gray-700">Order Placed</th>
                    <th className="text-left p-4 font-medium text-gray-700">Amount</th>
                    <th className="text-left p-4 font-medium text-gray-700">Payment Status</th>
                    <th className="text-left p-4 font-medium text-gray-700">Service Status</th>
                    <th className="text-left p-4 font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-medium text-gray-900">{booking.customer.name}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-gray-900">
                          {booking.package.name}
                          <span className="text-gray-600">(£{booking.package.price})</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-700">{booking.addOn}</td>
                      <td className="p-4 text-gray-700 font-mono text-sm">{booking.bookingId}</td>
                      <td className="p-4 text-gray-700">{booking.eventDate}</td>
                      <td className="p-4 text-gray-700">{booking.orderPlaced}</td>
                      <td className="p-4">
                        <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">
                          £{booking.amount}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded text-sm font-medium ${getStatusColor(booking.paymentStatus, "payment")}`}>
                          {booking.paymentStatus}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded text-sm font-medium ${getStatusColor(booking.serviceStatus, "service")}`}>
                          {booking.serviceStatus}
                        </span>
                      </td>
                      <td className="p-4">
                        <button 
                          onClick={() => handleViewBooking(booking)}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Empty State */}
          {bookings.length === 0 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <div className="text-gray-500">
                <User className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No bookings found</h3>
                <p className="text-sm">Try adjusting your search criteria or filters.</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}