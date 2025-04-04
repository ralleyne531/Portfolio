import React, {useState} from 'react';
import "./Header.css"
import ContactStatus from "./contactStatus/ContactButton";


function Header({ toggleSidebar }) {
    const [isMerged, setIsMerged] = useState(false);

    const sidebarAnimation = () => {
        setIsMerged(!isMerged);
        toggleSidebar();
    };

    return (
        <div className="header">
            <h5>Rashidi Alleyne</h5>
            <ContactStatus className={"contactMe"}></ContactStatus>
            <svg onClick={sidebarAnimation} className={isMerged? "merged" : ""} id="grid" fill="#000000" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="squares">
                <rect className="square" x="0" y="0" width="4" height="4"/>
                <rect className="square" x="6" y="0" width="4" height="4"/>
                <rect className="square" x="12" y="0" width="4" height="4"/>
                <rect className="square" x="0" y="6" width="4" height="4"/>
                <rect className="square" x="6" y="6" width="4" height="4"/>
                <rect className="square" x="12" y="6" width="4" height="4"/>
                <rect className="square" x="0" y="12" width="4" height="4"/>
                <rect className="square" x="6" y="12" width="4" height="4"/>
                <rect className="square" x="12" y="12" width="4" height="4"/>
            </g></svg>
        </div>
    );
}

export default Header;
