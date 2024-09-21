import React from 'react';

const Card = ({ icon, componenetName, title, content, linkText, linkHref }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 border-b-4 border-orange-500 mb-10 md:h-[450px] overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img src={icon} className="h-14 w-14" alt="icon" />
        <div className="font-bold text-xl mb-4 w-full text-center text-heading">{title}</div>
      </div>

      <div className="mt-4 border-t border-heading border-spacing-2 pt-4"></div>

      <p className="text-content mt-4 whitespace-pre-line text-[17px] leading-7 break-words">
        {content}
      </p>

      {linkText && linkHref && (
        <a href={linkHref} className="font-bold text-heading">{linkText}</a>
      )}
    </div>
  );
};

export default Card;
