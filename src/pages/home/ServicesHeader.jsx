import React from 'react';
import "../../style.scss"

const ServicesHeader = () => {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-8 bg-slate-50">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center w-full">
          {/* Spacer */}
          <div className="h-8"></div>

          {/* Icon Box */}
          <div className="flex flex-col items-center text-center text-5xl font-bold text-heading">
              Our services
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;
