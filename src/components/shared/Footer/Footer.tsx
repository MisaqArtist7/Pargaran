import React from 'react'
import './footer.css'
import Image from 'next/image';
import { MapIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <>
    <div className="w-full overflow-hidden">
    <svg
        className="w-full h-auto"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
    >
        <path
        fill="#ffffff"
        d="M0,32 C360,80 1080,0 1440,48 L1440,100 L0,100 Z"
        />
    </svg>
    </div>

    <footer className='footer flex flex-col bg-[#ffffff]'>

        <div className="container mb-11 grid grid-cols-1 md:grid-cols-4 gap-11 ">
            <div className='relative'>
                <h3 className="text-xl font-semibold block mb-2 pr-5">درباره ما</h3>
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                پرگاران در تلاش است تا با ارائه بهترین و با کیفیت ترین محصولات با ضمانت اصل بودن کالا و بازگشت ۷ روزه کالا، محصولات صنعتی و ابزار دقیق و... را به دست مصرف‌کنندگان (مشتریان) برساند.
                </p>
                <span className='absolute top-2 right-0 w-3 h-3 block rounded-full bg-[var(--mainOrange)]'></span>
            </div>

            <div className='relative'>
                <h3 className="text-xl font-semibold block mb-2 pr-5">ارتباط باما</h3>
                <div className='flex justify-center gap-x-2'>
                    <MapIcon className='w-8 h-8'/> 
                    <span className='text-sm text-gray-700 leading-relaxed'>تهران، خیابان ولیعصر، بعد از پل همت، بن بست سید الشهدا، پلاک ۳، واحد ۱</span>
                </div>
                <div className='flex items-center gap-x-1 my-2'>
                    <EnvelopeIcon className='w-5 h-5'/> 
                    <span className='text-sm text-gray-700 leading-relaxed'>info@pargaran.com</span>
                </div>
                <div className='flex items-center gap-x-1 my-2'>
                    <PhoneIcon className='w-5 h-5'/> 
                    <span className='text-sm text-gray-700 leading-relaxed'>021-6193000</span>
                </div>
                <span className='absolute top-2 right-0 w-3 h-3 block rounded-full bg-[var(--mainOrange)]'></span>
            </div>

            <div className='col-span-2 relative'>
                <h3 className="text-xl font-semibold block mb-2 pr-5">نماد ما</h3>
                <Image src="/images/symbol.png" alt="" width={122} height={150}/>
                <span className='absolute top-2 right-0 w-3 h-3 block rounded-full bg-[var(--mainOrange)]'></span>
            </div>
        </div>

        <div className='flex flex-col gap-y-6 container'>
            <div className='bg-white rounded-2xl py-5 shadow-[var(--secondaryShadow)] flex-col-center'>
                <ul className='flex-row-center *:px-4'>
                    <li><a href="">خانه</a></li>
                    <li className='border-r border-gray-300'><a href="">تماس با ما</a></li>
                    <li className='border-r border-gray-300'><a href="">فروشگاه</a></li>
                    <li className='border-r border-gray-300'><a href="">درباره ما</a></li>
                    <li className='border-r border-gray-300'><a href="">حساب کاربری</a></li>
                </ul>
            </div>
            <span className='text-center py-6'>هفت روز هفته، 24 ساعت شبانه روز پاسخگو شما هستیم       شماره تماس: 6193000-021</span>
        </div>
    </footer>
    </>
  )
}
