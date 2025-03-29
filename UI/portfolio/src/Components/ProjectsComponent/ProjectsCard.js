import React from "react";
import styled from "styled-components";

const ProjectsCardDiv = styled.div`
  
  display: flex;
  flex-direction: column;
`

function ProjectsCard({project,creationDate,stage}){

    return(
        <>
        <ProjectsCardDiv>
            <h3>{project}</h3>
            <h4>Hello World: {creationDate}</h4>
            <p>Stage: {stage}</p>
            <p>ICONS</p>
            <p>GITHUBICON</p>
        </ProjectsCardDiv>
    </>
    );
}

export default ProjectsCard

