import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../Components/intro.jsx'
import Services from '../Components/services.jsx'
import { data } from '../data'

export default function Home({services}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Delicias y Manjares</title>
        <meta name="description" content="Pasteleria de primera calidad" />
        <link rel="icon" href="/imagenes/logoN.png" />
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