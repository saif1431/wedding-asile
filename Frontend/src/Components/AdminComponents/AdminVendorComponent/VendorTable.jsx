"use client";
import React, { useState } from "react";
import { Search, Plus, Eye, Edit, CheckCircle, XCircle } from "lucide-react";

const vendors = [
  {
    id: "V001",
    name: "Premium Photography Co.",
    email: "info@premiumphotography.com",
    phone: "+44 7123 456789",
    category: "Photography",
    status: "active",
    rating: 4.9,
    bookings: 45,
    revenue: "£12,500",
    joinDate: "2023-01-15",
    verified: true,
  },
  {
    id: "V002",
    name: "Elite Videography",
    email: "contact@elitevideo.com",
    phone: "+44 7234 567890",
    category: "Videography",
    status: "pending",
    rating: 4.8,
    bookings: 38,
    revenue: "£9,800",
    joinDate: "2023-02-20",
    verified: false,
  },
  {
    id: "V003",
    name: "Bridal Beauty Studio",
    email: "hello@bridalbeauty.com",
    phone: "+44 7345 678901",
    category: "Makeup & Beauty",
    status: "active",
    rating: 4.9,
    bookings: 52,
    revenue: "£8,200",
    joinDate: "2023-01-10",
    verified: true,
  },
  {
    id: "V004",
    name: "Royal Catering",
    email: "orders@royalcatering.com",
    phone: "+44 7456 789012",
    category: "Catering",
    status: "suspended",
    rating: 4.7,
    bookings: 28,
    revenue: "£15,600",
    joinDate: "2023-03-05",
    verified: true,
  },
];

export function   VendorsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [editingVendor, setEditingVendor] = useState(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const filteredVendors = vendors.filter(
    (vendor) =>
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Vendor Management</h1>
          <p className="text-gray-500">Manage wedding service providers</p>
        </div>
        <button
          className="flex items-center btn text-white px-4 py-2 rounded "
          onClick={() => setIsAddDialogOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Vendor
        </button>
      </div>

      {/* Add Vendor Dialog */}
      {isAddDialogOpen && (
        <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white shadow-lg border border-gray-400 rounded-lg p-6 w-full max-w-2xl">
            <div className="mb-4">
              <h2 className="text-xl font-bold">Add New Vendor</h2>
              <p className="text-gray-500">Create a new vendor profile</p>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Business Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Enter business name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select className="w-full p-2 border rounded">
                    <option value="">Select category</option>
                    <option value="photography">Photography</option>
                    <option value="videography">Videography</option>
                    <option value="makeup">Makeup & Beauty</option>
                    <option value="catering">Catering</option>
                    <option value="decoration">Decoration</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  className="w-full p-2 border rounded"
                  placeholder="Enter business description"
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  className="px-4 py-2 border btn2 rounded hover:bg-gray-100"
                  onClick={() => setIsAddDialogOpen(false)}
                >
                  Cancel
                </button>
                <button className="px-4 py-2 btn text-white rounded ">
                  Create Vendor
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold">All Vendors</h2>
          <p className="text-gray-500">Manage and monitor vendor accounts</p>
          <div className="flex items-center mt-4 bg-white border border-gray-300  rounded-lg p-2 w-fit">
            
            <input
              type="text"
              placeholder="Search vendors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border-none outline-none rounded w-full max-w-md"
            />
            <Search className="h-4 w-4 text-gray-400 mr-2" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vendor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bookings
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredVendors.map((vendor) => (
                <tr key={vendor.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                        {vendor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium">{vendor.name}</div>
                        <div className="text-sm text-gray-500">{vendor.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vendor.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(vendor.status)}`}>
                      {vendor.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ⭐ {vendor.rating}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vendor.bookings}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vendor.revenue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        className="p-1 text-blue-600 hover:text-blue-800"
                        onClick={() => {
                          setSelectedVendor(vendor);
                          setIsViewDialogOpen(true);
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        className="p-1 text-gray-600 hover:text-gray-800"
                        onClick={() => {
                          setEditingVendor(vendor);
                          setIsEditDialogOpen(true);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      {vendor.status === "pending" && (
                        <>
                          <button className="p-1 text-green-600 hover:text-green-800">
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800">
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

      {/* View Vendor Dialog */}
      {isViewDialogOpen && selectedVendor && (
        <div className="fixed inset-0  bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white border border-gray-400 shadow-lg      rounded-lg p-6 w-full max-w-4xl">
            <div className="mb-4">
              <h2 className="text-xl font-bold">Vendor Details - {selectedVendor.name}</h2>
              <p className="text-gray-500">Complete vendor information and statistics</p>
            </div>
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center text-lg">
                      {selectedVendor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{selectedVendor.name}</h3>
                      <p className="text-gray-500">{selectedVendor.category}</p>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedVendor.status)}`}>
                        {selectedVendor.status}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Email:</strong> {selectedVendor.email}
                    </div>
                    <div>
                      <strong>Phone:</strong> {selectedVendor.phone}
                    </div>
                    <div>
                      <strong>Join Date:</strong> {selectedVendor.joinDate}
                    </div>
                    <div>
                      <strong>Verified:</strong> {selectedVendor.verified ? "Yes" : "No"}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold">⭐ {selectedVendor.rating}</div>
                      <div className="text-sm text-gray-500">Rating</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold">{selectedVendor.bookings}</div>
                      <div className="text-sm text-gray-500">Bookings</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold">{selectedVendor.revenue}</div>
                      <div className="text-sm text-gray-500">Revenue</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold">4.2</div>
                      <div className="text-sm text-gray-500">Avg Response</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  className="px-4 py-2 btn text-white border rounded hover:bg-gray-100"
                  onClick={() => {
                    setEditingVendor(selectedVendor);
                    setIsViewDialogOpen(false);
                    setIsEditDialogOpen(true);
                  }}
                >
                  Edit Vendor
                </button>
                {selectedVendor.status === "pending" && (
                  <>
                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                      Approve
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                      Reject
                    </button>
                  </>
                )}
                <button
                  className="px-4 btn2 py-2 border rounded hover:bg-gray-100"
                  onClick={() => setIsViewDialogOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Vendor Dialog */}
      {isEditDialogOpen && editingVendor && (
        <div className="fixed inset-0  bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white border border-gray-400 shadow-lg rounded-2xl p-6 w-full max-w-2xl">
            <div className="mb-4">
              <h2 className="text-xl font-bold">Edit Vendor - {editingVendor.name}</h2>
              <p className="text-gray-500">Update vendor information</p>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Business Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    defaultValue={editingVendor.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded"
                    defaultValue={editingVendor.email}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    defaultValue={editingVendor.phone}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select
                    className="w-full p-2 border rounded"
                    defaultValue={editingVendor.category.toLowerCase()}
                  >
                    <option value="photography">Photography</option>
                    <option value="videography">Videography</option>
                    <option value="makeup">Makeup & Beauty</option>
                    <option value="catering">Catering</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select className="w-full p-2 border rounded" defaultValue={editingVendor.status}>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  className="px-4 btn2 py-2 border rounded hover:bg-gray-100"
                  onClick={() => setIsEditDialogOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 btn py-2 text-white rounded "
                  onClick={() => setIsEditDialogOpen(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}