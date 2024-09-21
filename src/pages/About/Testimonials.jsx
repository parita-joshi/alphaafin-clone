import React, { useState, useEffect } from 'react';
import './testiminialCarasoul.scss';
import ceo1 from "../../assets/images/ceo1.jpg"
import ceo2 from "../../assets/images/ceo2.jpg"
import ceo3 from "../../assets/images/ceo3.jpg"



const testimonials = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    name: 'John Doe',
    title: 'CEO',
    imgSrc:ceo1
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    name: 'John Doe',
    title: 'CEO',
    imgSrc: ceo2
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    name: 'John Doe',
    title: 'CEO',
    imgSrc: ceo3
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container px-10">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="carousel-slide">
            <div className="testimonial">
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-text">{testimonial.text}</div>
              <cite className="testimonial-footer">
                <span className="testimonial-name">{testimonial.name}</span>
                <span className="testimonial-title">{testimonial.title}</span>
              </cite>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TestimonialsCarousel;
