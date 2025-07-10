import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ImageGallerySwiper = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'https://cdn.shaadisouk.com/uploads/e233b7b2-8d1f-458e-ad46-4f1ade247e12cropped-5.jpg',
    'https://cdn.shaadisouk.com/uploads/6fcd29c6-4f91-42e9-9b31-b47a62cc2856cropped-9.jpg',
    'https://cdn.shaadisouk.com/uploads/e2962f1b-f4ee-412c-b737-ebb1f30b6662ebcc86f4-e4b0-4b77-8619-dbb0a860ffceScreenshot%202025-04-29%20at%2020.39.14.png',
    'https://cdn.shaadisouk.com/uploads/1305090b-9da6-41f3-934c-66d4eb81c2099f4b46aa-172f-4f9a-bc13-992113da0348cropped-7.jpg',
    'https://cdn.shaadisouk.com/uploads/e2962f1b-f4ee-412c-b737-ebb1f30b6662ebcc86f4-e4b0-4b77-8619-dbb0a860ffceScreenshot%202025-04-29%20at%2020.39.14.png',
  ];

  const openFullscreen = () => {
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="relative mt-16 w-full h-[400px] md:h-[400px] overflow-hidden">
      {/* Main Swiper */}
      <Swiper
        slidesPerView={2}
        
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="overflow-hidden rounded-xl">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-[100%] h-full object-cover"
            />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}

      </Swiper>

      {/* View Gallery Button */}
      <button
        onClick={openFullscreen}
        className="absolute bottom-4 right-4 bg-white/90 text-black px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors z-10"
      >
        View Gallery
      </button>

      {/* Fullscreen Gallery */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full z-50"
          >
            <FiX size={28} />
          </button>

          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            initialSlide={activeIndex}
            navigation={{
              nextEl: '.fullscreen-swiper-button-next',
              prevEl: '.fullscreen-swiper-button-prev',
            }}
             autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
            modules={[Autoplay,  Navigation]}
            className="w-full h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center w-full">
                <img
                  src={image}
                  alt={`Gallery Fullscreen ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-between w-full max-w-4xl mt-4">
            <button className="fullscreen-swiper-button-prev text-white p-2 hover:bg-white/20 rounded-full">
              <FiChevronLeft size={32} />
            </button>
            <div className="flex space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button className="fullscreen-swiper-button-next text-white p-2 hover:bg-white/20 rounded-full">
              <FiChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallerySwiper;