import React from 'react'
import Service from '@/components/ui/Service'
export default function Home() {
  return (
    <>
      <main>
        {/* introduce */}
        <section className='hero'><h1></h1></section>
        {/* Offer */}
        <section className='container offer flex items-center justify-between h-17 px-5 rounded-b-[18px]'>
          <h2 className='text-[27px] font-semibold text-white'>🎉 حراجی پرگاران آغاز شد!!!</h2>
          <a href="" className='bg-white border-2 font-semibold border-white rounded-lg px-6 py-2 text-[var(--mainOrange)] hover:bg-[var(--mainOrange)] hover:text-white'>رفتن به حراجی</a>
        </section>
        {/* Slider */}
        <section className='slider'></section>
        {/* Services */}
        <section className='services container mt-11'>
          <div className='grid grid-cols-5 gap-5'>
            <Service />
          </div>
        </section>
      </main>
    </>
  )
}
