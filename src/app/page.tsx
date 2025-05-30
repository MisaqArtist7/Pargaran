import React from 'react'
import Service from '@/components/ui/Service'
import ProductSlider from '@/components/ui/Product';
export default function Home() {
  return (
    <>
      <main>
        {/* introduce */}
        <section className='hero'><h1></h1></section>
        {/* Offer */}
        <section className='container offer flex items-center justify-between h-17 px-5 rounded-b-[18px]'>
          <h2 className='text-[27px] font-semibold text-white'>🎉 حراجی پرگاران آغاز شد!!!</h2>
          <a href="" className='bg-white border-2 font-semibold border-white rounded-lg px-6 py-2 text-[var(--mainBlue)] hover:bg-[var(--mainBlue)] hover:text-white'>رفتن به حراجی</a>
        </section>
        {/* Slider */}
        <section className='slider container my-11'>
            <ProductSlider />
        </section>
        {/* Services */}
        <section className='services container mt-11'>
          <h2 className='font-semibold text-3xl my-5 text-center text-[var(--text-gray)]'>سرویس های ما</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 rounded-l-full border-t-3 p-3 border-[var(--mainOrange)]">
            <Service />
          </div>
        </section>
      </main>
    </>
  )
}
