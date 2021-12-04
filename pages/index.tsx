import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <h2 className='uppercase'>Choose your community</h2>
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        <div className='md:flex'>
          <div className='md:flex-shrink-0'>
            <Image
              className='h-48 w-full object-cover md:w-48'
              src='/img/store.jpg'
              alt=''
              layout='fill'
            />
          </div>
          <Link href='/campuscommunity' passHref>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-sm text-black-500 font-semibold'>
                Campus Community
              </div>
              <p className='mt-2 text-gray-500'>
                I'm a part of a local campus community.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <h5>
        Whether you are visiting a local campus community or joining us online
        for the very first time, we can't wait to connect with you!
      </h5>
      <Link href='/eFam'>
        <a>
          eFam <br /> I'm a part of the online community.
        </a>
      </Link>
    </>
  )
}

export default Home
