import React from "react";
import styled from "styled-components";

const NavListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  
    li{
      list-style: none;
    }

`
function NavigationList(){
    return(
        <NavListContainer>
            <li><h3><a>About</a></h3></li>
            <li><h3><a>Experience</a></h3></li>
            <li><h3><a>Projects</a></h3></li>
            <li><h3><a>Skills</a></h3></li>
            <li><h3><a>Interests</a></h3></li>
        </NavListContainer>
    )
}

export default NavigationList