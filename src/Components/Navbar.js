import React from 'react'
import logo from '../Images/logo.jpg'
import notify from '../Images/notification.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

// Component for top nav-bar
function Navbar( props ) {
  return(
    <div className='navbar'>
      <div className='navbar-left'>
        <Link to='/'>
          <img id='logo' src={ logo } alt='ABZCorp'/>
        </Link>
      </div>
      <div className='navbar-right'>
        <div className='notify'>
          <img src={ notify } alt='notification'/>
          <div className='num'>{ props.totNotification }</div>
        </div>
        <div className='dp'>
          <img src={ props.dp } alt='dp'/>
        </div>
      </div>
    </div>
  )
}
export default Navbar
