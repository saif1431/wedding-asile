import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const mockComplaints = [
  {
    id: 1,
    customer: "Ali Raza",
    email: "ali@example.com",
    subject: "Order Delay",
    message: "My order is delayed by 3 days. Please resolve.",
    status: "Pending",
    date: "2025-07-14",
  },
  {
    id: 2,
    customer: "Sara Khan",
    email: "sara@example.com",
    subject: "Payment Issue",
    message: "Payment deducted but order not confirmed.",
    status: "Resolved",
    date: "2025-07-13",
  },
];

export default function ComplaintsPage() {
       const { toggleSidebar } = useOutletContext();
  const [complaints, setComplaints] = useState(mockComplaints);
  const [selected, setSelected] = useState(null);

  const handleResolve = (id) => {
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: "Resolved" } : c
      )
    );
    setSelected(null);
  };

  return (
    <div className="lg:px-12 px-6 py-4 mt-4">
      <h1 className="text-2xl font-semibold mb-6">Customer Complaints</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Customer</th>
              <th className="py-2 px-4 border-b">Subject</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c, idx) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b border-gray-300">{idx + 1}</td>
                <td className="py-2 px-4 border-b border-gray-300">{c.customer}</td>
                <td className="py-2 px-4 border-b border-gray-300">{c.subject}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${c.status === "Resolved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {c.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-gray-300">{c.date}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => setSelected(c)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
            {complaints.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-400">
                  No complaints found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Complaint Details Modal */}
      {selected && (
        <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white border border-gray-400 rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-2">{selected.subject}</h2>
            <p className="mb-1"><span className="font-medium">Customer:</span> {selected.customer}</p>
            <p className="mb-1"><span className="font-medium">Email:</span> {selected.email}</p>
            <p className="mb-1"><span className="font-medium">Date:</span> {selected.date}</p>
            <p className="mb-4"><span className="font-medium">Message:</span> {selected.message}</p>
            <div className="flex gap-3">
              {selected.status !== "Resolved" && (
                <button
                  className="btn text-white px-4 py-2 rounded "
                  onClick={() => handleResolve(selected.id)}
                >
                  Mark as Resolved
                </button>
              )}
              <button
                className="btn2 hover:text-white px-4 py-2 rounded hover:bg-gray-300"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
  );
}
