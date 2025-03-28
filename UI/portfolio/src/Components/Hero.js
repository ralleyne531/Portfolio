import React from 'react'
import styled from "styled-components";

const StyledHero = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "IceCreamParty";
    src: url("../fonts/IceCreamPartySolid.ttf");
  }

  @font-face {
    font-family: "SuperCottage";
    src: url("../fonts/SuperCottage.ttf");
  }

  text-align: center;

  h2 {
    font-family: "IceCreamParty", serif;
    color: #101010;
    font-size: 10rem;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  h3 {
    font-family: "IceCreamParty", serif;
    color: #101010;
    font-size: 2rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-top: 0;
  }

  p {
    font-family: "SuperCottage", serif;
    color: #101010;
    font-size: 14px;
    text-transform: uppercase;
  }

`;
function Hero(){

    return (
        <StyledHero>
            <h2>Rashidi Alleyne</h2>
            <h3>SWE, UI/UX, GFX</h3>
            <p>Hi! I’m Rashidi Alleyne, a creative technologist passionate about all things technology</p>
            <p>I build sleek websites, code software, craft immersive graphics (2D & 3D), and aspire to create worlds in game design.</p>
            <p>Bringing ideas to life, one pixel at a time</p>
        </StyledHero>
    );
}

export default Hero;