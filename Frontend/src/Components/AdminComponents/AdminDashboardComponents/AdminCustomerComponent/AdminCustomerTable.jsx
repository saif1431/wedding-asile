"use client";
import React, { useState } from "react";
import { Search, Eye, MessageSquare, Ban, Edit } from "lucide-react";
import { TbRadioactiveFilled } from "react-icons/tb";
import { ActivationDialog } from "../../AdminVendorComponent/ActivationDialog";


const customers = [
  {
    id: "C001",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+44 7123 456789",
    weddingDate: "2024-06-15",
    totalBookings: 3,
    totalSpent: "£2,350",
    status: "active",
    joinDate: "2024-01-15",
    lastActive: "2024-01-20",
  },
  {
    id: "C002",
    name: "Ahmed Khan",
    email: "ahmed.khan@email.com",
    phone: "+44 7234 567890",
    weddingDate: "2024-07-22",
    totalBookings: 2,
    totalSpent: "£1,800",
    status: "active",
    joinDate: "2024-02-10",
    lastActive: "2024-01-19",
  },
  {
    id: "C003",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+44 7345 678901",
    weddingDate: "2024-05-30",
    totalBookings: 4,
    totalSpent: "£3,200",
    status: "premium",
    joinDate: "2023-12-05",
    lastActive: "2024-01-21",
  },
  {
    id: "C004",
    name: "James Wilson",
    email: "james.wilson@email.com",
    phone: "+44 7456 789012",
    weddingDate: "2024-08-10",
    totalBookings: 1,
    totalSpent: "£950",
    status: "inactive",
    joinDate: "2024-01-08",
    lastActive: "2024-01-10",
  },
];

 function AdminCustomerTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
 const [isActivationDialogOpen, setIsActivationDialogOpen] = useState(false);
  

const handleStatusChange = (customer, newStatus) => {
  // Here you would typically make an API call to update the status
  console.log(`Changed status for ${customer.name} to ${newStatus}`);
  setIsActivationDialogOpen(false);
  // In a real app, you would update your customers state here
};

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "premium":
        return "bg-purple-100 text-purple-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Customer Management</h1>
        <p className="text-gray-500">Manage customer accounts and relationships</p>
      </div>

  

      <div className="border border-gray-300 rounded-lg bg-white shadow-sm p-6">
        <div className="mb-6 flex items-center gap-4 flex-wrap">
         
          <div className="flex items-center border border-gray-300 rounded-lg p-2 w-fit">
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border-none outline-none rounded w-full max-w-md"
            />
                        <Search className="h-4 w-4 text-gray-400 mr-2" />

          </div>
              <div>
            <select className="py-4 px-6 border rounded-lg border-gray-300 " name="" id="">
              <option value="">Total Spent</option>
              <option value="">£ 878</option>
              <option value="">£ 843</option>
              <option value="">£ 8748</option>
              <option value="">£ 728</option>
              <option value="">£ 248</option>
              {/* <option value="">Other</option> */}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Wedding Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bookings
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                        {customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium">{customer.name}</div>
                        <div className="text-sm text-gray-500">{customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.weddingDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.totalBookings}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.totalSpent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(customer.status)}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        className="p-1 text-blue-600 hover:text-blue-800"
                        onClick={() => {
                          setSelectedCustomer(customer);
                          setIsViewDialogOpen(true);
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <ActivationDialog  
  isOpen={isActivationDialogOpen}
  onClose={() => setIsActivationDialogOpen(false)}
  vendor={editingCustomer} // Changed from vendor to editingCustomer
  onStatusChange={handleStatusChange}
/>
                    <button
  className="p-1 text-blue-600 hover:text-blue-800"
  onClick={() => {
    setEditingCustomer(customer); // Changed from setEditingVendor
    setIsActivationDialogOpen(true);
  }}
>
  <TbRadioactiveFilled className="h-4 w-4" />
</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Customer Dialog */}
      {isViewDialogOpen && selectedCustomer && (
        <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white border border-gray-400 shadow-lg rounded-lg p-6 w-full max-w-4xl">
            <div className="mb-4">
              <h2 className="text-xl font-bold">Customer Details - {selectedCustomer.name}</h2>
              <p className="text-gray-500">Complete customer profile and booking history</p>
            </div>
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center text-lg">
                      {selectedCustomer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{selectedCustomer.name}</h3>
                      <p className="text-gray-500">{selectedCustomer.email}</p>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedCustomer.status)}`}>
                        {selectedCustomer.status}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Phone:</strong> {selectedCustomer.phone}
                    </div>
                    <div>
                      <strong>Wedding Date:</strong> {selectedCustomer.weddingDate}
                    </div>
                    <div>
                      <strong>Join Date:</strong> {selectedCustomer.joinDate}
                    </div>
                    <div>
                      <strong>Last Active:</strong> {selectedCustomer.lastActive}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold">{selectedCustomer.totalBookings}</div>
                      <div className="text-sm text-gray-500">Total Bookings</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold">{selectedCustomer.totalSpent}</div>
                      <div className="text-sm text-gray-500">Total Spent</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Recent Bookings</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Wedding Photography</span>
                        <span>£1,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bridal Makeup</span>
                        <span>£350</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  className="px-4 text-white  btn py-2 border rounded hover:bg-gray-100"
                  onClick={() => {
                    setEditingCustomer(selectedCustomer);
                    setIsViewDialogOpen(false);
                    setIsEditDialogOpen(true);
                  }}
                >
                  Edit Customer
                </button>
                
                <button
                  className="px-4   btn2 py-2 border rounded hover:bg-gray-100"
                  onClick={() => setIsViewDialogOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Customer Dialog */}
      {isEditDialogOpen && editingCustomer && (
        <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white border border-gray-400 shadow-lg rounded-lg p-6 w-full max-w-2xl">
            <div className="mb-4">
              <h2 className="text-xl font-bold">Edit Customer - {editingCustomer.name}</h2>
              <p className="text-gray-500">Update customer information</p>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    defaultValue={editingCustomer.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded"
                    defaultValue={editingCustomer.email}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    defaultValue={editingCustomer.phone}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Wedding Date</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded"
                    defaultValue={editingCustomer.weddingDate}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  className="w-full p-2 border rounded"
                  defaultValue={editingCustomer.status}
                >
                  <option value="active">Active</option>
                  <option value="premium">Premium</option>
                  <option value="inactive">Inactive</option>
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
                  className="px-4 py-2 btn text-white rounded "
                  onClick={() => setIsEditDialogOpen(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

         <ActivationDialog  
        isOpen={isActivationDialogOpen}
        onClose={() => setIsActivationDialogOpen(false)}
       
        onStatusChange={handleStatusChange}
      />
    </div>
  );
} 


export default AdminCustomerTable;