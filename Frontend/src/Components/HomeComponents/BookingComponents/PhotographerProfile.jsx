import { Check } from "lucide-react";

export function PhotographerProfile({ name, image, date, tagline, verified = true }) {
  return (
    <div className="relative">
      <div className="aspect-[6/3] rounded-lg overflow-hidden mb-4">
        <img
          src={image || "/placeholder.svg"}
          alt={`${name} - Wedding Photographer`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-18   left-4 bg-white rounded-full p-2 shadow-lg">
        <div className="w-14 h-14 overflow-hidden  rounded-full flex items-center justify-center">
         <img src="https://shaadisouk-image-bucket.s3.eu-west-2.amazonaws.com/uploads/348eb27c-bc1e-477f-a1d9-9d601accf8c6cropped-image.jpg" alt="" />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-12 mb-2">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        {verified && (
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <span>{date}</span>
        <span>{tagline}</span>
      </div>
    </div>
  );
}