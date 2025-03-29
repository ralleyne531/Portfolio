import React from "react";
import styled from "styled-components";
import ProjectsCard from "./ProjectsCard";

const ProjectsDiv = styled.div`
    *{
      
      margin:0;
      padding: 0;
      box-sizing: border-box;
    }
  
  display: flex;
  gap:10px;
`;

function Projects(){

    return(
        <>
            <h2>Projects</h2>
            <ProjectsDiv>
            <ProjectsCard project={"Portfolio"} creationDate={"April 2023"} stage={"New Planning"}></ProjectsCard>
            <ProjectsCard project={"NameWorkout"} creationDate={"February 2023"} stage={"Maintenance"}></ProjectsCard>
            <ProjectsCard project={"ElevateEats"} creationDate={"May 2024"} stage={"Development"}></ProjectsCard>
            <ProjectsCard project={"EzEmailList"} creationDate={"October 2024"} stage={"Development"}></ProjectsCard>
            <ProjectsCard project={"Content Repost Tool"} creationDate={"TBA"} stage={"Analysis"}></ProjectsCard>
            </ProjectsDiv>
        </>
    )
}

export default Projects