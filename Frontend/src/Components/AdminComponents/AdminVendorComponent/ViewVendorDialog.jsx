      "use client";
import { CheckCircle, XCircle } from "lucide-react";

export const ViewVendorDialog = ({ 
  vendor, 
  isOpen, 
  onClose, 
  onEdit,
  onApprove,
  onReject 
}) => {
  if (!isOpen || !vendor) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "suspended": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white border border-gray-400 shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <div className="mb-4">
         <div className="flex items-center justify-between lg:flex-row flex-col">
          <div>
             <h2 className="text-xl font-bold">Vendor Details - {vendor.name}</h2>
          <p className="text-gray-500">Complete vendor information and statistics</p>
          </div>
          <div>
            <select className="border border-gray-300 py-2 px-6 rounded-lg" name="" id="">
              <option value="">Photographer</option>
              <option value="">Videographer</option>
              <option value="">Both</option>
            </select>
          </div>
         </div>
        </div>
        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center text-lg">
                  {vendor.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{vendor.name}</h3>
                  <p className="text-gray-500">{vendor.category}</p>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(vendor.status)}`}>
                    {vendor.status}
                  </span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div><strong>Email:</strong> {vendor.email}</div>
                <div><strong>Phone:</strong> {vendor.phone}</div>
                <div><strong>Join Date:</strong> {vendor.joinDate}</div>
                <div><strong>Verified:</strong> {vendor.verified ? "Yes" : "No"}</div>
              </div>
              
              {/* Vendor Services Section */}
              <div className="mt-4">
                <h4 className="font-medium mb-2">Services Offered</h4>
                <div className="space-y-2">
                  {vendor.services?.map((service, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-600">{service.description}</div>
                      <div className="text-sm mt-1">Price: {service.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">⭐ {vendor.rating}</div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">{vendor.bookings}</div>
                  <div className="text-sm text-gray-500">Bookings</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold">{vendor.revenue}</div>
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
              onClick={onEdit}
            >
              Activate
            </button>
            {vendor.status === "pending" && (
              <>
                <button 
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  onClick={onApprove}
                >
                  Approve
                </button>
                <button 
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={onReject}
                >
                  Reject
                </button>
              </>
            )}
            <button
              className="px-4 btn2 py-2 border rounded hover:bg-gray-100"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};