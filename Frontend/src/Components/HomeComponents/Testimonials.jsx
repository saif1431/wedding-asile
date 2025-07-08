"use client"

import { useRef } from "react"
import { Star } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const testimonials = [
  {
    id: 1,
    name: "Ayesha",
    location: "London",
    rating: 5,
    quote:
      "ShaadiSouk just did in 5 minutes what took me weeks of chasing vendors. If you're an Asian bride in 2025, don't sleep on this!",
    profileImage: "https://shaadisouk-image-bucket.s3.eu-west-2.amazonaws.com/uploads/db578f57-3205-4b1b-91a4-c35fee1a7069Screenshot%202025-03-11%20at%2015.58.44.png",
  },
  {
    id: 2,
    name: "Priya",
    location: "Birmingham",
    rating: 5,
    quote:
      "Amazing platform! Found the perfect photographer and decorator within hours. The vendors are all verified and professional.",
    profileImage: "https://shaadisouk-image-bucket.s3.eu-west-2.amazonaws.com/uploads/db578f57-3205-4b1b-91a4-c35fee1a7069Screenshot%202025-03-11%20at%2015.58.44.png",
  },
  {
    id: 3,
    name: "Fatima",
    location: "Manchester",
    rating: 5,
    quote: "Saved me so much time and stress. The booking process is seamless and the customer service is outstanding!",
    profileImage: "https://shaadisouk-image-bucket.s3.eu-west-2.amazonaws.com/uploads/db578f57-3205-4b1b-91a4-c35fee1a7069Screenshot%202025-03-11%20at%2015.58.44.png",
  },
  {
    id: 4,
    name: "Zara",
    location: "Leeds",
    rating: 5,
    quote: "The best wedding planning platform for South Asian weddings. Everything I needed in one place!",
    profileImage: "https://shaadisouk-image-bucket.s3.eu-west-2.amazonaws.com/uploads/db578f57-3205-4b1b-91a4-c35fee1a7069Screenshot%202025-03-11%20at%2015.58.44.png",
  },
]

export default function Testimonials() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
   <div className="lg:mt-32 mt-6 px-4 lg:px-28 ">
      <h1 className="font-philper text-center lg:text-6xl text-3xl">Testimonials</h1>
       <div className=" mt-12  flex items-center justify-center">
      
      <div className="w-full  relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="width: 8px; height: 8px; background: ${
                index === 0 ? "#1f2937" : "#9ca3af"
              }; border-radius: 4px; transition: width 0.3s, background 0.3s;"></span>`
            },
          }}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="text-center px-4">
                {/* Star Rating */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="w-8 h-8 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-2xl md:text-2xl lg:text-4xl font-medium text-gray-800 leading-relaxed mb-12 max-w-5xl mx-auto">
                  "{testimonial.quote}"
                </blockquote>

                {/* Profile Section */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 ring-2 ring-white shadow-md">
                    <img
                      src={testimonial.profileImage || "/placeholder.svg"}
                      alt={`${testimonial.name} profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-lg text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button
          ref={prevRef}
          className="absolute lg:left-4 left-0 top-1/2 -translate-y-1/2  lg:w-12 lg:h-12 w-6 h-6 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center group hover:scale-105"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          ref={nextRef}
          className="absolute lg:right-4 right-0 top-1/2 -translate-y-1/2  lg:w-12 lg:h-12 w-6 h-6 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center group hover:scale-105"
          aria-label="Next testimonial"
        >
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
   </div>
  )
}