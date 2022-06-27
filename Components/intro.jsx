import React from 'react'
import styles from '../styles/intro.module.css';
import Image from 'next/image';
import { data } from '../data';
import Circle from './Circle';

function intro() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor=" #fdabc6" top="-50vh" left="-50vh" />
      <Circle backgroundColor=" #ffcede" left= "0vh"/>
      <Circle backgroundColor=" #fdabc6" left= "50vh" bottom="-60vh" />
        <div className={styles.card}>
          <Image 
          className={styles.imagen}
          src='/imagenes/logoN.png' 
          alt='' 
          width='100%' 
          heigth='100%'
          layout='fill'
          objectFit='contain'
           />
        </div>
        <div className={styles.card}>
            <h1 className={styles.title}>
                Delicias y Manjares
                </h1>
                <h3 className={styles.brand}>
                By Gise
                </h3>
                <p className={styles.desc}>{`"Amarás nuestro sabor"`}</p>
             <div>
          </div>
        </div>

    </div>
  )
}

export default intro