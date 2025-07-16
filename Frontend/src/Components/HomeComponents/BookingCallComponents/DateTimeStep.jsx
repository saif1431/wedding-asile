"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

export function DateTimeStep({ onContinue }) {
  const timeSlots = {
    AM: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
    PM: ["14:00 PM", "14:30 PM", "15:00 PM", "15:30 PM", "16:00 PM", "16:30 PM"],
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Date Of Meeting*</label>

        {/* Calendar Widget */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h3 className="font-medium">August 2025</h3>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div key={day} className="p-2 font-medium text-gray-500">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {/* Previous month days */}
            {[27, 28, 29, 30, 31].map((day) => (
              <button key={`prev-${day}`} className="p-2 text-gray-400 hover:bg-gray-50 rounded">
                {day}
              </button>
            ))}

            {/* Current month days */}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                className={`p-2 hover:bg-gray-50 rounded ${day === 23 ? "bg-blue-500 text-white" : "text-gray-900"}`}
              >
                {day}
              </button>
            ))}

            {/* Next month days */}
            {[1, 2, 3, 4, 5, 6].map((day) => (
              <button key={`next-${day}`} className="p-2 text-gray-400 hover:bg-gray-50 rounded">
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Time Of Meeting*</label>
        <div className="text-lg font-medium text-gray-900 mb-4">Saturday, 23 August</div>

        {/* Time Picker */}
        <div className="bg-white border text-ceter border-gray-200 rounded-lg p-4 max-h-64 overflow-y-auto">
          <div className="grid  grid-cols-2 gap-4">
            <div>
              <div className="text-center font-medium text-gray-700 mb-3 pb-2 border-b">AM</div>
              <div className="space-y-2 text-center">
                {timeSlots.AM.map((time) => (
                  <button key={time} className="w-full bg-gray-100 text-center  p-2 hover:bg-gray-200 rounded text-sm">
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center font-medium text-gray-700 mb-3 pb-2 border-b">PM</div>
              <div className="space-y-2">
                {timeSlots.PM.map((time) => (
                  <button key={time} className="w-full text-center p-2 hover:bg-gray-200 bg-gray-100 rounded text-sm">
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-6">
        <button
          onClick={onContinue}
          className="btn text-white px-8 py-2 rounded-full font-medium"
        >
          Continue
        </button>
      </div>      
    </div>
  )
}
