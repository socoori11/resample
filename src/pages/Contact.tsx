// src/pages/Contact.tsx
import React from 'react';
import ImageSlider from '../com/ImageSlider';
import './contact.css';

const imageUrls = [
  '/image/image1.jpg',
  '/image/image2.jpg',
  '/image/image3.jpg',
  '/image/image4.jpg'
];

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">📬 Contact Us</h2>
      <p className="contact-text">상담이 필요하면 언제든 연락주세요</p>
      <div className="slider-wrapper">
        <ImageSlider images={imageUrls} />
      </div>

     <div className="marquee">
        <p> HELLO HAPPYDAY A </p>
      </div>
    </div>
  );
};

export default Contact;
