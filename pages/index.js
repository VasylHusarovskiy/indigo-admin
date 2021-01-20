import Head from 'next/head'
import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.sass'

const Home = () => {
  const isLogin = async () => {
    const response = await fetch(`${window.location.origin}/api/isLogged`, {
      method: 'POST',
      body: JSON.stringify(localStorage.getItem('iea')),
      headers: {
        'Content-Type': 'application/json'
      },
      cors: 'no-cors'
    })
    const logResult = await response.json()
    if (await !logResult) {
      localStorage.removeItem(localStorage.removeItem('iea'))
      window.location = '/auth'
    }

    console.log(await logResult)
  }

  useEffect(() => {
    if (localStorage.getItem('iea') === 'false'
    || localStorage.getItem('iea') === null) window.location = '/auth'
    isLogin()
  }, [])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/ieadmin">
        <a>перейти в адмін панель</a>
      </Link>
    </div>
  )
}

export default Home
