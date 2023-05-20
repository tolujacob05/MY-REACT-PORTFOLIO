import React, { useState } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./Resume.pdf"
import Card from "../Card/Card";
import { themeContext } from "../../Content";
import { useContext } from "react";
import { motion } from "framer-motion";
import Pop1 from "../../Modals/Pop1/Pop1";

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [ openModal, setOpenModal ] = useState(false);

    const transition = {
        duration: 1,
        type: "spring"
    }

    return (
        <>
            <div className="services" id="Services">

                {/* left side */}
                <div className="awesome">
                    <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                    <span>services</span>
                    <span>
                        I specialize in designing web and mobile application to customers taste.
                    </span>
                    <a href={Resume} download>
                        <button className="button s-button">Download CV</button>
                    </a>
                </div>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94"}}></div>

                {/* right side */}
                <div className="cards">
                    <div className="blur s-blur3" style={{ background: "#ABF1FF94"}}></div>
                    {/* first card */}
                    <motion.div 
                        initial={{ left: "25rem" }}
                        whileInView={{ left: "14rem" }}
                        transition={transition}
                    >
                        <Card 
                            emoji = {HeartEmoji}
                            heading = {"Version Control"}
                            detail = {"Git, Github, VScode"}
                        />
                    </motion.div>

                    {/* second card */}
                    <motion.div 
                        initial={{ left: "-11rem", top: "12rem" }}
                        whileInView={{ left: "-4rem" }}
                        transition={transition}
                    >
                        <Card 
                            emoji = {Glasses}
                            heading = {"Developer"}
                            detail = {"HTML, CSS, SCSS/SASS, REACT, TYPESCRIPT"}
                        />
                        <Pop1 open={openModal} onClose={() => setOpenModal(false)}/>
                    </motion.div>

                    {/* third card */}
                    <motion.div
                        initial={{ top: "19rem", left: "25rem" }}
                        whileInView={{ left: "12rem" }}
                        transition={transition}
                    >
                        <Card 
                            emoji = {Humble}
                            heading = {"Design"}
                            detail = {"Photoshop, Adobe"}
                        />
                    </motion.div>
                    <div className="blur s-blur2" style={{ background: "var(--purple)"}}></div>
                </div>

                {/* <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20.5" cy="20.5" r="20.5" fill="white"/>
</svg>

<svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.344 3.244H0.312V0.488H15.782V3.244H9.724V19H6.344V3.244Z" fill="#5B9BF3"/>
</svg> */}



            </div>
        </>
    )
}

export default Services;