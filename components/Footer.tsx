import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import logo from '../data/b16_logo_clear.png'

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-y-10 border-t-black-400 py-8 bg-[#1E1E1E] text-white">
      <div className="flex justify-between mx-16">
        <div className='flex items-center'>
          <Link href='/' arai-label='home'>
              <Image
                src={logo}
                width={30}
                height={30}
                alt='company logo'
                style={{
                  marginRight: '0.5em'
                }}
              />
          </Link>
          <a className='mr-3' href='mailto:support@base-16.com'>support@base-16.com</a>
        </div>
        <div className='flex items-center'>
          <p className='mr-2 text-sm'>© 2026 Base16 Inc. All Rights Reserved</p>
        </div>
      </div>
    </footer>)
}

export default Footer;