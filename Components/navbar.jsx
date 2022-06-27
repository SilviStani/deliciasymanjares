import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

function navbar() {
  return (
  <div className={styles.container}>
   <Link href='/'>Delicias y Manjares</Link>
   <ul className={styles.list}>
     <li className={styles.listItems}>
       <Link href='/products/tortas'>Tortas</Link>
     </li>
     <li className={styles.listItems}>
       <Link href='/products/alfajores'>Alfajores</Link>
     </li>
     <li className={styles.listItems}>
       <Link href='/products/bombones'>Bombones</Link>
     </li>
     <li className={styles.listItems}>
       <Link href='/products/todos'>Todos los productos</Link>
     </li>
     <li className={styles.listItems}>
       <Link href='/products/capacitaciones'>Capacitaciones</Link>
     </li>
   </ul>
  </div>
  )
}

export default navbar