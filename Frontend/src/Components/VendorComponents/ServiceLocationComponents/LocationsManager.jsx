import React, { useState, useEffect } from 'react';

const LocationsManager = () => {
  const [locations, setLocations] = useState([
    { id: 1, name: 'Bradford', status: 'Active' },
    { id: 2, name: 'Bristol', status: 'Active' }
  ]);
  
  const [showModal, setShowModal] = useState(false);
  const [newLocation, setNewLocation] = useState({
    name: '',
    country: '',
    city: ''
  });

  // State for search functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Sample data for dropdowns
  const countries = ['United Kingdom', 'United States', 'Canada', 'Australia'];
  const citiesByCountry = {
    'United Kingdom': ['London', 'Manchester', 'Birmingham', 'Leeds', 'Bradford', 'Bristol'],
    'United States': ['New York', 'Los Angeles', 'Chicago', 'Houston'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth']
  };

  // Filter cities based on search term
  useEffect(() => {
    if (newLocation.country) {
      const filtered = citiesByCountry[newLocation.country].filter(city =>
        city.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCities(filtered);
    }
  }, [searchTerm, newLocation.country]);

  const handleAddLocation = () => {
    if (newLocation.city) {
      setLocations([
        ...locations,
        {
          id: locations.length + 1,
          name: newLocation.city,
          status: 'Active'
        }
      ]);
      setNewLocation({ name: '', country: '', city: '' });
      setSearchTerm('');
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

  const handleCitySelect = (city) => {
    setNewLocation({...newLocation, city});
    setSearchTerm(city);
    setShowDropdown(false);
  };

  return (
    <div className="p-6 bg-white overflow-y-auto  rounded-lg shadow">
      <div className='flex items-center justify-end mt-6 mb-6'>
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
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.id} className="border-b">
              <td className="px-4 py-3">{location.name}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  location.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {location.status}
                </span>
              </td>
              <td className="px-4 py-3 flex gap-2">
                <button
                  onClick={() => handleStatusChange(location.id)}
                  className={`px-3 py-1 rounded text-sm ${
                    location.status === 'Active' 
                      ? 'bg-blue-500 hover:bg-blue-600' 
                      : 'bg-gray-500 hover:bg-gray-600'
                  } text-white`}
                >
                  {location.status === 'Active' ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => handleDelete(location.id)}
                  className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm"
                >
                  Delete
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
            <h2 className="text-xl font-bold mb-4">Add New Location</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <select
                  value={newLocation.country}
                  onChange={(e) => {
                    setNewLocation({
                      ...newLocation, 
                      country: e.target.value,
                      city: '' // Reset city when country changes
                    });
                    setSearchTerm('');
                  }}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select City</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Type to search cities"
                  className="w-full p-2 border rounded"
                  disabled={!newLocation.country}
                />
                {showDropdown && newLocation.country && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                    {filteredCities.length > 0 ? (
                      filteredCities.map((city) => (
                        <div
                          key={city}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleCitySelect(city)}
                        >
                          {city}
                        </div>
                      ))
                    ) : (
                      <div className="p-2 text-gray-500">No cities found</div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => {
                  setShowModal(false);
                  setSearchTerm('');
                  setShowDropdown(false);
                }}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddLocation}
                className="px-4 py-2 btn  text-white rounded"
                disabled={!newLocation.city}
              >
                Add Location
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationsManager;