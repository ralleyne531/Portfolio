import React from 'react'
import styled from "styled-components";

const StyledHero = styled.div`
  text-align: center;
  p{
    max-width: 50%;
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