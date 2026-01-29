import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import linkedin_logo from '../data/linkedin_logo.png'
import logo from '../data/b16_logo_clear.png'

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-y-10 border-t-black-400 py-8 bg-[#181818] text-white">
      <div className="flex justify-between mx-16">
        <div className='flex'>
          <Link href='/' arai-label='home'>
            <div className='flex items-center justify-between'>
              <Image
                src={logo}
                width={30}
                height={30}
                alt='company logo'
                style={{
                  marginRight: '1em'
                }}
              />
            </div>
          </Link>
          <a className='mr-3' href='mailto:support@base-16.com'>support@base-16.com</a>
        </div>
        <div className='flex'>
          <Link href='https://www.linkedin.com/company/base16-inc/about/'>
            <Image
              src={linkedin_logo}
              width={30}
              height={30}
              alt='linkedin logo'
              style={{
                marginRight: '1em'
              }}
            />
          </Link>
          <p className='mr-2'>Copyright @</p>
          <strong>Base-16 Inc.</strong>
        </div>
      </div>
    </footer>)
}

export default Footer;