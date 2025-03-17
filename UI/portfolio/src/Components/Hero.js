import React from 'react';
import "./Hero.css"
import ContactStatus from "./ContactButton";


function Hero({ toggleSidebar }) {
    return (
        <div className="hero">
            <h1>Hello World ~ hero</h1>
            <ContactStatus></ContactStatus>
            <button onClick={toggleSidebar}>Toggle Sidebar</button>
        </div>
    );
}

export default Hero;
