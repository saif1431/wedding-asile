"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

export const WarningDialog = ({ 
  isOpen, 
  onClose, 
  vendor,
  onSendWarning 
}) => {
  const [warningMessage, setWarningMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendWarning(vendor, warningMessage);
    setWarningMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center border-b border-gray-300 p-4">
          <h3 className="text-lg font-semibold">Warning Message</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <p className="font-medium">Vendor: <span className="font-normal">{vendor?.name}</span></p>
            <p className="font-medium">ID: <span className="font-normal">{vendor?.id}</span></p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="warningMessage" className="block text-sm font-medium text-gray-700 mb-1">
                Warning Message
              </label>
              <textarea
                id="warningMessage"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none "
                placeholder="Enter warning message..."
                value={warningMessage}
                onChange={(e) => setWarningMessage(e.target.value)}
                required
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 btn2 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white btn focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Send Warning
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};