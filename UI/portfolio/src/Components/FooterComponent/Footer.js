import React from "react";
import styled from "styled-components";
import NavigationList from "../NavigationList";

const FooterSection = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 300px;
`;

const LeftFooterSection = styled(FooterSection)`
    align-items: flex-start;
    text-align: left;

`;
const HorizontalList = styled.ul`
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
    gap: 20px;
  
    li{
      list-style: none;
    }
  
`

function Footer(){
    return(
        <div className="footer">
            <LeftFooterSection>
                <h4>Rashidi Alleyne</h4>
                <h5><a href="mailto:ralleyne531@gmail.com">ralleyne531@gmail.com</a></h5>
                <HorizontalList>
                <li><h5><a>LinkedIn</a></h5></li>
                <li><h5><a>IG</a></h5></li>
                <li><h5><a>Github</a></h5></li>
                </HorizontalList>
            </LeftFooterSection>
            <FooterSection>
                <NavigationList></NavigationList>
            </FooterSection>
            <FooterSection>
                [Coming Soon]
            </FooterSection>
        </div>
    )
}

export default Footer;