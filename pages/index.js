import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../Components/intro.jsx'
import Services from '../Components/services.jsx'
import { data } from '../data'

export default function Home({services}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro/>
      <Services services={services} />
    </div>
  )
}


export const getStaticProps = async ()=> {
const services = data;
return {
  props: {services}
}
}