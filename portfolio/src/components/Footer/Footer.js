import React from "react";
import "./Footer.css"
import Wave from "../../img/wave.png";
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <img src={Wave} alt="" />
                <div className="f-content">
                    <span>tolujacob05@gmail.com</span>
                    <div className="f-icons">
                        <a href="https://www.instagram.com/tolujacob05">
                            <Insta color='white' size='3rem' />
                        </a>
                        <a href="https://www.github.com/tolujacob05">
                            <Github color='white' size='3rem' />
                        </a>
                        <a href="https://twitter.com/tolu_jacob05">
                            <Twitter color='white' size='3rem' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;