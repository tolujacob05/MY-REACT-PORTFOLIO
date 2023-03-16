import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/Intro";
import "./App.css"
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Content";
import { useContext } from "react";


const App = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <>
            <div className="App"
                style={{
                    background : darkMode? 'black' : '',
                    color : darkMode? 'white' : ''
                }}
            >
                <Navbar />
                <Intro />
                <Services />
                <Experience />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default App;