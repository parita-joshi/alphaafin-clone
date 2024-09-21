import React, { useState, useEffect } from 'react';
import homeSliderImg1 from '../../assets/images/homeSliderImg-2.jpg';
import homeSliderImg2 from '../../assets/images/aboutImg-2.jpg';
import homeSliderImg3 from '../../assets/images/serviceSliderImg-1.jpg';

const images = [
  homeSliderImg1,
  homeSliderImg2,
  homeSliderImg3
];

const MiddleSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-auto bg-gray-800 px-4 py-8 md:px-12 md:py-16 lg:px-24 lg:py-20 flex flex-col lg:flex-row">
      {/* Slider */}
      <div className="  transform slide-in-left relative w-full lg:w-1/2 overflow-hidden rounded-xl border-b-8 border-l-8 border-[#FF9021]">
        <div className="relative w-full h-64 md:h-80 lg:h-full">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="  transform slide-in-right w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left p-20 md:p-10 bg-gray-800 text-white ">
        <p className="text-[#FF9021] mb-4 text-left text-sm md:text-base lg:text-lg">Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Expertise</h2>
        <p className="text-base md:text-lg lg:text-xl mb-6">
          Expertise and Experience: With over 20 Years of experience in the industry, our team of financial experts brings a wealth of knowledge and expertise to the table.<br /><br />
          Customer-Centric Approach: We put our clients at the heart of everything we do, offering personalized advice and support to help you make informed financial decisions.<br /><br />
          Innovative Solutions: We leverage the latest technology and financial products to provide innovative solutions that meet the evolving needs of our clients.<br /><br />
          Transparency and Integrity: We pride ourselves on our ethical approach, ensuring transparency and integrity in all our dealings.
        </p>
      </div>
    </section>
  );
};

export default MiddleSection;
