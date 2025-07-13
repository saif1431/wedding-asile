import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme CSS file

const CallAvailabilityTable = () => {
  const [locations, setLocations] = useState([
    { id: 1, date: '2025-07-15', status: 'Active' },
    { id: 2, date: '2025-07-16', status: 'Active' }
  ]);
  
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [status, setStatus] = useState('Active');

  const handleAddLocation = () => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      setLocations([
        ...locations,
        {
          id: locations.length + 1,
          date: formattedDate,
          status: status
        }
      ]);
      setShowModal(false);
    }
  };

  const handleDelete = (id) => {
    setLocations(locations.filter(location => location.id !== id));
  };

  const handleStatusChange = (id) => {
    setLocations(locations.map(location => 
      location.id === id 
        ? { ...location, status: location.status === 'Active' ? 'Inactive' : 'Active' } 
        : location
    ));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-6 bg-white overflow-y-auto rounded-lg shadow">
      <div className='flex items-end gap-2 flex-col justify-end mt-6 mb-6'>
            <p className='text-sm text-gray-600'>If you’re not available on particular days, please update accordingly</p>
        <button 
          onClick={() => setShowModal(true)}
          className='btn py-2 px-4 text-lg rounded-full text-white bg-blue-500 hover:bg-blue-600'
        >
          Add +
        </button>
      </div>

      <table className="w-full mb-6 overflow-y-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Active</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.id} className="border-b">
              <td className="px-4 py-3">{location.date}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  location.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {location.status === 'Active' ? 'Yes' : 'No'}
                </span>
              </td>
              <td className="px-4 py-3 flex gap-2">
            
                <button
                  onClick={() => handleDelete(location.id)}
                  className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0  bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Date</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                <Calendar
                  date={selectedDate}
                  onChange={handleDateSelect}
                  minDate={new Date()}
                  className="w-full border rounded-lg border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full p-2 border rounded-lg border-gray-300"
                >
                  <option value="Active">Active (Yes)</option>
                  <option value="Inactive">Inactive (No)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => {
                  setShowModal(false);
                }}
                className="px-4 py-2 btn2 text-black rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddLocation}
                className="px-4 py-2 btn text-white rounded"
                disabled={!selectedDate}
              >
                Add Date
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallAvailabilityTable;
