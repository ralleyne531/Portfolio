import React from "react";
import styled from "styled-components";

const HList = styled.ul`

  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap:10px;
  align-items: center;
  
  li{
    padding:1em;
    border: 1px solid black;
    border-radius: 16px;
  }
`
function Interests() {

    return (
        <>
                <h2>Interests</h2>
                <p>What I enjoy away from engineering.</p>
            <HList>
                <li><h3>Gaming</h3></li>
                <li><h3>Music</h3></li>
                <li><h3>Fashion</h3></li>
                <li><h3>Outdoor Exploration</h3></li>
                <li><h3>Content Creation</h3></li>
                <li><h3>Cars</h3></li>
                <li><h3>Binge Watching</h3></li>
            </HList>
        </>
    );
}

export default Interests