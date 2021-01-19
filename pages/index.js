import Head from 'next/head'
import React, { useEffect } from 'react'
import styles from '../styles/Home.module.sass'

const Home = () => {
  useEffect(() => {
    if (localStorage.getItem('iea') === 'false'
    || localStorage.getItem('iea') === undefined) window.location = '/auth'
  }, [])
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
