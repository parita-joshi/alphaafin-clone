import React, { useState, useEffect } from 'react';
import homeSliderImg1 from "../../assets/images/homeSliderImg-1.jpg";
import homeSliderImg2 from "../../assets/images/homeSliderImg-2.jpg";
import homeSliderImg3 from "../../assets/images/homeSliderImg-3.jpg";
import '../../style.scss'; // Import the SCSS file

const images = {
  title: "Empowering Financial Security for Everyone",
  description: "We are committed to providing accessible and reliable financial services to help individuals and families.",
  urls: [
    {
      src: homeSliderImg1,
      alt: "Outdoor portrait of cheerful Indian family sitting on stairs",
    },
    {
      src: homeSliderImg2,
      alt: "National Cancer Institute",
    },
    {
      src: homeSliderImg3,
      alt: "National Cancer Institute",
    }
  ]
};

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.urls.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.urls.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen border-y-slate-100 border-y-[12px] overflow-hidden">
      <div className="overflow-hidden">
        {images.urls.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={`w-full h-full object-cover ${
                index === currentIndex ? 'image-zoom-out' : ''
              }`}
            />
            <div className="absolute top-1/2 inset-0 flex flex-col justify-center items-center transform -translate-x-1/2 animate-slide-up text-white text-center px-4">
              <h2 className="text-5xl font-bold">{images.title}</h2>
              <p className="text-lg mt-4">{images.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Previous button */}
      <button
  onClick={prevSlide}
  className="absolute left-10 top-1/2 transform -translate-y-1/2 w-12 h-12 flex justify-center items-center rounded-full bg-black bg-opacity-50 hover:bg-opacity-100 text-white font-bold text-2xl"
>
  <span className="text-center">{'<'}</span>
</button>


      {/* Next button */}
      <button
        onClick={nextSlide}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 w-12 h-12 flex justify-center items-center rounded-full bg-black bg-opacity-50 hover:bg-opacity-100 text-white font-bold text-2xl"
      >
        {">"}
      </button>
    </div>
  );
};

export default ImageSlider;
