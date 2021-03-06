import React from 'react'
import styles from '../styles/capacitaciones.module.css'
import Image from 'next/image'
import Circle from '../Components/Circle.jsx';

function capacitaciones() {
  return (
    <div className={styles.container}>
        <h1 className={styles.titulo}>Capacitaciones</h1>
         <div className={styles.left}>
        <h3 className={styles.subt}>Estamos trabajando en ello. Muy Pronto Novedades! <br/> Podes consultar al Whatsapp </h3>
         <a href="https://wa.me/5493484506772" passHref target="blank" className={styles.mediaContact} >
          <Image src="/imagenes/whatsapp1.png" alt='' height={100} width={100} />
        </a>
        </div>
    </div>
  )
}

export default capacitaciones