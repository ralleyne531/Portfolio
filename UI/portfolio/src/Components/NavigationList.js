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
            <li><h3><a href={"#about"}>About</a></h3></li>
            <li><h3><a href={"#experience"}>Experience</a></h3></li>
            <li><h3><a href={"#projects"}>Projects</a></h3></li>
            <li><h3><a href={"#skills"}>Skills</a></h3></li>
            <li><h3><a href={"#interests"}>Interests</a></h3></li>
        </NavListContainer>
    )
}

export default NavigationList