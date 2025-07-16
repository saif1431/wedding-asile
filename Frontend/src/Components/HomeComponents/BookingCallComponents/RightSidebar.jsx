import { Clock, Check } from "lucide-react"
import { FaVideo } from "react-icons/fa";

export function RightSidebar() {
  return (
    <div className="bg-white rounded-lg p-6 lg:mt-12 mt-4 shadow-sm space-y-6">
      {/* Photographer Profile */}
      <div className="text-start">
        <div className="w-16 h-16 rounded-full flex items-start justify-start mx-auto mb-3">
          <img className="rounded-full" src="/profileImg.png" alt="" />
        </div>

        <div className="flex items-center justify-start gap-2 mb-4">
          <h3 className="text-xl font-semibold text-gray-900">AbdulBasit</h3>
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
        </div>
      </div>

      {/* Google Meet Section */}
      <div className="text-start text-lg py-4 space-y-4">
        <h4 className="text-2xl  font-semibold text-gray-900">Google Meet</h4>
        <p className="text-gray-600">Chat With Your Photographer</p>

        <div className="flex items-center justify-start  gap-2 text-gray-700">
          <Clock className="w-4 h-4" />
          <span className="font-medium">30 Minutes</span>
        </div>

        <div className="flex items-center justify-start gap-2 text-gray-700">
        <FaVideo />

          <span>Google Meet</span>
        </div>
      </div>
    </div>
  )
}
