import eFamPic from '../public/samantha-borges-q3zZHY5GHu0-unsplash.jpg'
import Image from 'next/image'
import Link from 'next/link'

export const Efam = () => {
  return (
    <div className='pl-20'>
      <div className='max-w-sm bg-white rounded-xl shadow-md overflow-hidden md:max-w-sm'>
        <div>
          <div className='max-w-md'>
            <Image height='295' width='440' src={eFamPic} alt='eFam photo' />
          </div>
          <Link href='/egroups/elevationonline' passHref>
            <div className='p-8 hover:bg-gray-200 hover:shadow-lg cursor-pointer'>
              <div className='tracking-wide text-xl text-black-500 font-bold'>
                eFam
              </div>
              <p className='mt-2 text-gray-500'>
                I'm a part of the online community.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
