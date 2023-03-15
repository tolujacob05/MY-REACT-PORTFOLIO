import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/Intro";
import "./App.css"


const App = () => {
    return (
        <>
            <div>
                <Navbar />
                <Intro />
            </div>
        </>
    )
}

export default App;