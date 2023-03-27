import React from 'react';
import { Link } from "react-scroll";

function Navigation () {
    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li>
                    <Link 
                    activeClass="active"
                    to="homepage"
                    spy={true}
                    smooth={true}
                    duration={500}>
                        Homepage
                    </Link>
                    <Link 
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}>
                        About
                    </Link>
                    <Link 
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}>
                        Projects
                    </Link>
                    <Link 
                    activeClass="active"
                    to="contact"
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