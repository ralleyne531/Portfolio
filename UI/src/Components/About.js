import React from "react";
import image from "../img/Headshot_2025.png"
import image2 from "../img/Headshot_2022.jpeg"
import styled from "styled-components";

const AboutDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 75%;
  gap: 96px;
  margin: 0 auto;
  padding: 3em;
`
function About(){

    return <>
        <h2>About Me</h2>
        <AboutDiv>
        <section>
        <img  className="bottom" src={image} alt="Portrait of engineer, Rashidi Alleyne"/>
        <img className="top" src={image2} alt="Portrait of engineer, Rashidi Alleyne"/>
        </section>
        <p>Growing up alongside emerging technology led my curiosity to the world of computing. I enjoy designing web applications and engineering design systems. I envision sustainable, aesthetic solutions that provide users satisfaction and accessible value.</p>
        </AboutDiv>
    </>

}

export default About;