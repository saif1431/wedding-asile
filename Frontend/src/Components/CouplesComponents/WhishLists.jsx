import { Camera, Check } from "lucide-react";


function WhishLists() {
  const photographers = [
    {
      id: 1,
      name: "AbdulBasit",
      verified: true,
      price: "£2800",
      type: "Photographer",
      description: "Cherish Every Wedding Day Moment",
      logo: <Camera className="w-8 h-8" />,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      verified: true,
      price: "£3200",
      type: "VideoGrapher",
      description: "Capturing Life's Beautiful Stories",
      logo: <Camera className="w-8 h-8" />,
    },
    {
      id: 3,
      name: "Michael Chen",
      verified: false,
      price: "£2500",
      type: "Photographer",
      description: "Professional Portrait & Event Photography",
      logo: <Camera className="w-8 h-8" />,
    },
    {
      id: 4,
      name: "Emma Williams",
      verified: true,
      price: "£3500",
      type: "VideoGrapher",
      description: "Artistic Wedding & Lifestyle Photography",
      logo: <Camera className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white lg:p-6 p-2">
      <div className="">


        <div className="space-y-4">
          {photographers.map((photographer) => (
            <div 
              key={photographer.id} 
              className="  py-6"
            >
                   <h4 className="text-md w-fit font-semibold text-start   bg-gray-200 p-2 rounded-full    ">{photographer.type}</h4>
              <div className="flex items-center  lg:gap-12 flex-wrap">
                <div className="flex items-center gap-4">
               
                  {/* Logo */}
                  <div className="bg-white rounded-full text-white p-3 ">
                    <img className="w-20 h-20" src="https://shaadisouk-image-bucket.s3.eu-west-2.amazonaws.com/uploads/348eb27c-bc1e-477f-a1d9-9d601accf8c6cropped-image.jpg" alt="" />
                  </div>

                  {/* Photographer Info */}
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {photographer.name}
                      </h3>
                      {photographer.verified && (
                        <div className="bg-green-500 rounded-full p-1">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">Photographers</p>
                  </div>
                </div>

                {/* Price and Description */}
                <div className="flex flex-wrap  items-center lg:gap-8 gap-4 px-4 lg:px-0">
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-gray-900">
                      {photographer.price}
                    </p>
                  </div>

                  <div className="max-w-xs">
                    <p className="text-gray-700 text-sm">
                      {photographer.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="text-blue-600 hover:text-blue-800 p-0 bg-transparent border-none cursor-pointer">
                      View
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 p-0 bg-transparent border-none cursor-pointer">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}     

export default WhishLists
