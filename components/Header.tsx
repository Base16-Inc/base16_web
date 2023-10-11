import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-start py-3 px-16 bg-[#120046] text-[#FBFBFB] text-lg">
      <Image
        src='https://placehold.co/30x30/png'
        width={30}
        height={30}
        alt='company logo'
        style={{
          marginRight: '1em'
        }}
      />
      <Link href='/' arai-label='home'>
        <div className='flex items-center justify-between'>
          <p>Base16 Logo</p>
        </div>
      </Link>
    </header>
  )
}

export default Header;