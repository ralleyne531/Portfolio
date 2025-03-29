import React from "react";
import ExperienceCard from "./ExperienceCard";
import styled from "styled-components";

const ExperienceDiv = styled.div`
     *{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
     }
  
  display: flex;
  flex-direction: column;
    `;
function Experience() {

    return (
        <>
            <h2>Experience</h2>
            <ExperienceDiv>
            <ExperienceCard
                jobTitle={"Software Engineer Intern"}
                company={"Rocket Companies"}
                tenure={"May 2024 - Dec 2024"}
            >
            </ExperienceCard>
            <ExperienceCard
                jobTitle={"B.A Computer Science"}
                company={"Wake Forest University"}
                tenure={"August 2020 - May 2025"}
            >
            </ExperienceCard>
            </ExperienceDiv>
        </>
    );
}

export default Experience