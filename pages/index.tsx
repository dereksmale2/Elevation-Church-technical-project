import type { NextPage } from 'next'
import { CampusCommunity } from '../components/CampusCommunity'
import { Efam } from '../components/Efam'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <h1 className='text-center pt-20'>Choose your community</h1>
        <h5 className='text-center text-gray-400 pt-1 pb-20'>
          Whether you are visiting a local campus community or joining us online
          for the very first time, we can't wait to connect with you!
        </h5>
        <div>
          <CampusCommunity />
        </div>
        <div>
          <Efam />
        </div>
      </div>
    </>
  )
}

export default Home
