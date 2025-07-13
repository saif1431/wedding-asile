      import React from "react";

const BookingsTable = () => {
  const bookings = [
    {
      image:'/profileImg.png',
      package: "Cherish Every Wedding Day Moment(E2800)",
      eventDate: "26 June 2025",
      orderPlaced: "24 June 2025",
      amount: "£2600",
      paymentStatus: "Refunded",
      serviceStatus: "Cancel",
    },
    // Add more booking data here
    {
    image:'/profileImg.png',
      package: "Package 2",
      eventDate: "27 June 2025",
      orderPlaced: "25 June 2025",
      amount: "£3000",
      paymentStatus: "Paid",
      serviceStatus: "Completed",
    },
    {
      image:'/profileImg.png',
      package: "Package 3",
      eventDate: "28 June 2025",
      orderPlaced: "26 June 2025",
      amount: "£3500",
      paymentStatus: "Pending",
      serviceStatus: "In Progress",
    },
    {
   image:'/profileImg.png',
      package: "Package 4",
      eventDate: "29 June 2025",
      orderPlaced: "27 June 2025",
      amount: "£4000",
      paymentStatus: "Paid",
      serviceStatus: "Scheduled",
    },
    {
   image:'/profileImg.png',
      package: "Package 4",
      eventDate: "29 June 2025",
      orderPlaced: "27 June 2025",
      amount: "£4000",
      paymentStatus: "Paid",
      serviceStatus: "Scheduled",
    },
    {
   image:'/profileImg.png',
      package: "Package 4",
      eventDate: "29 June 2025",
      orderPlaced: "27 June 2025",
      amount: "£4000",
      paymentStatus: "Paid",
      serviceStatus: "Scheduled",
    },


  ];

  return (
    <div className="  w-full mt-6 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>
      <div className="overflow-auto  h-80 rounded-lg">
        <table className="divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>  
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Packages
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Event Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Placed
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <img src={booking.image} alt="Profile" className="w-10 h-10 rounded-full" />                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {booking.package}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {booking.eventDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {booking.orderPlaced}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {booking.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.paymentStatus === "Paid"
                        ? "bg-green-100 text-green-800"
                        : booking.paymentStatus === "Refunded"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {booking.paymentStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.serviceStatus === "Completed"
                        ? "bg-green-100 text-green-800"
                        : booking.serviceStatus === "Cancel" || booking.serviceStatus === "Canceled"
                        ? "bg-red-100 text-red-800"
                        : booking.serviceStatus === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {booking.serviceStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsTable;