import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <section className='bg-[#f4f4f4] py-16'>
          <div className='container mx-auto max-w-xl'>
            <h1 className='font-bold text-7xl leading-snug mb-3'>Rock-solid swing, <br />faster</h1>
            <p className='mb-3'>Swing Tune-up helps you get ahead with your golf swings. Perfect your swing faster than ever!</p>
            <span className='block mb-7'>Be the first to accelerate your progress!</span>
            <Link href='#' className='rounded-full inline-block text-center p-2 px-6 bg-[#B6B6B6]'>Download for iOS</Link>
          </div>
        </section>
        <section className='flex flex-col content-center items-center py-16'>
          <div className='flex flex-col content-center text-center max-w-2xl mb-7'>
            <h3 className='text-4xl mb-3'>About Base16</h3>
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
        </section>
        <section>
          {/* Empty Section */}
        </section>
        <section className='flex flex-col content-center items-center py-16'>
          <h3 className='text-4xl mb-3'>Base16 Product</h3>
          <p>Analyze your swing frame by frame, with automatic annotations to assist you in spotting areas of potential improvement.</p>
          <div></div>
        </section>
        <section className='flex flex-col content-center items-center py-16'>
          <h3 className='text-4xl mb-3'>Team</h3>
          <p>Analyze your swing frame by frame, with automatic annotations to assist you in spotting areas of potential improvement.</p>
          <ul className='flex flex-wrap items-center justify-center m-auto max-w-screen-lg my-16'>
            <li className='flex justify-center basis-1/3 bg-[#f4f4f4] min-w-[30%] p-10 py-20'>Member 1</li>
            <li className='flex justify-center basis-1/3 bg-[#f4f4f4] min-w-[30%] p-10 py-20'>Member 2</li>
            <li className='flex justify-center basis-1/3 bg-[#f4f4f4] min-w-[30%] p-10 py-20'>Member 3</li>
            <li className='flex justify-center basis-1/3 bg-[#f4f4f4] min-w-[30%] p-10 py-20'>Member 4</li>
            <li className='flex justify-center basis-1/3 bg-[#f4f4f4] min-w-[30%] p-10 py-20'>Member 5</li>
          </ul>
        </section>
        <section className='flex flex-col content-center items-start mx-auto max-w-xl py-16'>
          <span className='block mb-7'>Download now and start practicing</span>
          <h2 className='font-bold text-7xl leading-tight mb-7'>Make your practice count with STU.</h2>
          <Link href='#' className='rounded-full inline-block text-center p-2 px-6 bg-[#B6B6B6]'>Download for iOS</Link>
        </section>
      </div>
    </>
  )
}
