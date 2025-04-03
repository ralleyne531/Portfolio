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
            <li><h4><a href={"#about"}>About</a></h4></li>
            <li><h4><a href={"#experience"}>Experience</a></h4></li>
            <li><h4><a href={"#projects"}>Projects</a></h4></li>
            <li><h4><a href={"#skills"}>Skills</a></h4></li>
            <li><h4><a href={"#interests"}>Interests</a></h4></li>
        </NavListContainer>
    )
}

export default NavigationList