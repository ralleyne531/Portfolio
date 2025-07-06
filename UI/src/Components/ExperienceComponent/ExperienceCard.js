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
            <h4>{jobTitle}</h4>
            <h5>{company}</h5>
            <p>{tenure}</p>
        </ExperienceCardDiv>
    );
}
export default ExperienceCard