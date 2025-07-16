import { Clock } from "lucide-react";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { Link } from "react-router-dom";

export function WeddingDetailsForm() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wedding Details</h2>
        <AvailabilityBadge date="23 July 2025" />
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="wedding-date" className="block text-sm font-medium text-gray-700 mb-1">
            Date Of Wedding*
          </label>
          <input 
            id="wedding-date" 
            type="text" 
            defaultValue="23/07/2025" 
            className="w-full p-3  rounded-md mt-1 bg-gray-200" 
            readOnly 
          />
        </div>

        <div>
          <label htmlFor="wedding-time" className="block text-sm font-medium text-gray-700 mb-1">
            Time Of Wedding*
          </label>
          <div className="relative">
            <input 
              id="wedding-time" 
              type="text" 
              placeholder="--:-- --" 
              className="w-full p-3  rounded-md mt-1 bg-gray-200" 
            />
            <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div>
          <label htmlFor="venue-postcode" className="block text-sm font-medium text-gray-700 mb-1">
            Venue Postcode*
          </label>
          <input 
            id="venue-postcode" 
            type="text" 
            defaultValue="57008" 
            className="w-full p-3  rounded-md mt-1 bg-gray-200" 
          />
        </div>

        <div>
          <label htmlFor="venue-address" className="block text-sm font-medium text-gray-700 mb-1">
            Venue Address*
          </label>
          <input 
            id="venue-address" 
            type="text" 
            placeholder="Venue Address" 
            className="w-full p-3  rounded-md mt-1 bg-gray-200" 
          />
        </div>

        <div>
          <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number*
          </label>
          <input 
            id="mobile-number" 
            type="tel" 
            defaultValue="123456789" 
            className="w-full p-3  rounded-md mt-1 bg-gray-200" 
          />
        </div>

        <div>
          <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">
            Note (Optional)
          </label>
          <textarea 
            id="note" 
            placeholder="" 
            className="w-full p-2 border border-gray-300 rounded-md mt-1 bg-gray-200 min-h-[100px]" 
          />
        </div>
      </div>

      <div className="text-xs text-gray-500">
        We may call or message you to confirm your wedding details.{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </div>

      <button className="w-full btn  text-white font-medium py-3 px-4 rounded-full">
       <Link to='/Checkout'>Continue</Link> 
      </button>
    </div>
  );
}