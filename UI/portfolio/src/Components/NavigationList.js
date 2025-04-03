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
            <li><h3>About</h3></li>
            <li><h3>Experience</h3></li>
            <li><h3>Projects</h3></li>
            <li><h3>Skills</h3></li>
            <li><h3>Interests</h3></li>
        </NavListContainer>
    )
}

export default NavigationList