import React from 'react'
import Button from '../../atoms/buttons/Button'
import Logo from '../../atoms/logo/Logo'
import './index.scss'

export default function NavBar() {
  return (
    <div className="navbar-container">
          <nav className='navbar-container__section'>
        <Logo/>
        <ul className="navbar-container__section__links">
           <li><a href="/company">Company</a></li>
           <li><a href="/how">How it Works</a></li>
           <li><a href="/blogs">Blogs</a></li>
           <li><a href="/">Partnership</a></li>
           <li><Button>CONTACT US</Button></li>
        </ul>
    </nav>
    </div>
  )
}
