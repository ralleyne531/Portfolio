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
            <li><h5><a href={"#about"}>About</a></h5></li>
            <li><h5><a href={"#experience"}>Experience</a></h5></li>
            <li><h5><a href={"#projects"}>Projects</a></h5></li>
            <li><h5><a href={"#skills"}>Skills</a></h5></li>
            <li><h5><a href={"#interests"}>Interests</a></h5></li>
        </NavListContainer>
    )
}

export default NavigationList