import campusCommunityPic from '../public/hannah-busing-FF049vNP1eg-unsplash.jpg'
import Image from 'next/image'
import Link from 'next/link'

export const CampusCommunity = () => {
  return (
    <div>
      <h2 className='uppercase text-center pt-10'>Choose your community</h2>
      <h5 className='text-center text-gray-500 pt-1'>
        Whether you are visiting a local campus community or joining us online
        for the very first time, we can't wait to connect with you!
      </h5>
      <div className='object-left max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        <div className='md:flex'>
          <div className='md:flex-shrink-0'>
            <Image src={campusCommunityPic} alt='campus community photo' />
          </div>
          <Link href='/egroups/nocampus' passHref>
            <div className='p-8 hover:bg-gray-200 hover:shadow-lg cursor-pointer'>
              <div className='uppercase tracking-wide text-sm text-black-500 font-bold'>
                Campus Community
              </div>
              <p className='mt-2 text-gray-500'>
                I'm a part of a local campus community.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
