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

`;
function Hero(){

    return (
        <StyledHero>
            <h1>Rashidi Alleyne</h1>
            <h4>SWE, UI/UX, GFX</h4>
            <p>Hi! I’m Rashidi Alleyne, a creative technologist passionate about all things technology.
                I build sleek websites, code software, craft immersive graphics (2D & 3D), and aspire to create worlds in game design.
                Bringing ideas to life, one pixel at a time</p>
        </StyledHero>
    );
}

export default Hero;