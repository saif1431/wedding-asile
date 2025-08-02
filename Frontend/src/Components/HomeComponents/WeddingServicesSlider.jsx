"use client"

import { useState, useEffect } from "react"

const WeddingServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(4)

const services = [
  { title: "Venue", image: "/pic/venue.jpg" },                // jpg ya jpeg ya png check karein
  { title: "Catering", image: "/pic/catering.jpg" },          // jpg ya jpeg ya png check karein
  { title: "Stage Setup", image: "/pic/stage_setup.jpg" },    // jpg ya jpeg ya png check karein
  { title: "Photographers/Videographers", image: "/pic/photography.jpg" }, // jpg/jpeg/png
  { title: "Wedding Favors", image: "/pic/WeddingFavour.jpg" }, // png
  { title: "Makeup Artists", image: "/pic/makeup.jpg" },      // jpeg
  { title: "Car Hire", image: "/pic/WeddingCar.jpg" },            // jpg
  { title: "Horse and Carriage", image: "/pic/horse.jpg" }, // jpg
  { title: "Invitations", image: "/pic/invitation.jpg" },     // png
  { title: "Photo Booth", image: "/pic/videography.jpg" },      // jpg
  { title: "Dessert Table", image: "/pic/deserts.jpg" }, // jpg
  { title: "Fireworks", image: "/pic/fireworks.jpg" },         // jpg
  { title: "Florists", image: "/pic/florist.jpg" },          // jpeg
  { title: "Wedding Planners", image: "/pic/WeddingPlanner.jpg" }, // jpg
  { title: "DJ/Entertainment", image: "/pic/dj.jpg" }, // png
  { title: "Jewelry", image: "/pic/jwelery.jpg" },             // jpg
  { title: "Gold", image: "/pic/gold.jpg" },                   // png
  { title: "Tailors", image: "/pic/WeddingDress.jpg" },             // jpg
  { title: "Henna/Mehndi", image: "/pic/mehndi.jpg" },   // jpg
  { title: "Imams", image: "/pic/imamas.png" },                 // png
  { title: "Cakes", image: "/pic/cake.jpg" },                 // jpg
  { title: "Food Trucks", image: "/pic/foodTruck.jpeg" },    // jpeg
  { title: "Custom Signage", image: "/pic/CustomSignage.png" }, // png
  { title: "Chai Station", image: "/pic/chai.png" },   // jpg
  { title: "Hampers", image: "/pic/hamper.png" },              // png
];

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4) // Large screens
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2) // Medium screens
      } else {
        setCardsPerView(1) // Small screens
      }
    }

    updateCardsPerView()
    window.addEventListener("resize", updateCardsPerView)
    return () => window.removeEventListener("resize", updateCardsPerView)
  }, [])

  const maxSlides = Math.max(0, services.length - cardsPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  const cardWidth = 100 / cardsPerView

  return (
    <div className="px-4  lg:px-28 lg:mt-22 mt-8">
          {/* Navigation Controls */}
      <div className="flex items-center justify-end gap-4 mb-8">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
            currentSlide === 0
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-300 text-gray-600 hover:border-gray-400"
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === maxSlides}
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
            currentSlide === maxSlides
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-300 text-gray-600 hover:border-gray-400"
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * cardWidth}%)`,
          }}
        >
          {services.map((service, index) => (
            <div key={index} className="flex-shrink-0 px-3" style={{ width: `${cardWidth}%` }}>
              <div className="flex flex-col items-start">
                <div className="w-full">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-80 object-top object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 text-start">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

  


    </div>
  )
}

export default WeddingServicesSlider
