import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {



  return (
    <div>
      <div className='headparent'>
        <div className='the'>The</div>
        <div className='sieren'>Sieren</div>
      </div>
      <div className='navbar'>
        <span className='nav'> <Link className='nav' to='/'>Home </Link></span>
        <span className='nav'><Link className='nav' to='/movies'>Movies</Link></span>
        <span className='nav'><Link className='nav' to='/fit'>Fitness</Link></span>
        <span className='nav'><Link className='nav' to='/food'>Food</Link></span>
        <span className='nav'><Link className='nav' to='/tech'>Technology</Link></span>
        <span className='nav'><Link className='nav' to='/news'>Hollywood</Link></span>
        <span className='media-btn' onClick={navclik}>|||</span>

      </div>




    </div>
  )
}

export default Header