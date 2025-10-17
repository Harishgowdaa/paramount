import React, { useState, useEffect } from 'react';
import carousel1 from '../assets/images/about/carousel-1.jpg';
import carousel2 from '../assets/images/about/carousel-2.jpg';
import carousel3 from '../assets/images/about/carousel-3.jpg';

const images = [carousel1, carousel2, carousel3];

const MiniCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="absolute left-3 bottom-2 z-20 rounded-xl shadow-lg p-2 flex items-center justify-center w-40 h-48">
      <div className="relative w-44 h-40">
        <img
          src={images[current]}
          alt={`Carousel ${current + 1}`}
          className="w-full h-full object-cover rounded-lg border border-white/10 shadow"
        />
      </div>
    </div>
  );
};

export default MiniCarousel;
