import React, { useEffect, useState } from 'react';
import Img1 from "../../assets/images/serviceSliderImg-1.jpg";
import Img2 from "../../assets/images/serviceSliderImg-2.jpg";
import Img3 from "../../assets/images/serviceSliderImg-3.jpg";
import Card from './Card';
import data from './content.json';
import personalLoanIcon from "../../assets/images/personalLoanIcon.png"
import homeImg from "../../assets/images/home.png"
import familyImg from "../../assets/images/homeSliderImg-2.jpg"
import "../../style.scss"

const ServicesLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Img1, Img2, Img3];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 5000); // Slide transition interval
    return () => clearInterval(slideInterval);
  }, []);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Delay the home image slide-in for visual effect
    const timer = setTimeout(() => {
      setSlideIn(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const [count, setCount] = useState(1);

  useEffect(() => {
    let timer;
    if (count < 100) {
      timer = setInterval(() => {
        setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
      }, 50); // Adjust the interval time for speed
    }
    return () => clearInterval(timer);
  }, [count]);
  return (
    <>
    <section className="bg-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-32 md:p-12 w-screen overflow-hidden">
      <div className=''>
        {/* Map card1 array */}
        {data.card1.map((card, index) => (
          <Card
            key={index}
            icon={personalLoanIcon}
            componenetName="ServiceLayout"
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
      <div  className=''>
        {/* Map card2 array */}
        {data.card2.map((card, index) => (
          <Card
            key={index}
            icon={personalLoanIcon}
            componenetName="ServiceLayout"
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
      <div className="relative w-screen h-screen  lg:w-full lg:h-full overflow-hidden rounded-xl">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 transition-opacity duration-1000  image-zoom-in"
            style={{
              backgroundImage: `url(${slides[currentSlide]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 1
            }}
          ></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-6 text-white ">
          <h3 className="text-2xl font-bold mb-4">
            At Alphaa Financial Solutions, we offer a comprehensive range of financial services
          </h3>
          <p className="text-lg">
            We have the expertise to guide you through the process.
          </p>
          <div className="text-3xl font-extrabold mt-5">
                <span>{count}</span>
                <span >+</span>
            </div>
          <h2 className="text-lg font-semibold">
                Simplify the loan
              </h2>
        </div>
      </div>
    </section>



      <div className="grid grid-cols-1 lg:grid-cols-2  relative md:p-20 p-4">

      <div className="relative ml-11 mr-44 transition-opacity duration-1000 ">
  <img
    src={familyImg}
    alt="Left Image"
    className="rounded-xl h-40 md:h-72 w-full lg:w-[500px] ml-12 md:ml-32 lg:ml-36 object-cover "
  />
  <img
    src={homeImg}
    alt="Sliding Left Image"
    className="absolute -bottom-5 left-0 w-96  md:top-36 object-cover slide-in-left "
  />
</div>




        <div className="relative overflow-hidden hidden lg:block">
          <div     className="object-cover rounded-xl  h-72 ml-40 w-full bg-slate-200 mt-20 lg:mt-0"  />
        </div>
      </div>
</>

  )}

export default ServicesLayout;
