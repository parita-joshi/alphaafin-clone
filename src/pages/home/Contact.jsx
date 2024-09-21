import React from 'react';
import contact from "../../assets/images/phone.jpg"
import "../../style.scss"
import SocialmediaIcons from '../../components/SocialmediaIcons';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaGitlab, FaTwitter, FaTelegram, FaWordpress, FaViber } from 'react-icons/fa';

const Contact = () => {
  return (
<div className="flex lg:flex-row flex-col px-40">

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

<SocialmediaIcons/>

    </div>
  </div>


  <div className="flex-1 p-6 slide animate-slide-up">
    <img src={contact} alt="Contact Us" className="w-full h-full lg:h-[330px] " />
  </div>
</div>

  );
};

export default Contact;
