import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  
    margin:0;
    padding: 0;
    
    `

function Footer(){
    return(
        <div className="footer">
            <FooterSection>
                <h3>Rashidi Alleyne</h3>
                <h4><a href="mailto:ralleyne531@gmail.com">ralleyne531@gmail.com</a></h4>
                <h4><a>LinkedIn</a></h4>
                <h4><a>IG</a></h4>
                <h4><a>Github</a></h4>
            </FooterSection>
            <FooterSection>
                <ul>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Interests</li>
                </ul>
            </FooterSection>
            <FooterSection>
                Signup Form
            </FooterSection>
        </div>
    )
}

export default Footer;