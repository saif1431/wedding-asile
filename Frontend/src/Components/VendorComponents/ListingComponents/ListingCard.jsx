import React, { useState } from 'react';

function ListingCard({ listing, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(listing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value
    });
  };

  const handleSave = () => {
    onUpdate(editedData);
    setIsEditing(false);
  };

  return (
    <div className='bg-[#F0EBE8] max-w-xs text-center rounded-lg overflow-hidden shadow-md'>
      <img 
        src={listing.image} 
        alt={listing.title} 
        className='w-full h-48 object-cover'
      />
      <div className='p-4'>
        {isEditing ? (
          <>
            <input
              type="text"
              name="title"
              value={editedData.title}
              onChange={handleInputChange}
              className="w-full mb-2 p-1 border rounded"
            />
            <input
              type="text"
              name="price"
              value={editedData.price}
              onChange={handleInputChange}
              className="w-full mb-2 p-1 border rounded"
            />
          </>
        ) : (
          <>
            <h3 className='text-lg font-semibold'>{listing.title}</h3>
            <p className='mt-3 text-2xl font-bold'>{listing.price}</p>
          </>
        )}
        
        <ul className='mt-6 space-y-2'>
          {listing.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        
        <div className='flex flex-col justify-center gap-5 items-center mt-6'>
          {isEditing ? (
            <button 
              onClick={handleSave}
              className='btn py-2 px-6 rounded-full text-lg text-white bg-green-600 hover:bg-green-700 transition'
            >
              Save
            </button>
          ) : (
            <button 
              onClick={() => setIsEditing(true)}
              className='btn py-2 px-6 rounded-full text-lg text-white bg-blue-600 hover:bg-blue-700 transition'
            >
              Edit
            </button>
          )}
          <button 
            onClick={() => onDelete(listing.id)}
            className='text-red-600 hover:text-red-800 transition'
          >
            Delete
          </button>
        </div>
      </div>
      <p className={`text-start p-2 ${
        listing.status === 'published' ? 'text-green-600' : 'text-yellow-600'
      }`}>
        {listing.status}
      </p>
    </div>
  );
}

export default ListingCard;