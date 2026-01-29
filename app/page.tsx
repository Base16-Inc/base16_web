import Image from 'next/image'
import Link from 'next/link'
import logo from '../data/b16_logo.png'
import stuLogoPic from '../data/stu_logo.png'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-full bg-[#181818] text-[#FBFBFB]'>
      <div className='flex flex-row items-center justify-center gap-64'>
        <section className='flex flex-col items-center'>
          <Image
            src={logo}
            alt='Base16 logo'
            width={256}
            height={256}
            unoptimized
            className='rounded-3xl'
            style={{
              marginBottom: '1.5em'
            }}
          />
          <h1 className='text-3xl font-bold'>Base16 Inc.</h1>
        </section>
        <section className='flex flex-col items-center'>
          <Link 
            href='https://www.swingtuneup.com' 
            target='_blank' 
            className='flex flex-col items-center justify-center transition-colors'
          >
            <Image 
              src={stuLogoPic} 
              width={256}
              height={256}
              alt='Swing Tune-Up logo' 
              className='rounded-3xl'
              style={{
                marginBottom: '1.5em'
              }}
            />
            <h1 className='text-3xl font-bold'>Swing Tune-Up</h1>
          </Link>
        </section>
      </div>
    </div>
  )
}
