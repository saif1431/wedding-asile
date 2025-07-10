import React from "react";
import { useRef } from "react"
import { MapPin, Calendar, Clock, CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoStar } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import "swiper/css/pagination";
import {Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export const TopWeddingVendorCard = ({ service }) => {
    const swiperRef = useRef(null)
  return (
    <div className=" bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative h-54 bg-gray-100">
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
        <div className="absolute -bottom-8 left-40 z-10">
          <div className="w-16 h-16 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
            <img
              src={service.profileImage}
              alt={service.profileImageAlt}
              className="object-cover w-full h-full "
            />
          </div>
        </div>
      </div>
      <div className="pt-12 px-6 pb-6">
 <div className="flex flex-col items-center ">
            <h2 className="text-xl font-bold text-gray-900">{service.name}</h2>
        <p className="text-gray-600 mb-4">{service.serviceType}</p>
            </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          {service.packageName}
        </h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>
              Based In:{" "}
              <span className="font-medium text-gray-900">{service.location}</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span>
              Experience:{" "}
              <span className="font-medium text-gray-900">{service.experience}</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>
              Coverage:{" "}
              <span className="font-medium text-gray-900">{service.coverage}</span>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center ">
    
          <Link to='VendorProfile' className="px-4 py-3 text-xl font-philper border border-gray-300 rounded-full text-gray-800 btn2  hover:text-white transition">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

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

export default function WeddingVendorCard() {
  return (
    <div className="py-8 px-4 lg:px-28">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
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
            <TopWeddingVendorCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


