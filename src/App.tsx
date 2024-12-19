import React from 'react';
import './App.css';
import Navbar from "./layouts/header-footer/Navbar";
import Footer from "./layouts/header-footer/Footer";
import {HomePage} from "./layouts/homepage/HomePage";

function App() {
    return (
        <>
            <Navbar/>
            <HomePage/>
            <Footer/>
        </>

    )
}

export default App;