import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Projects from "./Projects";

const App = () => {
    return (
        <>
            <Router>
                <Nav />
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/Projects" element={<Projects />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App;