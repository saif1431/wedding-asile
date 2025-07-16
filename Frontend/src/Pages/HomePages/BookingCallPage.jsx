"use client"

import { useState } from "react"
import { DateTimeStep } from "../../Components/HomeComponents/BookingCallComponents/DateTimeStep"
import { AttendeeDetailsStep } from "../../Components/HomeComponents/BookingCallComponents/AttendeeDetailsStep"
import { BookingSummaryStep } from "../../Components/HomeComponents/BookingCallComponents/BookingSummaryStep"
import { StepIndicator } from "../../Components/HomeComponents/BookingCallComponents/StepIndicator"
import { RightSidebar } from "../../Components/HomeComponents/BookingCallComponents/RightSidebar"

 function BookingCallPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <DateTimeStep onContinue={handleContinue} />
      case 2:
        return <AttendeeDetailsStep onContinue={handleContinue} />
      case 3:
        return <BookingSummaryStep />
      default:
        return <DateTimeStep onContinue={handleContinue} />
    }
  }

  return (
    <div className="min-h-screen py-8">
        <StepIndicator currentStep={currentStep} />
      <div className="lg:px-24 px-4">

        <div className="flex lg:flex-row flex-col gap-8">
          {/* Left Column - Dynamic Content */}
          <div className=" lg:w-[60%] w-full rounded-lg lg:p-6 p-2 ">{renderCurrentStep()}</div>

          {/* Right Column - Static Sidebar */}
      <div className="lg:w-[40%] w-full">
      <RightSidebar />
      </div>
        </div>
      </div>
    </div>
  )
}


export default BookingCallPage
