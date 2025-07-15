import React, { useState } from "react";

const initialProfile = {
  name: "Admin User",
  email: "admin@example.com",
  phone: "0300-1234567",
  role: "Administrator",
};

export default function EditProfileProfile() {
  const [profile, setProfile] = useState(initialProfile);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would send data to backend here
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-8 mt-8">
      <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full border  border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={profile.role}
            disabled
            className="w-full border border-gray-300   rounded px-3 py-2 bg-gray-100 text-gray-500"
          />
        </div>
        <button
          type="submit"
          className="btn       text-white px-6 py-2 rounded hover:bg-primary-dark transition"
        >
          Save Changes
        </button>
        {success && (
          <div className="text-green-600 font-medium mt-2">
            Profile updated successfully!
          </div>
        )}
      </form>


    </div>
  )
}