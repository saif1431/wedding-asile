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
                className="object-cover w-full h-full"
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
          <button className="px-8 py-2 text-sm border border-gray-300 rounded-full text-gray-800 hover:bg-gray-50 hover:text-black transition">
            View Package
          </button>
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
      "https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2Fb9a7a131-94c3-4919-9045-a00ef453948227f9b922-6a7a-4a78-b49f-82c55110aeeaDSC05091%20(1)%20copy.jpg.jpg&w=750&q=75",
    mainImageAlt: "Wedding couple - bride in lace dress and groom in dark suit",
    secondImage:
      "https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2F178ad415-d23f-4355-8ede-d4cf2d2c6953profile-card-img&w=750&q=75",
    thirdImage:
      "https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2Fd93dc7ed-9e18-4a4f-9f6c-060e463879e229fd8bb5-d14d-4d93-9e27-39d6a5fb343b0W0A3953.jpg&w=750&q=75",
    profileImage:
      "https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2F33dfb8a4-cc6e-46b5-8133-c65d4b49555fcropped-image.jpg&w=256&q=75",
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
      "https://images.unsplash.com/photo-1529632316988-4dd0eac6420f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    mainImageAlt: "Wedding planner organizing flowers",
    secondImage:
      "https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2F178ad415-d23f-4355-8ede-d4cf2d2c6953profile-card-img&w=750&q=75",
    thirdImage:
      "https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2Fd93dc7ed-9e18-4a4f-9f6c-060e463879e229fd8bb5-d14d-4d93-9e27-39d6a5fb343b0W0A3953.jpg&w=750&q=75",
    profileImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
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
      "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    mainImageAlt: "Wedding catering table setup",
    secondImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    thirdImage:
      "https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2Fd93dc7ed-9e18-4a4f-9f6c-060e463879e229fd8bb5-d14d-4d93-9e27-39d6a5fb343b0W0A3953.jpg&w=750&q=75",
    profileImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
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
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    mainImageAlt: "Wedding floral arrangements",
    secondImage:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    thirdImage:
      "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1494790108755-2616c9c0e8d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
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
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    mainImageAlt: "DJ setup at wedding",
    secondImage:
      "https://images.unsplash.com/photo-1571266028243-d220c9c9b2d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    thirdImage:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
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
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    mainImageAlt: "Bridal makeup application",
    secondImage:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    thirdImage:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    profileImageAlt: "Makeup artist profile",
    isNew: false,
  },
]

export default function ServicesCarousel() {
  return (
    <div className="py-8 px-4 lg:px-28">
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
        modules={[Pagination, Autoplay]}
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
