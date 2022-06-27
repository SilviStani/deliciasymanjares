import React from 'react'
import styles from '../styles/services.module.css'
import Link from 'next/link'
import Image from 'next/image'

function services({services}) {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Mis Servicios de <span className={styles.spantitle}>Pasteleria </span>incluyen:</h1>
    <div className={styles.services}>
      {services.map( service =>(
        <Link passHref key={service.id} href={`/products/${service.name}`}>
        <div className={styles.service}>
          <div className={styles.desc}>{service.desc}</div>
          <span className={styles.cat}>{service.title}</span>
          <div className={styles.media}>
            {
              <Image src={`/imagenes/${service.photo}`}
              alt=''
              height='100%'
              width='100%'
              layout='responsive'
              objectFit='cover' />
            }
          </div>
        </div>
        </Link>
      ))}
    </div>
    </div>
  )
}

export default services