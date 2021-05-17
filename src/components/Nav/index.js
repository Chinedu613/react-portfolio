import React from 'react';

function NavLinks() {
    return(
        <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
            <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
            <li className="nav__item"><a href="#contact-me" className="nav__link">My Contact</a></li>
        </ul>
    </nav>
    )
}

export default NavLinks;