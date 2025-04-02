import React from "react";
import styled from "styled-components";
import NavigationList from "../NavigationList";

const FooterSection = styled.div`
    border: 1px black solid;
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
                <NavigationList></NavigationList>
            </FooterSection>
            <FooterSection>
                Signup Form
            </FooterSection>
        </div>
    )
}

export default Footer;