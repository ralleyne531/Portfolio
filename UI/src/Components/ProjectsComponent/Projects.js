import React from "react";
import styled from "styled-components";
import ProjectsCard from "./ProjectsCard";

const ProjectsDiv = styled.div`
  padding: 3em;
  display: flex;
  gap:20px;
  flex-wrap: wrap;
  justify-content: center;
`;

function Projects(){

    return(
        <>
            <h2>Projects</h2>
            <ProjectsDiv>
            <ProjectsCard project={"SWE Portfolio"} creationDate={"April 2023"} stage={"Maintenance"} iconNames={["HTMLIcon", "CSSIcon", "JSIcon","NodeIcon", "ReactIcon"]} projectLink={"https://github.com/ralleyne531/Portfolio"}></ProjectsCard>
            <ProjectsCard project={"NameWorkout"} creationDate={"February 2023"} stage={"Maintenance"} iconNames={["HTMLIcon", "CSSIcon", "JSIcon"]} projectLink={"https://github.com/ralleyne531/NameWorkout"}></ProjectsCard>
            <ProjectsCard project={"ElevateEatsAPI"} creationDate={"May 2024"} stage={"Development"} iconNames={["JSIcon","MongoIcon","NodeIcon","ExpressIcon"]} projectLink={"https://github.com/ElevateEats/ElevateEats"}></ProjectsCard>
            <ProjectsCard project={"EzEmailList"} creationDate={"October 2024"} stage={"Development"} iconNames={["PyIcon","SQLIcon","FlaskIcon","HTMLIcon"]} projectLink={"#"}></ProjectsCard>
            <ProjectsCard project={"GFX | Creative Portfolio"} creationDate={"June 2025"} stage={"Development"} iconNames={["FramerIcon","JSIcon"]} projectLink={"https://conclusive-business-694755.framer.app/"}></ProjectsCard>
            <ProjectsCard project={"Repurpose Clone"} creationDate={"TBA"} stage={"Analysis"}></ProjectsCard>
            </ProjectsDiv>
        </>
    )
}

export default Projects