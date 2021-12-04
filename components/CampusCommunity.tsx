import campusCommunityPic from '../public/hannah-busing-FF049vNP1eg-unsplash.jpg'
import Image from 'next/image'
import Link from 'next/link'

export const CampusCommunity = () => {
  return (
    <div className='pl-72'>
      <div className='max-w-sm bg-white rounded-xl shadow-md overflow-hidden md:max-w-sm'>
        <div>
          <div className='max-w-sm'>
            <Image src={campusCommunityPic} alt='campus community photo' />
          </div>
          <Link href='/egroups/nocampus' passHref>
            <div className='p-8 hover:bg-gray-200 hover:shadow-lg cursor-pointer'>
              <div className='tracking-wide text-xl text-black-500 font-bold'>
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
