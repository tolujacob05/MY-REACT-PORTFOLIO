import React from "react";
import './intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png"
import Tolu from "../../img/tolu.jpeg"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import { themeContext } from "../../Content";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


const Intro = () => {
    const transition = { duration: 2, type: "spring" };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
            <div className="intro" id="Home">
                <div className="i-left">
                    <div className="i-name">
                        <span style={{ color: darkMode ? "white" : "" }}>Hey, I Am </span>
                        <span>Akinjare Toluwase</span>
                        <span>Frontend Developer with 
                        experience in web and mobile designing 
                        and development, producing the 
                        Quality work</span>
                    </div>
                    <Link activeClass="active" to="Contact" spy={true} smooth={true}>
                        <button className="button i-button">Hire me</button>
                    </Link>
                    <div className="i-icons">
                        <a href="https://www.github.com/tolujacob05">
                            <img src={Github} alt="" />
                        </a>
                        <a href="https:linkedin.com/in/akinjare-toluwase">
                            <img src={LinkedIn} alt="" />
                        </a>
                        <a href="https://www.instagram.com/tolujacob05">
                            <img src={Instagram} alt="" />
                        </a>
                    </div>
                </div>
                <div className="i-right">
                    <div className="i-middle">
                        <motion.img 
                            src={glassesimoji} alt=''
                            initial={{ left: "-36%" }}
                            whileInView={{ left: "-24%" }}
                            transition={transition}
                        />
                        <motion.div 
                            initial={{ left: "9rem", top: "18rem" }}
                            whileInView={{ left: "0rem" }}
                            transition={transition}
                            className="i-mobile"
                        >
                            <img src={thumbup} alt="" />
                            <span>mobile developer</span>
                        </motion.div>
                    </div>
                    <img src={Tolu} alt="" />
                    <motion.div 
                        initial={{ top: "-4%", left: "74%" }}
                        whileInView={{ left: "68%" }}
                        transition={transition}
                        className="floatingdiv"
                    >
                        <img src={Crown} alt="" />
                        <span>Web developer</span>
                    </motion.div>

                    {/* blur divs */}

                    <div className="blur" style={{ background: "rgba(238 210 255)"}}></div>
                    <div className="blur" 
                        style={{
                            background: "#c1f5ff",
                            top: "17rem",
                            width: "21rem",
                            height: "11rem",
                            left: "-9rem"
                        }}
                    ></div>
                </div>
                
            </div>
        </>
    )
}

export default Intro;