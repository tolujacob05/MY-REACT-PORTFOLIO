import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";

const App = () => {
    return (
        <>
            <Router>
                <Nav />
                <div>
                    <Routes>
                        <Route exact path="/home" element={<Home />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App;