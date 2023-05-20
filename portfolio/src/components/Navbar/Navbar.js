import React from "react";
import './Navbar.css'
import Toggle from "../Toggle/Toggle"
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <>
            <div className="n-wrapper">
                <div className="n-left">
                    <div className="n-name">Toluwase</div>
                    <Toggle />
                </div>
                <div className="n-right">
                    <div className="n-list">
                        <ul style={{listStyleType: 'none'}}>
                            <li>
                                <Link activeClass="active" to="Home" spy={true} smooth={true}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="Services" spy={true} smooth={true}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="Experience" spy={true} smooth={true}>
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="Portfolio" spy={true} smooth={true}>
                                    Portfolio 
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                    <Link activeClass="active" to="Contact" spy={true} smooth={true}>
                        <button className="button n-button">Contact Me</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;