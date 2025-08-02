"use client"

import { useRef, useEffect, useState } from "react"
import { MapPin, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { IoStar } from "react-icons/io5"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import { Navigation, Pagination } from "swiper/modules"
import { Link, useLocation } from "react-router-dom"

const ServiceCard = ({ service }) => {
  const swiperRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current
      swiperRef.current.swiper.navigation.init()
      swiperRef.current.swiper.navigation.update()
    }
  }, [])

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 bg-gray-100 group">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Navigation]}
          className="h-full w-full"
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
        >
          {[service.mainImage, service.secondImage, service.thirdImage].filter(Boolean).map((img, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full flex items-center justify-center">
                <img
                  src={img || "/placeholder.svg"}
                  alt={`${service.name} image ${index + 1}`}
                  className="object-cover w-full h-full hover:scale-125 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button
          ref={nextRef}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/50 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        <button
          ref={prevRef}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/50 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Profile Image */}
        <div className="absolute -bottom-8 left-6 z-10">
          <div className="w-16 h-16 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-md">
            <img
              src={service.profileImage || "/placeholder.svg"}
              alt={service.profileImageAlt || `${service.name} profile`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="pt-12 px-6 pb-6">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-900 line-clamp-1">{service.name}</h2>
            {service.isVerified && <RiVerifiedBadgeFill className="w-6 h-6 text-green-500 fill-current" />}
          </div>
          {service.isNew && (
            <span className="bg-[#FFD586] text-black font-medium px-3 py-1 text-sm flex items-center gap-1 rounded-md hover:bg-yellow-500 transition">
              <IoStar className="w-4 h-4" />
              New
            </span>
          )}
        </div>

        <p className="text-gray-600 mb-4 line-clamp-1">{service.serviceType}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-6 line-clamp-2">{service.packageName}</h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span className="line-clamp-1">
              Based In: <span className="font-medium text-gray-900">{service.location}</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Calendar className="w-5 h-5 flex-shrink-0" />
            <span className="line-clamp-1">
              Experience: <span className="font-medium text-gray-900">{service.experience}</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Clock className="w-5 h-5 flex-shrink-0" />
            <span className="line-clamp-1">
              Coverage: <span className="font-medium text-gray-900">{service.coverage}</span>
            </span>
          </div>
        </div>

        <hr className="border-gray-300 mb-3" />
        <div className="flex items-center justify-between">
          <div className="text-md font-bold text-green-600">{service.price}</div>
          <Link 
            to='/PackageView' 
            className="px-6 py-2 text-sm border border-gray-300 rounded-full text-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            View Package
          </Link>
        </div>
      </div>
    </div>
  )
}

const servicesData = [
  {
    id: 1,
    name: "Asim Photography",
    isVerified: true,
    serviceType: "Photography & Videography",
    packageName: "Platinum Wedding Package - Full day coverage with premium album",
    location: "Glasgow, UK",
    experience: "5+ years",
    coverage: "8 hours coverage",
    price: "£3500",
    mainImage: "/main_detail/one.jpg",
    secondImage: "/main_detail/two.jpg",
    thirdImage: "/main_detail/three.jpg",
    profileImage: "/main_detail/four.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Sarah Events",
    isVerified: true,
    serviceType: "Wedding Planning",
    packageName: "Gold Full Service Package - Includes venue coordination and vendor management",
    location: "Edinburgh, UK",
    experience: "7+ years",
    coverage: "Full planning service",
    price: "£4200",
    mainImage: "/main_detail/five.jpg",
    secondImage: "/main_detail/six.jpg",
    thirdImage: "/main_detail/one.jpg",
    profileImage: "/main_detail/two.jpg",
    isNew: false,
  },
  {
    id: 3,
    name: "Michael Catering",
    isVerified: false,
    serviceType: "Catering Services",
    packageName: "Deluxe Wedding Menu - 3-course meal with cocktail hour",
    location: "London, UK",
    experience: "10+ years",
    coverage: "150 guests",
    price: "£2800",
    mainImage: "/main_detail/three.jpg",
    secondImage: "/main_detail/four.jpg",
    thirdImage: "/main_detail/five.jpg",
    profileImage: "/main_detail/six.jpg",
    isNew: true,
  },
  {
    id: 4,
    name: "Emma Floral Designs",
    isVerified: true,
    serviceType: "Floral Design",
    packageName: "Premium Wedding Flowers - Bridal bouquet plus 5 centerpieces",
    location: "Manchester, UK",
    experience: "6+ years",
    coverage: "Full venue decoration",
    price: "£1800",
    mainImage: "/main_detail/one.jpg",
    secondImage: "/main_detail/two.jpg",
    thirdImage: "/main_detail/three.jpg",
    profileImage: "/main_detail/four.jpg",
    isNew: false,
  },
  {
    id: 5,
    name: "James DJ Entertainment",
    isVerified: false,
    serviceType: "DJ Services",
    packageName: "Ultimate Wedding Package - 12 hours with lighting effects",
    location: "Birmingham, UK",
    experience: "8+ years",
    coverage: "12 hours entertainment",
    price: "£1200",
    mainImage: "/main_detail/five.jpg",
    secondImage: "/main_detail/six.jpg",
    thirdImage: "/main_detail/one.jpg",
    profileImage: "/main_detail/two.jpg",
    isNew: true,
  },
  {
    id: 6,
    name: "Lisa Makeup Studio",
    isVerified: true,
    serviceType: "Makeup Artist",
    packageName: "Bridal Beauty Package - Bride plus 3 bridesmaids",
    location: "Liverpool, UK",
    experience: "4+ years",
    coverage: "Bridal party makeup",
    price: "£800",
    mainImage: "/main_detail/three.jpg",
    secondImage: "/main_detail/four.jpg",
    thirdImage: "/main_detail/five.jpg",
    profileImage: "/main_detail/six.jpg",
    isNew: false,
  },
]

export default function ServicesCarousel() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [currentSlide, setCurrentSlide] = useState(0)
  const [maxSlides, setMaxSlides] = useState(0)
  const swiperRef = useRef(null)

  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on('slideChange', () => {
        setCurrentSlide(swiperRef.current.swiper.realIndex)
      })
      setMaxSlides(servicesData.length - Math.ceil(swiperRef.current.swiper.params.slidesPerView))
    }
  }, [])

  if (isHomePage) {
    return (
      <div className="px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Wedding Services</h2>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[]}
          className="mySwiper"
          
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Navigation Controls */}
        <div className="flex items-center justify-start gap-4 mt-8">
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
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlides}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
              currentSlide >= maxSlides
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-300 text-gray-600 hover:border-gray-400"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Moving Progress Bar */}
          <div className="flex-1 ml-4 w-full">
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-500 ease-in-out"
                style={{
                  width: maxSlides > 0 ? `${(currentSlide / maxSlides) * 100}%` : "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">All Wedding Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}