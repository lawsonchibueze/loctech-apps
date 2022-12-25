import Head from 'next/head'
import Image from 'next/image'
import Advert from '../components/Advert'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Partner from '../components/Partner'
import Testimonial from '../components/Testimonial'
import Views from '../components/views'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loctech Portal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='mb-20'>
        <Hero />
        <Category />
        <Views />
        <Testimonial />
        <Advert />
        <Partner />
      </main>
      <Footer />
    </div>
  )
}
