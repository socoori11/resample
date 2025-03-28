// src/com/ImageSlider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      spaceBetween={10}
      slidesPerView={1}
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img src={src} alt={`slide-${idx}`} className="slider-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
