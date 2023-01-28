import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div>
      <center>
      <span className='the'>The</span>
      <span className='siren'>Siren</span>
      </center>
      <div className='navbar'>
      <span  className='nav'> <Link className='nav' to ='/'>Home </Link></span>
      <span  className='nav'><Link className='nav' to ='/movies'>Movies</Link></span>
      <span className='nav'><Link className='nav' to ='/fit'>Fitness</Link></span>
      <span className='nav'><Link className='nav' to ='/food'>Food</Link></span>
      <span className='nav'><Link className='nav' to ='/money'>Money</Link></span>
      <span className='nav'><Link className='nav' to ='/news'>News</Link></span>
      </div>
    </div>
  )
  }

export default Header