import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import logo from '../data/b16_logo_clear.png'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 w-full py-3 bg-[#1E1E1E] text-white">
      <div className="flex items-center justify-start mx-16">
        <Image
          src={logo}
          width={48}
          height={48}
          alt='company logo'
          style={{
            marginRight: '0.5em'
          }}
        />
        <Link href='/' arai-label='home'>
          <div className='flex items-center justify-between'>
            <p className="text-lg font-sans font-bold">Base16 Inc.</p>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header;