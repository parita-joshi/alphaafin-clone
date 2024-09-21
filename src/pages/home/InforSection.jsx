import React from 'react';
import "../../style.scss"
import Card from '../../components/Card';

const InfoSection = () => {
  return (
    <div className="bg-[#2A2C38] py-12 border-orange-500 border-t-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 transform animate-slide-up-card">
      <Card
          title="Our Story"
          content="Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way."
          linkText="KNOW MORE"
          linkHref="#"
        />
        <Card
          title="Our Mission"
          content="At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success."
        />
      </div>
    </div>
  );
};

export default InfoSection;
