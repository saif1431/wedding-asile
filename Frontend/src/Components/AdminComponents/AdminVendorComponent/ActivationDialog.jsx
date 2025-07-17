"use client";
import React from "react";
import { X } from "lucide-react";
import { TbRadioactiveFilled } from "react-icons/tb";

export const ActivationDialog = ({ 
  isOpen, 
  onClose, 
  vendor, // This could be renamed to 'user' or 'customer' if you prefer
  onStatusChange 
}) => {
  if (!isOpen) return null;

  const currentStatus = vendor?.status || 'inactive';
  const isActive = currentStatus === 'active';

  const handleStatusChange = (newStatus) => {
    onStatusChange(vendor, newStatus);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center border-b border-gray-300 p-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <TbRadioactiveFilled className={`h-5 w-5 ${isActive ? 'text-green-500' : 'text-red-500'}`} />
            {isActive ? 'Deactivate Account' : 'Activate Account'}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <p className="font-medium mb-1">User Information:</p>
            <div className="bg-gray-50 p-3 rounded">
              <p><span className="font-medium">Name:</span> {vendor?.name}</p>
              <p><span className="font-medium">ID:</span> {vendor?.id}</p>
              <p><span className="font-medium">Current Status:</span> 
                <span className={`ml-1 px-2 py-1 text-xs rounded-full ${
                  isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {currentStatus}
                </span>
              </p>
            </div>
          </div>
          
          <p className="mb-4 text-gray-600">
            {isActive 
              ? 'Are you sure you want to deactivate this account?'
              : 'Are you sure you want to activate this account?'}
          </p>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleStatusChange(isActive ? 'inactive' : 'active')}
              className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                isActive 
                  ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500' 
                  : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
              } focus:outline-none focus:ring-2 focus:ring-offset-2`}
            >
              {isActive ? 'Deactivate' : 'Activate'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};