import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between mx-12 border-y-10 border-t-black-400 mx-16 py-16">
      <div className='flex'>
        <Link href='/' arai-label='home'>
          <div className='flex items-center justify-between mr-3'>
            <p>Base16 Logo</p>
          </div>
        </Link>
        <a className='mr-3' href='mailto:support@base-16.com'>support@base-16.com</a>
        <Link href='https://www.linkedin.com/company/base16-inc/about/'>LinkedIn</Link>
      </div>
      <div className='flex'>
        <p className='mr-2'>Copyright @</p>
        <strong>Base-16 Inc.</strong>
      </div>
    </footer>)
}

export default Footer;