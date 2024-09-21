import React from 'react'
import icon from "../../assets/images/homeIcon.png"
import img from "../../assets/images/aboutus.jpg"
import "../../style.scss"

const Header = () => {
  return (
        <section className="bg-white   text-heading px-24 lg:px-40">
            <h2 className="lg:text-5xl text-3xl font-semibold">About Us</h2>
          <div className="container mx-auto px-4">
            {/* Spacer */}
            <div className="lg:my-8 my-4"></div>



            {/* Heading */}
            <div className="flex flex-col justify-center items-center text-center gap-4 md:py-5 mb-10 md:mb-16">

            {/* Spacer */}

            <img src={icon} className='h-8 w-20'></img>

              <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold  transform animate-slide-up-card">We believe you’re bright</h2>
            </div>

            {/* Inner Section */}
            <div className="flex flex-wrap -mx-4">
              {/* Left Column */}
              <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0  transform slide-in-left">
                <div className="animate-fadeInLeft">
                  <img
                    src={img}
                    alt="Mission"
                    className="w-full h-auto rounded-xl border-b-8 border-r-8 border-[#FF9021] border-r-[#FF9021]"
                  />
                  <h4 className="mg:text-2xl text-xl font-semibold mt-4">Our Mission</h4>
                  <p className="mt-4 md:text-lg text-content md:leading-7">
                    Our mission is to provide our clients with tailored financial solutions that cater to their unique needs. We strive to make the process of securing a mortgage as straightforward and stress-free as possible, guiding you through every step with transparency and integrity.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-1/2 md:px-12 transform slide-in-right">
                <div className="animate-fadeInRight">
                  <h3 className="md:text-3xl text-2xl font-semibold mb-4">Welcome to Alphaa Financial Solutions</h3>
                  <p className="md:text-lg mb-12  text-content md:leading-7">
                    At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. Established with a vision to provide seamless loan processing and financial advisory, we have grown to become a trusted name in the Australian mortgage industry.
                  </p>
                  <h4 className="text-2xl font-semibold mb-4">Our Story 🙂</h4>
                  <p className="text-lg  text-content leading-7">
                    Alphaa Financial Solutions was born out of a desire to simplify the complexities of property financing. Our founder, Mr. Pawan Punjabi, envisioned a company where customer-centricity and financial expertise go hand in hand. Over the years, we have helped thousands of Australians achieve their dream of owning a home, thanks to our unwavering commitment to excellence and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


  )
}

export default Header