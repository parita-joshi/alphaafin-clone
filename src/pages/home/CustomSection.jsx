import React from 'react';
import familyImg from "../../assets/images/img.jpg";
import home from '../../assets/images/homeIcon.png';
import "../../style.scss"

const CustomSection = () => {
  return (
    <>
<div className='relative h-screen'>
<div className='hidden lg:block bg-[#2A2C38]  h-1/2 absolute top-0 left-0 w-full z-10'>

</div>
<div className="bg-[#22232D] my-5 lg:my-20 lg:ml-32  h-screen rounded-3xl text-white flex flex-col md:flex-row relative z-10 -mr-12">

      {/* Left Section */}
      <div className="md:w-1/2 flex items-center justify-center md:justify-start">
        <div className="pl-20">
          {/* Icon and Text */}
          <div>
            <img
              src={home}
              alt="Family"
              className="rounded-lg h-10"
            />
          </div>
          <h2 className="text-5xl font-bold">We Believe You're Bright</h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 flex flex-col items-center slide-in-right"> {/* Increase width to 2/3 */}
        {/* Image */}
        <div className="w-full h-[80%]">
          <img
            src={familyImg}
            alt="Family"
            className="rounded-lg h-full w-full object-cover"
          />
        </div>

        {/* Stats Boxes */}
        <div className="flex justify-between w-full px-24 mt-4 gap-7">
  {/* Lenders Box */}
  <div className="bg-white text-black rounded-2xl h-48 w-72 bottom-1/2 relative hover:border-b-heading border-b-orange-500 border-b-8 shadow-md flex flex-col items-center justify-center
      transform transition-transform duration-1000 hover:-translate-y-6">
    <h2 className="text-4xl font-bold">320+</h2>
    <h2 className="text-xl font-bold">Lenders</h2>
  </div>

  {/* Experience Box */}
  <div className="bg-white text-black rounded-2xl h-48 w-72 bottom-1/3 relative hover:border-b-heading border-b-orange-500 border-b-8 shadow-md flex flex-col items-center justify-center
      transform transition-transform duration-1000 hover:-translate-y-6">
    <h2 className="text-4xl font-bold">20+</h2>
    <h2 className="text-xl font-bold">Years Experience</h2>
  </div>
</div>

      </div>
    </div>
    </div>

    </>
  );
};

export default CustomSection;
