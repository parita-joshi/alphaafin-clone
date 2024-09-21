import icon from "../assets/images/img-icon-02-1.png"
import bgImng from "../assets/images/img-section-03-min-1.jpg"
import "../style.scss"

import React from 'react'

const FooterSection = () => {
  return (
    <section
    className="relative py-16 "
    style={{ backgroundImage: `url(${bgImng})` }}
    >      <div className="absolute inset-0 bg-yellow-500 opacity-50"></div>
      <div className="relative flex flex-col justify-center items-center  mx-auto px-4">

      <img src={icon} className='h-20'></img>

        <div className="text-center">
          {/* Spacer */}

          {/* Heading */}
          <h2 className="text-5xl mt-5 font-bold  text-heading animate__animated animate__fadeInUp">Talk To PAWAN Now!</h2>

          {/* Button */}
          <div className="my-8 animate-slide-up-card">
            <a href="#" className="inline-block bg-white text-heading py-4 px-8 rounded-lg text-lg
            font-semibold transition-transform transform hover:scale-110 animate__animated animate__fadeInUp animate__delay-200ms duration-1000 ">
              Contact us
            </a>
          </div>

          {/* Additional Heading */}
          <div className="text-xl text-heading mb-4 font-medium">Feel Free to Get in Touch for a No Obligations <a href='#' className='underline'>  Call <b>PAWAN</b> !!!</a></div>


        </div>
      </div>
    </section>
  )
}

export default FooterSection
