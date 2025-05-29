import React from 'react'

export default function Home() {
  return (
    <>
      <header className='header bg-white py-5'>
        {/* کانتینر اصلی هدر */}
        <div className='header__container container flex items-center justify-between'>
          
          {/* بخش لوگو و فرم جستجو */}
          <div className='header__left flex-row-center gap-x-3'>
            <img src="images/logo.jpg" alt="لوگو" className='header__logo w-36 h-auto' />
            
            <form action="" className='header__search-form flex items-center justify-between gap-x-1 bg-[#F3F3F3] rounded-md p-3 w-[444px]'>
              <input type="search" placeholder='دنبال چی هستی؟' className='header__search-input' />
              <button type='submit' className='header__search-button'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </form>
          </div>
          
          {/* بخش آیکون سبد خرید و دکمه ورود */}
          <div className='header__right flex-row-center gap-x-3'>
            <a href="" className='header__cart relative'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className='header__cart-count absolute -top-1 -right-1 w-4 h-4 text-xs text-white bg-amber-600 flex-row-center rounded-full'>0</span>
            </a>
            
            <a href="" className='header__login flex-row-center gap-x-1 px-4 py-2 rounded border bg-[#E7632B] text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              ورود و عضویت
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
