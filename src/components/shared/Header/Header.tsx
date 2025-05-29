import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className='header bg-white py-5 shadow-xs'>
      {/* Main container */}
      <div className='header__container container flex items-center justify-between'>
        
        {/* Logo and search section */}
        <div className='header__left flex-row-center gap-x-3'>
          <Image src="/images/logo.jpg" alt="لوگو" width={144} height={48} className='header__logo' />
          
          <form action="" className='header__search-form flex items-center justify-between gap-x-1 bg-[#F3F3F3] rounded-md p-3 w-[444px]'>
            <input type="search" placeholder='دنبال چی هستی؟' className='header__search-input' />
            <button type='submit' className='header__search-button'>
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
          </form>
        </div>
        
        {/* baseket and login section*/}
        <div className='header__right flex-row-center gap-x-3'>
          <a href="" className='header__cart relative'>
            <ShoppingBagIcon className="w-7 h-7" />
            <span className='header__cart-count absolute -top-1 -right-1 w-4 h-4 text-xs text-white bg-amber-600 flex-row-center rounded-full'>0</span>
          </a>
          
          <a href="" className='header__login flex-row-center gap-x-1 px-4 py-2 rounded border bg-[#E7632B] text-white'>
            <UserIcon className='w-6 h-6' />
            ورود و عضویت
          </a>
        </div>
      </div>
    </header>
  )
}
