import React from 'react';
import ServiceTopBanner from '../../Components/HomeComponents/ServicesPageComponents/ServiceTopBanner';
import FilterSection from '../../Components/HomeComponents/ServicesPageComponents/FilterSection';
import ServicesCarousel from '../../Components/ReuseableComponent/ServiceCard';

function ServicesPage() {
  return (
    <div>
      <ServiceTopBanner />
      <div className='flex flex-col lg:flex-row items-start gap-6 mt-8 lg:px-8 px-6'>
        <div className='lg:w-[25%] w-full'>
          <div className='mb-5'>
            <iframe 
            className='w-full'
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13267.392510522443!2d72.81609734999999!3d33.7645902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1752663193686!5m2!1sen!2s"  
              style={{ border: 0 }}  
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          <FilterSection />
        </div>
        <div className='lg:w-[75%] w-full'>
          <div className='flex items-center mb-4 flex-col md:flex-row gap-4 justify-between'>
            <p className='text-gray-500'>Found 40 listings available for your date and location</p>
            <div className='flex gap-2 items-center'>
              <p className='text-gray-500'>Sort: by</p>
              <select name="sort" className='bg-white rounded-md py-2 px-4'>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
          </div>
          <ServicesCarousel />
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;