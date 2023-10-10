import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-3 px-16 bg-[#120046] text-[#FBFBFB] text-lg">
      <Link href='/' arai-label='home'>
        <div className='flex items-center justify-between'>
          <p>Base16 Logo</p>
        </div>
      </Link>
      <div className="flex items-center leading-5 space-x-4">
        <Link href='/support'>Support</Link>
        <Link href='/privacy'>Privacy</Link>
      </div>
    </header>
  )
}

export default Header;