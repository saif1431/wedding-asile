import React from "react";
import { MapPin, Calendar, Clock, CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoStar } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export const TopWeddingVendorCard = ({ service }) => {
  return (
    <div className=" bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative h-54 bg-gray-100">
        <img
          src={service.mainImage}
          alt={service.mainImageAlt}
          className="object-cover w-full h-full absolute inset-0 hover:scale-110 transition duration-500 "
        />
        <div className="absolute -bottom-8 left-40">
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
      "https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2Fb9a7a131-94c3-4919-9045-a00ef453948227f9b922-6a7a-4a78-b49f-82c55110aeeaDSC05091%20(1)%20copy.jpg.jpg&w=750&q=75",
    mainImageAlt: "Wedding couple - bride in lace dress and groom in dark suit",
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
    profileImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    profileImageAlt: "Caterer profile",
    isNew: true,
  },
  {
    id: 4,
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
    profileImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    profileImageAlt: "Caterer profile",
    isNew: true,
  },
  {
    id: 5,
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
    profileImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    profileImageAlt: "Caterer profile",
    isNew: true,
  },
  {
    id: 6,
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
    profileImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    profileImageAlt: "Caterer profile",
    isNew: true,
  },
  // Add more services as needed
];

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


