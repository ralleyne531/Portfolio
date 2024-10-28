import React from 'react';

function Hero({ toggleSidebar }) {
    return (
        <div className="hero">
            <h1>Hello World ~ hero</h1>
            <button onClick={toggleSidebar}>Toggle Sidebar</button>
        </div>
    );
}

export default Hero;
