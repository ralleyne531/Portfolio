import React from "react";
import styled from "styled-components";

const HList = styled.ul`

  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap:10px;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  
  li{
    padding:1em;
    border: 1px solid black;
    border-radius: 16px;
  }
`
function Interests() {

    return (
        <div style={{padding: "3em", display:'flex', flexDirection:"column", alignItems:"center"}}>
                <h2>Interests</h2>
                <h5>What I enjoy away from engineering.</h5>
            <HList>
                <li><h4>Gaming</h4></li>
                <li><h4>Music</h4></li>
                <li><h4>Fashion</h4></li>
                <li><h4>Outdoor Exploration</h4></li>
                <li><h4>Content Creation</h4></li>
                <li><h4>Cars</h4></li>
                <li><h4>Binge Watching</h4></li>
            </HList>
        </div>
    );
}

export default Interests