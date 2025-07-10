"use client"

import { useRef } from "react"
import { MapPin, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { IoStar } from "react-icons/io5"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Link } from "react-router-dom"

const ServiceCard = ({ service }) => {
  const swiperRef = useRef(null)

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative h-64 bg-gray-100 group">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={{
            prevEl: `.prev-${service.id}`,
            nextEl: `.next-${service.id}`,
          }}
          modules={[Navigation]}
          className="h-full w-full"
        >
          {[service.mainImage, service.secondImage, service.thirdImage].filter(Boolean).map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img || "/placeholder.svg"}
                alt={`${service.name} image ${index + 1}`}
                className="object-cover hover:scale-150 transition ease-in-out duration-500 w-full h-full"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div
          className={`next-${service.id} absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}
        >
          <ChevronRight className="w-4 h-4" />
        </div>
        <div
          className={`prev-${service.id} absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}
        >
          <ChevronLeft className="w-4 h-4" />
        </div>

        {/* Profile Image */}
        <div className="absolute -bottom-8 left-6 z-10">
          <div className="w-16 h-16 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-md">
            <img
              src={service.profileImage || "/placeholder.svg"}
              alt={service.profileImageAlt}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="pt-12 px-6 pb-6">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
            {service.isVerified && <RiVerifiedBadgeFill className="w-6 h-6 text-green-500 fill-current" />}
          </div>
          {service.isNew && (
            <span className="bg-[#FFD586] text-black font-medium px-3 py-1 text-md flex items-center gap-2 rounded-md hover:bg-yellow-500 transition">
              <IoStar />
              New
            </span>
          )}
        </div>

        <p className="text-gray-600 mb-4">{service.serviceType}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">{service.packageName}</h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>
              Based In: <span className="font-medium text-gray-900">{service.location}</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span>
              Experience: <span className="font-medium text-gray-900">{service.experience}</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>
              Coverage: <span className="font-medium text-gray-900">{service.coverage}</span>
            </span>
          </div>
        </div>

        <hr className="border-gray-300 mb-3" />
        <div className="flex items-center justify-between">
          <div className="text-md font-bold text-green-600">{service.price}</div>
          <Link to='/PackageView' className="px-8 py-2 text-sm border border-gray-300 btn2 rounded-full text-black font-philper  hover:text-white transition">
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
    name: "Asim",
    isVerified: true,
    serviceType: "Photography & Videography",
    packageName: "Platinum Package",
    location: "Glasgow",
    experience: "5+ years",
    coverage: "8 hours",
    price: "£3500",
    mainImage:
      "/main_detail/one.jpg",
    mainImageAlt: "Wedding couple - bride in lace dress and groom in dark suit",
     secondImage:
      "/main_detail/two.jpg",
    thirdImage:
      "/main_detail/three.jpg",
    profileImage:
      "/main_detail/four.jpg",
    profileImageAlt: "Photographer profile",
    isNew: true,
  },
  {
    id: 2,
    name: "Sarah",
    isVerified: true,
    serviceType: "Wedding Planning",
    packageName: "Gold Package",
    location: "Edinburgh",
    experience: "7+ years",
    coverage: "Full day",
    price: "£4200",
    mainImage:
      "/main_detail/five.jpg",
    mainImageAlt: "Wedding planner organizing flowers",
     secondImage:
      "/main_detail/six.jpg",
    thirdImage:
      "/main_detail/one.jpg",
    profileImage:
      "/main_detail/two.jpg",
    profileImageAlt: "Wedding planner profile",
    isNew: false,
  },
  {
    id: 3,
    name: "Michael",
    isVerified: false,
    serviceType: "Catering",
    packageName: "Deluxe Package",
    location: "London",
    experience: "10+ years",
    coverage: "150 guests",
    price: "£2800",
   mainImage:
      "/main_detail/three.jpg",
    mainImageAlt: "Wedding planner organizing flowers",
     secondImage:
      "/main_detail/four.jpg",
    thirdImage:
      "/main_detail/five.jpg",
    profileImage:
      "/main_detail/six.jpg",
    profileImageAlt: "Caterer profile",
    isNew: true,
  },
  {
    id: 4,
    name: "Emma",
    isVerified: true,
    serviceType: "Floral Design",
    packageName: "Premium Package",
    location: "Manchester",
    experience: "6+ years",
    coverage: "Full venue",
    price: "£1800",
    mainImage:
      "/main_detail/one.jpg",
    mainImageAlt: "Wedding floral arrangements",
    secondImage:
      "/main_detail/two.jpg",
    thirdImage:
      "/main_detail/three.jpg",
    profileImage:
      "/main_detail/four.jpg",
    profileImageAlt: "Florist profile",
    isNew: false,
  },
  {
    id: 5,
    name: "James",
    isVerified: false,
    serviceType: "DJ Services",
    packageName: "Ultimate Package",
    location: "Birmingham",
    experience: "8+ years",
    coverage: "12 hours",
    price: "£1200",
    mainImage:
      "/main_detail/five.jpg",
    mainImageAlt: "DJ setup at wedding",
    secondImage:
      "/main_detail/six.jpg",
    thirdImage:
      "/main_detail/one.jpg",
    profileImage:
      "/main_detail/two.jpg",
    profileImageAlt: "DJ profile",
    isNew: true,
  },
  {
    id: 6,
    name: "Lisa",
    isVerified: true,
    serviceType: "Makeup Artist",
    packageName: "Bridal Package",
    location: "Liverpool",
    experience: "4+ years",
    coverage: "Bridal party",
    price: "£800",
    mainImage:
      "/main_detail/three.jpg",
    mainImageAlt: "Bridal makeup application",
    secondImage:
     "/main_detail/four.jpg",
    thirdImage:
"/main_detail/five.jpg",
    profileImage:
     "/main_detail/five.jpg",
    isNew: false,
  },
]

export default function ServicesCarousel() {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[ Autoplay]}
        className="mySwiper"
      >
        {servicesData.map((service) => (
          <SwiperSlide key={service.id}>
            <ServiceCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
