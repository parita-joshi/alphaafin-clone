import React from 'react'
import SocialmediaIcons from './SocialmediaIcons'
const Footer = () => {
  return (
   <>
    <section className=" flex flex-wrap bg-heading p-20">
      <div className="w-full md:w-1/2 p-4">
        {/* Quick Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#FF9021]">Quick Contact</h2>
          <p className="text-white mb-6">
            At Alphaa Financial Solutions, we believe in empowering your
            property dreams with our premium financial services.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-4">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6  text-[#FF9021]" fill='currentColor'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"

                >
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg>
              </span>
              <span className='text-white'>Sydney, Australia</span>
            </li>
            <li className="flex items-center">
              <span className="mr-4">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-[#FF9021]" fill='currentColor'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>
              </span>
              <span className='text-white'>0468328227</span>
            </li>
            <li className="flex items-center">
              <span className="mr-4">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-[#FF9021]" fill='currentColor'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
                </svg>
              </span>
              <span className='text-white'>info@alphafinance.com</span>
            </li>
          </ul>
        </div>
      </div>

    <div className="w-full md:w-1/2 p-4 bg-[#22232D] rounded-xl shadow-md">
        {/* Opening Hours */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Opening Hours</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className='text-[#FF9021] font-bold '>Mon to Fri</span>
              <span className="border-b-2 border-dotted border-content mx-4 flex-grow"></span>
              <span className='text-white'>9:00am | 5:00pm</span>
            </li>
            <li className="flex justify-between items-center">
              <span className='text-[#FF9021] font-bold '>Sat to Sun</span>
              <span className="border-b-2 border-dotted border-content mx-4 flex-grow"></span>
              <span className='text-white'>Appointments Only</span>
            </li>
          </ul>
        </div>
        {/* Schedule Button */}
        <div className="mt-12">
          <a
            href="#"
            className="bg-[#FF9021] text-heading font-bold hover:bg-slate-50 py-2 w-full rounded shadow transition text-center block"

          >
            Schedule a visit
          </a>
        </div>
      </div>
    </section>





    <section className=" flex border-t-8 border-x-8  p-8 flex-wrap bg-heading px-20 border-[#22232D] text-white">
      <div className="w-full md:w-1/2">
        {/* Quick Contact */}
        <SocialmediaIcons/>
      </div>

    <div className="w-full md:w-1/2 p-4 text-end ">
        {/* Opening Hours */}


       <h5>2024 © All Rights Reserved | Developed with ❤️ <a href='https://www.facebook.com/parita.joshi.1' target='_blank' className='text-[#FF9021] hover:text-slate-200'> by Parita</a> adaptation of <a href='https://alphaafin.com.au/' className='underline' target='_blank'> ALPHAA </a></h5>
      </div>
    </section>
   </>
  )
}

export default Footer