import React from 'react'
import Image from 'next/image'
import styles from '../styles/footer.module.css'

function footer() {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContactl}>
        <h3 className={styles.text}>Consultas y Sociales</h3>
        <a href="https://wa.me/5493484506772" passHref target="blank" className={styles.mediaContact} >
          <Image src="/imagenes/whatsapp.png" alt='' height={50} width={50} />
        </a>
        <a href="https://www.instagram.com/deliciasymanjaresbygise" passHref target="blank" className={styles.mediaContact} >
        <Image src="/imagenes/instagram.png" alt='' height={50} width={50} />
          </a>
        <a href="https://www.facebook.com/Delicias-y-Manjares-by-Gisele-Velazquez-230831807708791/" passHref target="blank" className={styles.mediaContact} >
        <Image src="/imagenes/facebook.png" alt='' height={50} width={50} />
        </a>
        <a href="mailto:gisevelazquez08@gmail.com" className={styles.mediaContact} target="blank">
        <Image src="/imagenes/mail.png" alt='' height={50} width={50} />
        </a>
      </div>
      <div className={styles.dev}>
      <a href="https://wa.me/5491163632288" passHref target="blank" className={styles.mediaContact}>
        <span>
            <Image src="/imagenes/laptopwave.png" alt="SilviDev Logo" width={120} height={120} />
        </span>
      </a>
      </div>
  </div>
  )
}

export default footer