import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import { ThemeProvider } from "./Content";

ReactDOM.render(
    <ThemeProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ThemeProvider>,
    document.getElementById('root')
)