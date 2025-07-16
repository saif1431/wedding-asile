"use client";
import { Plus } from "lucide-react";

export const AddVendorDialog = ({ isOpen, onClose, onCreate }) => {
  if (!isOpen) return null;

  return (
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
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              className="px-4 py-2 btn text-white rounded"
              onClick={onCreate}
            >
              Create Vendor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};