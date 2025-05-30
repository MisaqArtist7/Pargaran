'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Service() {
    const [services] = useState([
        {id:1, title: 'ضمانت بازگشت کالا', img:"/images/return.jpg"},
        {id:2, title: 'ضمانت اصل بودن کالا', img:"/images/original.jpg"},
        {id:3, title: 'مقالات ارزشمند', img:"/images/article.jpg"},
        {id:4, title: 'فروشنده شوید', img:"/images/seller.jpg"},
        {id:5, title: 'پشتیبانی فنی محصولات', img:"/images/support.jpg"}
    ])
  return (
        <>
        {services.map((service) => (
            <div key={service.id} className='relative bg-white hover:cursor-pointer shadow-xs hover:shadow-[var(--primaryShadow)] flex-col-center gap-y-2 p-5 rounded-md border-b-2 border-[var(--mainOrange)]'>
                <Image src={service.img} alt="" width={88} height={88}/>
                <h2>{service.title}</h2>
                <span className='absolute -right-1 bg-[var(--mainOrange)] h-17 w-1 block rounded-r-full'></span>
            </div>
        ))}
        </>
  )
}
