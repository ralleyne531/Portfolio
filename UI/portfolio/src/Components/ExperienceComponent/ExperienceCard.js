import React from "react";
import styled from "styled-components";

const ExperienceCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  
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