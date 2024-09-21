import React from 'react';
import bgImg from "../../assets/images/servicebg.jpg";
import icon from "../../assets/images/down-arrow.png";
import serviceImg from "../../assets/images/serviceSliderImg-1.jpg";
import "../../style.scss";

const Services = () => {
  return (
    <div className="bg-slate-50">
      <div>
        <h2 className="text-heading text-3xl sm:text-4xl md:text-5xl font-bold py-8  px-4 sm:px-10 lg:px-40">
          First Home Buyer
        </h2>
      </div>

      <div
        className="relative  h-60 sm:h-72 lg:h-96 my-8"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center h-full px-4">
          <h2 className="text-3xl  animate-slide-up-card  sm:text-4xl md:text-5xl mt-2 sm:mt-5 mb-6 sm:mb-10 font-bold text-white">
            First Home Buyer
          </h2>
          <img
            src={icon}
            className="h-10 sm:h-12 md:h-16 animate-slide-down-card-bounce"
            alt="Down Arrow"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 px-4 sm:px-10 lg:px-20 py-6 md:py-8 lg:py-12">
        {/* Image Section */}
        <div className="mb-6 md:mb-0 animate__animated animate__fadeInUp">
          <img
            src={serviceImg}
            alt="First Home Buyer"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="animate__animated animate__fadeInUp">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-8">
            First Home Buyer at Alpha Financial Solutions
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 lg:mb-10">
            At Alpha Financial Solutions, we understand that purchasing your
            first home is one of the most significant financial decisions you’ll
            ever make. As a first-time homebuyer, navigating the complexities of
            the real estate market and mortgage options can be overwhelming.
            That’s why we offer tailored financial solutions and expert guidance
            to help you make informed decisions and achieve your dream of
            homeownership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 animate__animated animate__fadeInUp">
            <ul className="space-y-4 sm:space-y-6 lg:space-y-8">
              <li>
                <strong>Personalized Mortgage Options:</strong> We offer a range
                of mortgage products specifically designed for first-time
                buyers, including fixed-rate and adjustable-rate mortgages. Our
                financial advisors work with you to find the best loan that fits
                your budget and long-term goals.
              </li>
              <li>
                <strong>Down Payment Solutions:</strong> Struggling with the
                down payment? Alpha Financial Solutions provides access to
                various programs and strategies to help you secure the funds
                needed for your down payment, whether through savings plans,
                grants, or special loan products.
              </li>
              <li>
                <strong>Expert Financial Guidance:</strong> Our team of
                experienced financial advisors is here to support you at every
                step of the home-buying process. From understanding your budget
                to exploring mortgage options and closing the deal, we provide
                the expert advice you need to make confident decisions.
              </li>
            </ul>

            <ul className="space-y-4 sm:space-y-6 lg:space-y-8">
              <li>
                <strong>Pre-Approval Assistance:</strong> Getting pre-approved
                for a mortgage is a critical first step. We guide you through
                the pre-approval process, helping you understand how much you
                can afford and giving you a competitive edge when making an
                offer on a home.
              </li>
              <li>
                <strong>First-Time Buyer Incentives:</strong> We help you take
                advantage of government programs and incentives specifically
                designed for first home buyers, such as tax credits,
                reduced-interest loans, and grants that can lower the overall
                cost of purchasing your home.
              </li>
              <li>
                <strong>Credit Counseling:</strong> If you’re concerned about
                your credit score, we offer credit counseling services to help
                you improve your credit profile, making it easier to qualify for
                favorable mortgage terms.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=' flex flex-col lg:flex-row justify-between  items-center bg-heading animate-slide-up-card  rounded-xl h-52 m-10 '>
        <p className='text-white text-5xl font-bold mx-10 lg:w-[500px]' >How to estimate mortgage payments</p>
           {/* Button */}
           <div className="my-8 animate-slide-up-card">
            <a href="#" className="inline-block mx-10 bg-[#FF9021] hover:bg-slate-100 text-heading py-6 px-10 rounded-md
            font-semibold  ">
              INTREST RATE
            </a>
          </div>

</div>
    </div>
  );
};





export default Services;
