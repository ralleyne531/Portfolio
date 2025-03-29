import React from "react";
import styled from "styled-components";

const ExperienceCardDiv = styled.div`
     *{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
     }
  
  display: flex;
  flex-direction: column;
  
    `;
function ExperienceCard({jobTitle, company, tenure}) {
    return (
        <ExperienceCardDiv>
            <h3>{jobTitle}</h3>
            <h4>{company}</h4>
            <p>{tenure}</p>
        </ExperienceCardDiv>
    );
}
export default ExperienceCard