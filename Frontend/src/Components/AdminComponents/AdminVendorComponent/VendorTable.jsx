"use client";
import React, { useState } from "react";
import { Search, Plus, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { ViewVendorDialog } from "./ViewVendorDialog";
import { AddVendorDialog } from "./AddVendorDialog";
import { TiWarningOutline } from "react-icons/ti";
import { WarningDialog } from "./WarningDialog";
import { TbRadioactiveFilled } from "react-icons/tb";
import { ActivationDialog } from "./ActivationDialog";

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
  // Add more vendors to test pagination (total should be more than 10)
  {
    id: "V005",
    name: "Floral Designs",
    email: "contact@floraldesigns.com",
    phone: "+44 7567 890123",
    category: "Florist",
    status: "active",
    rating: 4.8,
    bookings: 32,
    revenue: "£7,800",
    joinDate: "2023-02-15",
    verified: true,
  },
  {
    id: "V006",
    name: "Elegant Venues",
    email: "info@elegantvenues.com",
    phone: "+44 7678 901234",
    category: "Venue",
    status: "active",
    rating: 4.9,
    bookings: 48,
    revenue: "£22,000",
    joinDate: "2023-01-05",
    verified: true,
  },
  {
    id: "V007",
    name: "Sweet Harmony Cakes",
    email: "orders@sweetharmony.com",
    phone: "+44 7789 012345",
    category: "Bakery",
    status: "active",
    rating: 4.7,
    bookings: 36,
    revenue: "£9,500",
    joinDate: "2023-03-10",
    verified: true,
  },
  {
    id: "V008",
    name: "Luxury Transport",
    email: "bookings@luxurytransport.com",
    phone: "+44 7890 123456",
    category: "Transportation",
    status: "pending",
    rating: 4.6,
    bookings: 24,
    revenue: "£6,200",
    joinDate: "2023-04-01",
    verified: false,
  },
  {
    id: "V009",
    name: "Dream Weddings Planning",
    email: "info@dreamweddings.com",
    phone: "+44 7901 234567",
    category: "Planning",
    status: "active",
    rating: 4.9,
    bookings: 56,
    revenue: "£18,300",
    joinDate: "2023-01-20",
    verified: true,
  },
  {
    id: "V010",
    name: "DJ Master Sounds",
    email: "events@djmastersounds.com",
    phone: "+44 7012 345678",
    category: "Entertainment",
    status: "active",
    rating: 4.5,
    bookings: 42,
    revenue: "£10,700",
    joinDate: "2023-02-28",
    verified: true,
  },
  {
    id: "V011",
    name: "Bridal Fashion House",
    email: "appointments@bridalfashion.com",
    phone: "+44 7123 456780",
    category: "Attire",
    status: "active",
    rating: 4.8,
    bookings: 39,
    revenue: "£14,200",
    joinDate: "2023-03-15",
    verified: true,
  },
];

export function VendorsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  
  const [editingVendor, setEditingVendor] = useState(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isWarningDialogOpen, setIsWarningDialogOpen] = useState(false);
  const [isActivationDialogOpen, setIsActivationDialogOpen] = useState(false);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [vendorsPerPage] = useState(10);

  const handleStatusChange = (vendor, newStatus) => {
    setIsActivationDialogOpen(true);
    setSelectedVendor(vendor);
  };

  const handleSendWarning = (vendor, message) => {
    console.log(`Warning sent to ${vendor.name}: ${message}`);
  };

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastVendor = currentPage * vendorsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
  const currentVendors = filteredVendors.slice(indexOfFirstVendor, indexOfLastVendor);
  const totalPages = Math.ceil(filteredVendors.length / vendorsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  const getStatusColor = (status) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "suspended": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

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
 
      </div>

      {/* Add Vendor Dialog */}
      <AddVendorDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onCreate={() => {
          setIsAddDialogOpen(false);
        }}
      />

      {/* Main Table */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6 flex items-center gap-12 flex-wrap" >
          <div className="flex items-center  bg-white border border-gray-300 rounded-lg p-2 w-fit">
            <input
              type="text"
              placeholder="Search vendors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border-none outline-none rounded w-full max-w-md"
            />
            <Search className="h-4 w-4 text-gray-400 mr-2" />
          </div>

          <div>
            <select className="py-4 px-6 border border-gray-300 rounded" name="" id="">
              <option value="">Photographer</option>
              <option value="">Videographer</option>
              <option value="">Other</option>
            </select>
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
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th> 
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bookings
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joining Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentVendors.map((vendor) => (
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
                    {vendor.phone}
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
                    {vendor.bookings}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ⭐ {vendor.rating}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vendor.revenue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vendor.joinDate}
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
                        className="p-1 text-blue-600 hover:text-blue-800"
                        onClick={() => {
                          setEditingVendor(vendor);
                          setIsActivationDialogOpen(true);
                        }}
                      >
                        <TbRadioactiveFilled className="h-4 w-4" />
                      </button>
                      <button
                        className="p-1 text-gray-600 hover:text-gray-800"
                        onClick={() => {
                          setEditingVendor(vendor);
                          setIsWarningDialogOpen(true);
                        }}
                      >
                        <TiWarningOutline className="h-4 w-4 text-yellow-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          {filteredVendors.length > vendorsPerPage && (
            <div className="flex items-center justify-between mt-4 px-2">
              <div className="text-sm text-gray-500">
                Showing {indexOfFirstVendor + 1}-{Math.min(indexOfLastVendor, filteredVendors.length)} of {filteredVendors.length} vendors
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    {number}
                  </button>
                ))}
                
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
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
          setIsViewDialogOpen(false);
        }}
        onReject={() => {
          setIsViewDialogOpen(false);
        }}
      />
      
      <ActivationDialog
        isOpen={isActivationDialogOpen}
        onClose={() => setIsActivationDialogOpen(false)}
        vendor={editingVendor}
        onStatusChange={handleStatusChange}
      />
      
      <WarningDialog
        isOpen={isWarningDialogOpen}
        onClose={() => setIsWarningDialogOpen(false)}
        vendor={editingVendor}
        onSendWarning={handleSendWarning}
      />

      <AddVendorDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onAdd={(newVendor) => {
          setIsAddDialogOpen(false);
        }}
      />
    </div>
  );
}