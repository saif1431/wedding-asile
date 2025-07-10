import React from 'react';

const PhotographyPackages = () => {
  const packages = [
    {
      id: 1,
      image:'https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2F2c57c77b-0656-4dbb-bc0a-545a98535068977901c5-2144-49ef-9744-30e8c3402306CR2A3401-2.jpg&w=750&q=100',
      title: "Half Day Photography",
      coverage: "4 hours",
      delivery: "4 weeks",
      teamSize: "1",
      service: "Photography",
      price: "£499"
    },
    {
      id: 2,
       image:'https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2F136f3d29-a2b1-4fda-938a-beeb729fe54cpackage-background-img&w=750&q=100',
      title: "Full Day Photography",
      coverage: "8 hours",
      delivery: "6 weeks",
      teamSize: "1",
      service: "Photography",
      price: "£899"
    },
    {
      id: 3,
       image:'https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2F17812b5d-7de9-4f8f-a317-f01e01fbe14f98bf8118-c5e0-4e04-8ebb-f4609483e9c1Ria-and-Anthony-12-04-24-1224-1713961964-76.jpg&w=750&q=100',
      title: "Premium Photography",
      coverage: "10 hours",
      delivery: "4 weeks",
      teamSize: "2",
      service: "Photography + Album",
      price: "£1,299"
    },
    {
      id: 4,
       image:'https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2F01907b89-8bfc-4161-945b-f87e53503949bb53aea7-7ccd-4082-8e73-a1055ad45765Pippa-and-Miachel-04-06-24-294-1722247385-53.jpg&w=750&q=100',
      title: "Basic Videography",
      coverage: "6 hours",
      delivery: "8 weeks",
      teamSize: "1",
      service: "Videography",
      price: "£799"
    },
  ];

  return (
    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
      {packages.map((pkg) => (
        <div key={pkg.id} className="bg-white rounded-2xl  overflow-hidden border border-gray-200 duration-300">
          <div className="">
            <img className='h-42 hover:scale-110 transition duration-500 w-full object-cover ' src={pkg.image} alt="" />
          <div className='p-5'>
              <h3 className="text-lg text-center font-semibold text-gray-800 mb-2">{pkg.title}</h3>
              <p className="text-2xl mt-8  text-center font-bold text-gray-800">{pkg.price}</p>
            <div className="space-y-3 mt-4">
              <div className="flex "> 
                  <div>
                        <li>Coverage:{pkg.coverage} </li>
                        <li>Delivery:{pkg.delivery} </li>
                        <li>Team Size:{pkg.teamSize} </li>
                        <li>Service:{pkg.service} </li>
                  </div>
            
              </div>
              <div className="flex justify-between items-center mt-4 pt-4">
                
                <button className="w-full py-3 btn text-white rounded-full hover:bg-blue-700 transition-colors">
                  View
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotographyPackages;