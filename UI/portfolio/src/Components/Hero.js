import React from 'react';
import './Hero.css';

export default function Hero({toggleSidebar}){

    return(
        <Hero>
            <h1>[Name]</h1>
            <button onClick={toggleSidebar}>Button</button>
        </Hero>
    );
}