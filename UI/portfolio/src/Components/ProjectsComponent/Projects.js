import React from "react";
import styled from "styled-components";
import ProjectsCard from "./ProjectsCard";

const ProjectsDiv = styled.div`
  
  display: flex;
  gap:10px;
  flex-wrap: wrap;
  justify-content: center;
`;

function Projects(){

    return(
        <>
            <h2>Projects</h2>
            <ProjectsDiv>
            <ProjectsCard project={"Portfolio"} creationDate={"April 2023"} stage={"New Planning"} iconNames={["HTMLIcon", "CSSIcon", "JSIcon","NodeIcon", "ReactIcon"]}></ProjectsCard>
            <ProjectsCard project={"NameWorkout"} creationDate={"February 2023"} stage={"Maintenance"} iconNames={["HTMLIcon", "CSSIcon", "JSIcon"]}></ProjectsCard>
            <ProjectsCard project={"ElevateEatsAPI"} creationDate={"May 2024"} stage={"Development"} iconNames={["JSIcon","MongoIcon","NodeIcon","ExpressIcon"]}></ProjectsCard>
            <ProjectsCard project={"EzEmailList"} creationDate={"October 2024"} stage={"Development"} iconNames={["PyIcon","SQLIcon","FlaskIcon","HTMLIcon"]}></ProjectsCard>
            <ProjectsCard project={"Repurpose Clone"} creationDate={"TBA"} stage={"Analysis"}></ProjectsCard>
            </ProjectsDiv>
        </>
    )
}

export default Projects