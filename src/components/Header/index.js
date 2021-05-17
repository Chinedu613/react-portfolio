import React from 'react'
import NavLinks from '../Nav';
import logo from '../../img/logo.png'




function Header() {

    return (
    <header>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <button className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
        </button>
        <NavLinks />
    </header>
    )
}

export default Header