import React from 'react';
import founder from "../../assets/images/pawan.jpg"
import icon from "../../assets/images/img-icon-02-1.png"
import bgImng from "../../assets/images/img-section-03-min-1.jpg"
import SocialmediaIcons from '../../components/SocialmediaIcons';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import contact from "../../assets/images/phone.jpg"
import "../../style.scss"

const FounderSection = () => {
  return (<>
    <section className="bg-white pt-32 lg:py-16  ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="">
            <img src={icon} className='h-16'></img>
          </div>
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-center text-heading">Meet our Founder</h2>
          </div>

          <div className="bg-white rounded-xl  border-b-4 border-[#FF9021]  overflow-hidden">
            <div className="flex flex-col  items-center justify-center">
              <img src={founder} className="h-80 " alt="icon" />
              <div className="font-bold text-xl mt-8 w-full text-center text-heading">Mr. Pawan Punjabi</div>
            </div>

            <p className="text-content text-center whitespace-pre-line text-[17px] leading-7 break-words mb-10">
              Founder
            </p>
          </div>
        </div>
      </div>
    </section>



    <div className="flex lg:flex-row flex-col px-10 md:px-80 lg:px-40">

      <div className="bg-white p-6  flex-1">
        <div className="container mx-auto max-w-screen-lg">

          <div className=" mb-8">
            <h3 className="text-4xl font-bold mb-2 ">Contact Us</h3>
            <p className="text-gray-600">Please feel free to ask if you have any further questions.</p>
          </div>


          <ul className="space-y-4 mb-8">
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-orange-500" />
              <span className='font-bold'>Sydney, Australia</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-orange-500" />
              <span className='font-bold'>0468328227</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaClock className="text-orange-500" />
              <span className='font-bold'>Mon - Fri: 9:00am - 5:00pm</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaClock className="text-orange-500" />
              <span className='font-bold'>Weekend Appointments Only</span>
            </li>
          </ul>

          <SocialmediaIcons />

        </div>
      </div>


      <div className="flex-1 p-6">
        <img src={contact} alt="Contact Us" className="w-full h-full lg:h-[330px] " />
      </div>
    </div>
















  </>

  );
};

export default FounderSection;
