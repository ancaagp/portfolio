import React, { useState } from 'react';
import { Link } from "react-scroll";


function Navigation () {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    return (
            <nav className="navbar">
                {/* hamburger icon */}
                <div id="mobile-nav" onClick={handleShowNavbar}>
                    <i 
                        id="bars" 
                        className={ showNavbar ? "fas fa-bars" : "fas fa-times" }>
                    </i>
                </div>
                <ul className="nav-menu">
                    <li 
                        id="nav-menu-elements" 
                        onClick={handleShowNavbar} 
                        className={showNavbar ? "#nav-menu-elements active" : "#nav-menu-elements"}>
                        <Link 
                            onClick={handleShowNavbar}
                            activeClass="active"
                            to="homepage"
                            offset={-80}
                            spy={true}
                            smooth={true}
                            duration={500}>
                                Homepage
                        </Link>
                        <Link 
                            // onClick={handleShowNavbar}
                            activeClass="active"
                            to="about"
                            offset={-80}
                            spy={true}
                            smooth={true}
                            duration={500}>
                                About
                        </Link>
                        <Link 
                            onClick={handleShowNavbar}
                            activeClass="active"
                            to="projects"
                            offset={-80}
                            spy={true}
                            smooth={true}
                            duration={500}>
                                Projects
                        </Link>
                        <Link 
                            onClick={handleShowNavbar}
                            activeClass="active"
                            to="contact"
                            offset={-80}
                            spy={true}
                            smooth={true}
                            duration={500}>
                                Contact
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default Navigation;