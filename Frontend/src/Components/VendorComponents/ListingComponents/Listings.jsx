import React, { useState } from 'react';
import ListingCard from './ListingCard';
import CreateListing from './CreateListing';

function Listings() {
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "Cherish Every Wedding Day Moment",
      price: "£2800",
      image: "https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2Fec59ce45-a72c-47a3-a70c-f55a58757976pexels-rohit-photography-751545565-19569598.jpg&w=640&q=75",
      features: ["Max hours 8", "Experience 2"],
      status: "published"
    },
    {
      id: 2,
      title: "Premium Wedding Photography",
      price: "£3500",
      image: "https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2F530b3960-61f3-4eea-a082-1cf2076909d7pexels-ankur-kumar-2067233-3872626.jpg&w=640&q=75",
      features: ["Max hours 10", "Experience 5"],
      status: "published"
    }
  ]);

  const [showFormOnly, setShowFormOnly] = useState(false);
  const [newListing, setNewListing] = useState({
    title: "",
    price: "",
    image: "",
    features: ["", ""],
    status: "draft"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewListing({
      ...newListing,
      [name]: value
    });
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...newListing.features];
    newFeatures[index] = value;
    setNewListing({
      ...newListing,
      features: newFeatures
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const listing = {
      ...newListing,
      id: listings.length + 1
    };
    setListings([...listings, listing]);
    setNewListing({
      title: "",
      price: "",
      image: "",
      features: ["", ""],
      status: "draft"
    });
    setShowFormOnly(false);
  };

  const deleteListing = (id) => {
    setListings(listings.filter(listing => listing.id !== id));
  };

  const updateListing = (updatedListing) => {
    setListings(listings.map(listing => 
      listing.id === updatedListing.id ? updatedListing : listing
    ));
  };

  return (
    <div className='bg-white p-4'>
      {showFormOnly ? (
        /* Form Only View */
        <div className="      ">
<CreateListing/>
        </div>
      ) : (
        /* Normal View with Listings */
        <>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl font-semibold'>My Listing</h2>
            <button 
              onClick={() => setShowFormOnly(true)}
              className='btn py-3 px-4 text-white text-lg rounded-full bg-blue-600 hover:bg-blue-700 transition'
            >
              Add New Listing +
            </button>
          </div>
          <hr className='border-gray-400' />
          <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {listings.map((listing) => (
              <ListingCard 
                key={listing.id}
                listing={listing}
                onDelete={deleteListing}
                onUpdate={updateListing}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Listings;      