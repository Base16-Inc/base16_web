import Image from 'next/image'
import Link from 'next/link'
import andrewProfilePic from '../data/andrew_profile.jpeg';
import danielProfilePic from '../data/daniel_profile.jpeg';
import smProfilePic from '../data/sm_profile.jpeg';

export default function Home() {
  return (
    <>
      <div className='text-[#FBFBFB]'>
        <section className='bg-[#525252] py-16'>
          <div className='container mx-auto max-w-xl'>
            <h1 className='font-bold text-6xl leading-tight mb-3'>Building cool software, one line at a time</h1>
            <p className='mb-3'>Base16 is committed to build something cool and useful.</p>
          </div>
        </section>
        {/* <section className='flex flex-col content-center items-center py-16'>
          <div className='flex flex-col content-center text-center max-w-2xl mb-7'>
            <h3 className='text-4xl mb-3'>Product</h3>
            <p className='text- mb-3'>Swing, record, and watch the replay - hands-free.</p>
            <p>We know getting the right swing requires your focus, so we’ve designed Swing Tune-up to be completely hands-free - just set it up once for your practice session. It will automatically capture your swings and provide instant replays without you ever having to touch your phone.</p>
          </div>
          <ul className='flex flex-wrap mx-auto max-w-screen-lg mb-16'>
            <li className='flex flex-col flex-1 p-7 mr-3 rounded-sm bg-[#f4f4f4]'>
              <h5 className='font-bold mb-7'>Automatic Swing Capture</h5>
              <p>Free yourself from manual recording and video editing of your practice session. Instead, let STU automatically capture your swings ass separate videos.</p>
            </li>
            <li className='flex flex-col flex-1 p-7 mr-3 rounded-sm bg-[#f4f4f4]'>
              <h5 className='font-bold mb-7'>Instant Replay</h5>
              <p>Watch your replay immediately to spot mistakes and make adjustments during your practice session.</p>
            </li>
            <li className='flex flex-col flex-1 p-7 rounded-sm bg-[#f4f4f4]'>
              <h5 className='font-bold mb-7'>State-of-the-art ML</h5>
              <p className='text- mb-3'>STU’s ML engine detects your pose in real-time; it enables STU to see your swing live and to provide metrics immediately after you’ve made your swing.</p>
            </li>
          </ul>
          <div className='flex flex-col content-center text-center max-w-2xl mb-7'>
            <h3 className='text-4xl mb-3'>Mission Statement</h3>
            <p>Base16’s mission is to support candidates and companies by providing the tools and information that they need to make informed decisions about where to work and whom to hire. That means:</p>
          </div>
        </section> */}
        <section className='flex flex-col content-center items-center py-16 bg-[#120046]'>
          <h3 className='text-4xl mb-3'>Swing Tune-Up</h3>
          <p className='mb-3'>Swing Tune-Up is a tool/community for golfers to help them improve faster.</p>
          <Image src='https://placehold.co/600x400/png' width={600} height={400} alt='golf app screen shot' style={{
            objectFit: 'cover',
            marginBottom: '2.5em'
          }} />
          <Link href='https://www.swingtuneup.com' target='_blank' className='rounded-full inline-block text-center p-2 px-6 bg-[#A671FF]'>Go to Swing Tune-Up Website</Link>
        </section>
        <section className='flex flex-col content-center items-center py-16 bg-[#120046]'>
          <h3 className='text-4xl mb-3'>Team</h3>
          <ul className='flex flex-wrap items-center justify-center m-auto max-w-screen-lg my-16'>
            <li className='flex flex-col items-center justify-center basis-1/3 min-w-[30%] px-10'>
              <Image
                src={danielProfilePic}
                alt='picture of Daniel'
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '250px',
                  marginBottom: '1.5em'
                }}
              />
              <span>Daniel - Founder, CEO</span>
            </li>
            <li className='flex flex-col items-center justify-center basis-1/3 min-w-[30%] px-10'>
              <Image
                src={andrewProfilePic}
                alt='picture of Andrew'
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '250px',
                  marginBottom: '1.5em'
                }}
              />
              <span>Andrew - Co-Founder, Dev</span>
            </li>
            <li className='flex flex-col items-center justify-center basis-1/3 min-w-[30%] px-10'>
              <Image
                src={smProfilePic}
                alt='picture of Sngmin'
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '250px',
                  marginBottom: '1.5em'
                }}
              />
              <span>Sngmin - Co-Founder, Dev</span>
            </li>
          </ul>
        </section>
        <section className='flex flex-col content-center items-start mx-auto py-16 bg-[#525252]'>
          <div className='container mx-auto max-w-xl'>
            <h3 className='text-4xl mb-3'>Contact Us</h3>
            <p className='mb-3'>Reach out to us for any questions!</p>
            <a className='rounded-full inline-block text-center p-2 px-6 bg-[#A671FF]' href='mailto:support@base-16.com?subject=Mail from Base16 Site' target='_blank'>Email Us</a>
          </div>
        </section>
      </div>
    </>
  )
}
