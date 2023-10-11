import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import logo from '../data/b16_logo.png'

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-start py-3 px-16 bg-[#120046] text-[#FBFBFB] text-lg">
      <Image
        src={logo}
        width={30}
        height={30}
        alt='company logo'
        style={{
          marginRight: '1em'
        }}
      />
      <Link href='/' arai-label='home'>
        <div className='flex items-center justify-between'>
          <p>Base 16 Inc.</p>
        </div>
      </Link>
    </header>
  )
}

export default Header;