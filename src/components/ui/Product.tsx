// components/ui/ProductSlider.jsx
'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';

export default function ProductSlider() {
  const products = [
    { id: 1, name: 'محصول اول', img: '/images/return.jpg' },
    { id: 2, name: 'محصول دوم', img: '/images/return.jpg' },
    { id: 3, name: 'محصول سوم', img: '/images/return.jpg' },
    { id: 4, name: 'محصول چهارم', img: '/images/return.jpg' },
    { id: 5, name: 'محصول پنجم', img: '/images/return.jpg' },
    { id: 6, name: 'محصول شمم', img: '/images/return.jpg' },
  ];

  return (  
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024:{ slidesPerView: 5 },
      }}
    >
      {products.map(product => (
        <SwiperSlide key={product.id}>
          <div className="bg-white rounded-xl p-3 text-center flex-col-center shadow">
            <Image src={product.img} alt={product.name} width={100} height={150} className="rounded-lg mb-2 object-cover" />
            <h3 className="text-lg font-bold">{product.name}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
