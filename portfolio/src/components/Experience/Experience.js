import React, { useContext} from "react";
import "./Experience.css";
import { themeContext } from "../../Content";

const Experience  = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
            <div className="experience" id="Experience">
                <div className="achievement">
                    <div className="circle">2+</div>
                    <span  style={{color: darkMode? 'white':''}}>years</span>
                    <span>Experience</span>
                </div>
                <div className="achievement">
                    <div className="circle">14+</div>
                    <span>completed</span>
                    <span>Projects</span>
                </div>
                <div className="achievement">
                    <div className="circle">1</div>
                    <span>Company</span>
                    <span>Work</span>
                </div>
            </div>
        </>
    )
}

export default Experience;