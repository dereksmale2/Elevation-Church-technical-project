import eFamPic from '../public/samantha-borges-q3zZHY5GHu0-unsplash.jpg'
import Image from 'next/image'
import Link from 'next/link'

export const Efam = () => {
  return (
    <div>
      <div className='object-right max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        <div className='md:flex'>
          <div className='md:flex-shrink-0'>
            <Image src={eFamPic} alt='eFam photo' />
          </div>
          <Link href='/egroups/elevationonline' passHref>
            <div className='p-8 hover:bg-gray-200 hover:shadow-lg cursor-pointer'>
              <div className='uppercase tracking-wide text-sm text-black-500 font-bold'>
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
