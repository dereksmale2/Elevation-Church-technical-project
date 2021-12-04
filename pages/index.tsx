import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>
        <center>Choose your community</center>
      </h2>
      <h5>
        Whether you are visiting a local campus community or joining us online
        for the very first time, we can't wait to connect with you!
      </h5>
    </div>
  )
}

export default Home
