export function StepIndicator({ currentStep }) {
      const steps = [
        { number: 1, title: "Date and Time" },
        { number: 2, title: "Attendee Details" },
        { number: 3, title: "Booking Summary" },
      ]
    
      return (
        <div className="flex lg:px-24 px-4 flex-wrap gap-4   py-4  bg-gray-300 items-center space-x-4 mb-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step.number ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step.number}
                </div>
                <span className={`text-xl font-medium ${currentStep >= step.number ? "text-green-600" : "text-gray-500"}`}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && <div className="w-8 h-px bg-gray-300 "></div>}
            </div>
          ))}
        </div>
      )
    }
    