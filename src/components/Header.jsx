import React from 'react';
import { MapIcon, PhoneIcon, ClockIcon } from '../assets/svgIcons'; // Import all icons from a single file

const Header = () => {
    const headerItems = [
      { icon: <MapIcon />, text: "Sydney, Australia" },
      { icon: <PhoneIcon />, text: "0468328227" },
      { icon: <ClockIcon />, text: "Mon - Fri: 9:00am - 5:00pm" },
      { icon: <ClockIcon />, text: "Weekends Appointments Only" },
    ];

    return (
      <div className="bg-[#2a2c38] text-base  text-white  mx-auto p-4 flex flex-col md:flex-row items-center  gap-8 justify-end pr-20 lg:pr-40">
        {headerItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2"
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    );
  };


export default Header;
