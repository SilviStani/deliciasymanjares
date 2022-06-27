import React from 'react'
import Footer from './footer.jsx'
import Navbar from './navbar.jsx'

function layout({children}) {
  return (
    <div>
        <Navbar/>
            {children}
        <Footer />
    </div>
  )
}

export default layout