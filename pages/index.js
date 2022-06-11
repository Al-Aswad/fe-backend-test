import Head from 'next/head'
import Image from 'next/image'
import Todolists from '../components/Todolists'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todolist Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='min-h-screen flex justify-center p-4' >
        <Todolists />
      </div>
    </div>
  )
}
