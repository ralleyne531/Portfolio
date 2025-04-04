import React from "react";
import image from "../img/Headshot_2025.png"
import styled from "styled-components";

const AboutDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 75%;
  gap: 48px;
  margin: 0 auto;
  padding: 3em;
`
function About(){

    return <>
        <h2>About Me</h2>
        <AboutDiv>
        <img src={image} alt={"Portrait of engineer, Rashidi Alleyne"}/>
        <p>Growing up alongside emerging technology led my curiosity to the world of computing. I enjoy designing web applications and engineering design systems. I envision sustainable, aesthetic solutions that provide users satisfaction and accessible value.</p>
        </AboutDiv>
    </>

}

export default About;