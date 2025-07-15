"use client"

import { useState } from "react"
import { Search, MessageSquare, Clock, CheckCircle, AlertCircle, User } from "lucide-react"

const supportTickets = [
  {
    id: "T001",
    customer: "Sarah Johnson",
    subject: "Payment issue with booking",
    category: "Payment",
    priority: "high",
    status: "open",
    assignedTo: "Support Team",
    createdAt: "2024-01-20",
    lastReply: "2024-01-20",
    messages: 3,
  },
  {
    id: "T002",
    customer: "Ahmed Khan",
    subject: "Vendor not responding to messages",
    category: "Vendor Issue",
    priority: "medium",
    status: "in_progress",
    assignedTo: "John Doe",
    createdAt: "2024-01-19",
    lastReply: "2024-01-19",
    messages: 5,
  },
  {
    id: "T003",
    customer: "Priya Sharma",
    subject: "How to change wedding date",
    category: "General",
    priority: "low",
    status: "resolved",
    assignedTo: "Jane Smith",
    createdAt: "2024-01-18",
    lastReply: "2024-01-18",
    messages: 2,
  },
  {
    id: "T004",
    customer: "James Wilson",
    subject: "Refund request for cancelled service",
    category: "Refund",
    priority: "high",
    status: "open",
    assignedTo: "Support Team",
    createdAt: "2024-01-17",
    lastReply: "2024-01-17",
    messages: 1,
  },
]

function SupportTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const filteredTickets = supportTickets.filter(ticket =>
    ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    const colors = {
      open: "bg-red-100 text-red-800",
      in_progress: "bg-blue-100 text-blue-800",
      resolved: "bg-green-100 text-green-800",
      closed: "bg-gray-100 text-gray-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-gray-100 text-gray-800"
    };
    return colors[priority] || "bg-gray-100 text-gray-800";
  };

  const getStatusIcon = (status) => {
    const icons = {
      open: <AlertCircle className="h-4 w-4" />,
      in_progress: <Clock className="h-4 w-4" />,
      resolved: <CheckCircle className="h-4 w-4" />
    };
    return icons[status] || <MessageSquare className="h-4 w-4" />;
  };

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
    setOpenDialog(true);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Support Management</h1>
        <p className="text-gray-500">Manage customer support tickets and inquiries</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Open Tickets", value: "23", icon: <AlertCircle className="h-4 w-4" />, desc: "Awaiting response" },
          { title: "In Progress", value: "15", icon: <Clock className="h-4 w-4" />, desc: "Being handled" },
          { title: "Resolved Today", value: "8", icon: <CheckCircle className="h-4 w-4" />, desc: "Completed today" },
          { title: "Avg Response Time", value: "2.4h", icon: <Clock className="h-4 w-4" />, desc: "Average response" }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="flex flex-wrap justify-between items-center">
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

      {/* Tickets Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Support Tickets</h2>
          <p className="text-gray-500 text-sm">Manage customer support requests and inquiries</p>
          <div className="mt-4  border border-gray-300 rounded-md flex w-fit p-2 items-center">
            <input
              type="text"
              placeholder="Search tickets..."
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ticket ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono text-sm">{ticket.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        {ticket.customer.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium">{ticket.customer}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="text-sm font-medium truncate">{ticket.subject}</div>
                    <div className="text-sm text-gray-500">{ticket.messages} messages</div>
                  </td>
                  <td className="px-6 py-4 text-sm">{ticket.category}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap items-center space-x-2">
                      {getStatusIcon(ticket.status)}
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(ticket.status)}`}>
                        {ticket.status.replace("_", " ")}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{ticket.assignedTo}</td>
                  <td className="px-6 py-4 text-sm">{ticket.createdAt}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleTicketClick(ticket)}
                        className="p-1 rounded-md hover:bg-gray-100"
                        title="View ticket"
                      >
                        <MessageSquare className="h-4 w-4" />
                      </button>
                      <button className="p-1 rounded-md hover:bg-gray-100" title="Assign to me">
                        <User className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ticket Dialog */}
      {openDialog && selectedTicket && (
        <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white border border-gray-400 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">
                    Ticket {selectedTicket.id} - {selectedTicket.subject}
                  </h3>
                  <p className="text-gray-500">
                    Customer: {selectedTicket.customer} | Priority: {selectedTicket.priority}
                  </p>
                </div>
                <button
                  onClick={() => setOpenDialog(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  ×
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">{selectedTicket.customer}</span>
                    <span className="text-sm text-gray-500">{selectedTicket.createdAt}</span>
                  </div>
                  <p className="text-sm">Original message content would appear here...</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reply to customer:
                  </label>
                  <textarea
                    className="w-full border rounded-md p-2 text-sm min-h-[100px]"
                    placeholder="Type your response..."
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <div className="space-x-2">
                    <button className="px-3 py-1 border rounded-md text-sm font-medium hover:bg-gray-50">
                      Mark as Resolved
                    </button>
                    <button className="px-3 py-1 border rounded-md text-sm font-medium hover:bg-gray-50">
                      Assign to Me
                    </button>
                  </div>
                  <button className="px-4 py-2 btn text-white rounded-md hover:bg-blue-700">
                    Send Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default SupportTable
