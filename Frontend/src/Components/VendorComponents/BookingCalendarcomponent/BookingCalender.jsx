"use client"

import { useState } from "react"
import { HelpCircle } from "lucide-react"

export default function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 1)) // July 2025
  const [view, setView] = useState("Month") // Removed TypeScript annotation

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const timeSlots = [
    "12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM",
    "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
    "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"
  ]

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add previous month's trailing days
    const prevMonth = new Date(year, month - 1, 1)
    const prevMonthDays = new Date(year, month, 0).getDate()
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        isNextMonth: false,
      })
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        isNextMonth: false,
      })
    }

    // Add next month's leading days
    const remainingCells = 42 - days.length
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isNextMonth: true,
      })
    }

    return days
  }

  const getWeekDays = (date) => {
    const startOfWeek = new Date(date)
    const day = startOfWeek.getDay()
    startOfWeek.setDate(date.getDate() - day)

    const weekDays = []
    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(startOfWeek)
      currentDay.setDate(startOfWeek.getDate() + i)
      weekDays.push(currentDay)
    }
    return weekDays
  }

  const navigate = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (view === "Month") {
        newDate.setMonth(direction === "prev" ? prev.getMonth() - 1 : prev.getMonth() + 1)
      } else if (view === "Week") {
        newDate.setDate(direction === "prev" ? prev.getDate() - 7 : prev.getDate() + 7)
      } else if (view === "Day") {
        newDate.setDate(direction === "prev" ? prev.getDate() - 1 : prev.getDate() + 1)
      }
      return newDate
    })
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  const getViewTitle = () => {
    if (view === "Month") {
      return `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`
    } else if (view === "Week") {
      const weekDays = getWeekDays(currentDate)
      const startDate = weekDays[0]
      const endDate = weekDays[6]
      if (startDate.getMonth() === endDate.getMonth()) {
        return `${monthNames[startDate.getMonth()]} ${startDate.getDate()} - ${endDate.getDate()}, ${startDate.getFullYear()}`
      }
      return `${monthNames[startDate.getMonth()]} ${startDate.getDate()} - ${monthNames[endDate.getMonth()]} ${endDate.getDate()}, ${startDate.getFullYear()}`
    }
    return `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`
  }

  const renderMonthView = () => {
    const days = getDaysInMonth(currentDate)

    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-auto">
        <div className="grid grid-cols-7 border-b border-gray-200">
          {dayNames.map((day) => (
            <div key={day} className="p-4 text-center font-medium text-gray-700 bg-gray-50">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {days.map((date, index) => (
            <div
              key={index}
              className={`h-24 border-r border-b border-gray-200 p-2 relative cursor-pointer ${
                !date.isCurrentMonth ? "bg-gray-100" : "bg-white hover:bg-gray-50"
              } ${index === 12 ? "bg-blue-50" : ""}`}
            >
              <span className={`text-sm font-medium ${
                !date.isCurrentMonth ? "text-gray-400" : "text-gray-900"
              }`}>
                {date.day.toString().padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderWeekView = () => {
    const weekDays = getWeekDays(currentDate)

    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-scroll">
        <div className="grid grid-cols-8 border-b border-gray-200">
          <div className="p-4 text-center font-medium text-gray-700 bg-gray-50 border-r border-gray-200">Time</div>
          {weekDays.map((day, index) => (
            <div key={index} className="p-4 text-center font-medium text-gray-700 bg-gray-50 border-r border-gray-200">
              <div className="text-sm text-gray-500">{dayNames[day.getDay()]}</div>
              <div className="text-lg font-semibold">{day.getDate()}</div>
            </div>
          ))}
        </div>
        <div className="max-h-96 overflow-y-auto">
          {timeSlots.map((time, timeIndex) => (
            <div key={timeIndex} className="grid grid-cols-8 border-b border-gray-200">
              <div className="p-3 text-sm text-gray-600 bg-gray-50 border-r border-gray-200 text-center">{time}</div>
              {weekDays.map((day, dayIndex) => (
                <div key={dayIndex} className="h-12 border-r border-gray-200 hover:bg-blue-50 cursor-pointer relative">
                  {timeIndex === 9 && dayIndex === 2 && (
                    <div className="absolute inset-1 bg-green-200 rounded text-xs p-1 text-green-800">Meeting</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderDayView = () => {
    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <div className="text-center">
            <div className="text-sm text-gray-500">{dayNames[currentDate.getDay()]}</div>
            <div className="text-2xl font-semibold">{currentDate.getDate()}</div>
          </div>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {timeSlots.map((time, index) => (
            <div key={index} className="flex border-b border-gray-200">
              <div className="w-20 p-3 text-sm text-gray-600 bg-gray-50 border-r border-gray-200 text-center">
                {time}
              </div>
              <div className="flex-1 h-16 hover:bg-blue-50 cursor-pointer relative p-2">
                {index === 9 && (
                  <div className="bg-green-200 rounded p-2 text-green-800 text-sm">
                    <div className="font-medium">Team Meeting</div>
                    <div className="text-xs">9:00 AM - 10:00 AM</div>
                  </div>
                )}
                {index === 14 && (
                  <div className="bg-yellow-200 rounded p-2 text-yellow-800 text-sm">
                    <div className="font-medium">Client Call</div>
                    <div className="text-xs">2:00 PM - 3:00 PM</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
            <span className="text-sm text-gray-700">Booking</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
            <span className="text-sm text-gray-700">Scheduled</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-2 rounded-full">
            Bookings
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-full">
            Unavailable
          </button>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <HelpCircle className="w-5 h-5" />
          <span className="text-sm">Need help</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={goToToday}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 bg-transparent"
          >
            Today
          </button>
          <button
            onClick={() => navigate("prev")}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={() => navigate("next")}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Next
          </button>
        </div>

        <h1 className="text-xl font-medium text-gray-900">{getViewTitle()}</h1>

        <div className="flex items-center gap-2">
          {["Month", "Week", "Day"].map((viewType) => (
            <button
              key={viewType}
              onClick={() => setView(viewType)}
              className={`px-4 py-2 rounded-md ${
                view === viewType ? "bg-gray-800 text-white" : "border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {viewType}
            </button>
          ))}
        </div>
      </div>

      {view === "Month" && renderMonthView()}
      {view === "Week" && renderWeekView()}
      {view === "Day" && renderDayView()}
    </div>
  )
}