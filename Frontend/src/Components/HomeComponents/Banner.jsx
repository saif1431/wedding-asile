import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true
  };

  const bannerImages = [
    {
      id: 1,
      url: '/main_detail/one.jpg',
      alt: 'Summer Collection',
    },
    {
      id: 2, 
      url: '/main_detail/two.jpg',
      alt: 'Winter Special',
    },
    {
      id: 3,
      url: '/main_detail/three.jpg',
      alt: 'New Arrivals',
    },
  ];

  return (
    <div className="relative w-full h-[450px] overflow-hidden bg-gray-200 py-6">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {bannerImages.map((image) => (
            <div key={image.id} className="h-full">
              <div 
                className="w-full h-full bg-cover bg-center"
style={{ 
  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image.url})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '500px'
}}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Static Text Content */}
      <div className="relative z-0 h-full flex flex-col items-center  text-center ">
        <h2 className="text-3xl  text-white drop-shadow-lg">Turning Your Dream</h2>
        <h2 className="text-3xl  text-white drop-shadow-lg">Wedding Into Reality.</h2>
        <p className="text-3xl text-white mt-8  mx-auto">
          Enter wedding location and date to check availability
        </p>
      </div>
    </div>
  );
}

export default Banner;