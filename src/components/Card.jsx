// src/components/Card.js
import React from 'react';

const Card = ({title, content, linkText, linkHref }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 pt-10 border-b-4 border-orange-500">
      <h2 className="text-2xl font-bold mb-4 text-heading  leading-7">{title}</h2>
      <p className="text-content mb-6  leading-8">{content}</p>
      {linkText && linkHref && (
        <a href={linkHref} className="font-bold text-content ">{linkText}</a>
      )}
    </div>
  );
};

export default Card;
