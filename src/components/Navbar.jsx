import React from 'react'
import { Link } from 'react-router-dom'

import './../css/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>
            <Link to={`/`}>Blog</Link>
        </h2>
    </nav>
  )
}

export default Navbar