import '../styles/globals.css'
import React, { useEffect, useState } from 'react'

const MyApp = ({ Component, pageProps }) =>{
  const [data, dataHandler] = useState(null)
  useEffect(() => {
    (async function getData() {
      const res = await fetch('https://sm-smartmenu.firebaseio.com/.json')
      dataHandler(await res.json())
    }())
  }, [])
  return <Component {...pageProps} data={data} />
}

export default MyApp
