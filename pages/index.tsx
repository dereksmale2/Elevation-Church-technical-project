import type { NextPage } from 'next'
import { CampusCommunity } from '../components/CampusCommunity'
import { Efam } from '../components/Efam'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <CampusCommunity />
        <Efam />
      </div>
    </>
  )
}

export default Home
