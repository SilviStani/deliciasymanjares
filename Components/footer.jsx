import React from 'react'
import Image from 'next/image'

function footer() {
  return (
    <div>
      <a href='https://react-portfolio-omega-sooty.vercel.app/' target="blank">
                Powered by{' SilvinaDev'}
        <span>
            <Image src="/imagenes/laptopwave.png" alt="SilviDev Logo" width={100} height={100} />
        </span>
      </a>
  </div>
  )
}

export default footer