"use client";
import React, { useState } from "react";
import { Search, Plus, Eye, Edit, CheckCircle, XCircle } from "lucide-react";
import { ViewVendorDialog } from "./ViewVendorDialog";
import { AddVendorDialog } from "./AddVendorDialog";

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

export function VendorsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [editingVendor, setEditingVendor] = useState(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "suspended": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Add a new column for services in the table
  const handleViewServices = (vendor) => {
    setSelectedVendor(vendor);
    setIsViewDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header and Add button */}
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Vendor Management</h1>
          <p className="text-gray-500">Manage wedding service providers</p>
        </div>
        <button
          className="flex items-center btn text-white px-4 py-2 rounded"
          onClick={() => setIsAddDialogOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Vendor
        </button>
      </div>

      {/* Add Vendor Dialog */}
      <AddVendorDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onCreate={() => {
          // Handle create logic
          setIsAddDialogOpen(false);
        }}
      />

      {/* Main Table */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold">All Vendors</h2>
          <p className="text-gray-500">Manage and monitor vendor accounts</p>
          <div className="flex items-center mt-4 bg-white border border-gray-300 rounded-lg p-2 w-fit">
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
                  Services
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
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
                        {vendor.name.split(" ").map((n) => n[0]).join("")}
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
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleViewServices(vendor)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View Services ({vendor.services?.length || 0})
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ⭐ {vendor.rating}
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
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Vendor Dialog */}
      <ViewVendorDialog
        vendor={selectedVendor}
        isOpen={isViewDialogOpen}
        onClose={() => setIsViewDialogOpen(false)}
        onEdit={() => {
          setEditingVendor(selectedVendor);
          setIsViewDialogOpen(false);
          setIsEditDialogOpen(true);
        }}
        onApprove={() => {
          // Handle approve logic
          setIsViewDialogOpen(false);
        }}
        onReject={() => {
          // Handle reject logic
          setIsViewDialogOpen(false);
        }}
      />

      {/* Edit Vendor Dialog */}
      {/* ... (keep your existing edit dialog implementation) ... */}
    </div>

      )
    }