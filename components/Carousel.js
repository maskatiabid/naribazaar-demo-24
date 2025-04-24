'use client';

import { useEffect, useState } from 'react';

const images = [
  '/ads/offer1.jpg',
  '/ads/offer2.jpg',
  '/ads/offer3.jpg',
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 rounded-xl overflow-hidden shadow-lg">
      <img src={images[index]} alt={`Ad ${index + 1}`} className="w-full h-64 object-cover" />
    </div>
  );
}
