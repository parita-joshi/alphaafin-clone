/**
 * @author Parita Purohit
 * @component
 * @name Navbar
 * @example  <Navbar />
 * @description A responsive navigation bar component with a logo, main menu items,
 * and dropdown submenus. Supports desktop and mobile views with a toggleable menu
 * for smaller screens.
 * @version 1.0
 */

import React, { useState } from 'react';
import { CaretDownIcon, MenuIcon, CloseIcon } from '../assets/svgIcons';
import navbarLogo from '../assets/images/navbarLogo.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const menuItems = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT US', link: '/about' },
    {
      name: 'SERVICES',
      link: '/Services',
      subMenu: [
        { name: 'Home Loan', link: '/services' },
        { name: 'First Home Buyer', link: '/services' },
        { name: 'Refinancing', link: '/services' },
        { name: 'Commercial Loan', link: '/services' },
        { name: 'Asset Finance', link: '/services' },
        { name: 'Personal Loan', link: '/services' },
        { name: 'SMSF Lending', link: '/services' },
      ],
    },
    { name: 'FAQ’s', link: '/' },
  ];

  const handleSubMenuToggle = (index) => {
    if (openSubMenuIndex === index) {
      setOpenSubMenuIndex(null);
    } else {
      setOpenSubMenuIndex(index);
    }
  };

  return (
    <div className="relative flex justify-around py-1 bg-white shadow-sm z-10">
      <div>
        <a href="/">
          <img src={navbarLogo} alt="Logo" className="max-w-64" />
        </a>
      </div>
      <div className="flex">
        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <a href={item.link} className="text-[#2a2c38] font-semibold text-sm transition duration-300 ease-in-out hover:bg-[#2a2c38] hover:text-white flex items-center py-8 px-5">
                {item.name}
                {item.subMenu && <CaretDownIcon className="ml-1" />}
              </a>
              {item.subMenu && (
                <ul className="z-50 absolute p-0 m-0 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="p-4 w-60 px-3 text-[#2a2c38] transition duration-300 ease-in-out hover:bg-[#2a2c38] hover:text-white border">
                      <a href={subItem.link}>{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)} aria-label="Menu Toggle">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div></div>


      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="mt-4 w-full bg-white p-4 shadow-md z-10 md:hidden absolute top-20">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div
                className="flex relative justify-between items-center text-[#2a2c38] font-semibold text-sm transition duration-300 ease-in-out hover:bg-[#2a2c38] hover:text-white py-4 px-5 cursor-pointer"
                onClick={() => item.subMenu ? handleSubMenuToggle(index) : null}
              >
  <a href={item.link} onClick={(e) => item.subMenu && e.preventDefault()}><span>{item.name}</span></a>
  {item.subMenu && (
                  <CaretDownIcon
                    className={`ml-1 transform transition-transform ${
                      openSubMenuIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </div>
              {/* Submenu for mobile */}
              {item.subMenu && openSubMenuIndex === index && (
                <ul className="mt-2 bg-white border rounded-md shadow-lg z-10">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-2 px-4 text-[#2a2c38] transition duration-300 ease-in-out hover:bg-[#2a2c38] hover:text-white border-t">
                      <a href={subItem.link}>{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      )}

      <a
        href="#"
        className="hidden md:block bg-[#2a2c38] text-white px-2 lg:px-7 py-5 my-3 ml-10 rounded-md font-semibold text-xs lg:text-sm transition-transform transform duration-500 ease-in-out hover:scale-110 hover:bg-[#2a2c38]"
      >
        CALL US ANYTIME
      </a>
    </div>

  );
};

export default Navbar;



