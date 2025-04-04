import React from "react";
import styled from "styled-components";
import GitHubIcon from "../../Icons/GitHubIcon";

const ProjectsCardDiv = styled.div`
  
  display: flex;
  flex-direction: column;
  flex: 0 fit-content;
  justify-content: flex-start;
  border: 1px solid black;
  align-items: center;
  padding: 1em;
  
  svg{
    justify-self: center;
    width: 35px;
    height: 35px;
    margin: 5px;
  }
  
  h4,p{
    display: block;
  }
`

function ProjectsCard({project,creationDate,stage,iconNames,projectLink}){

    const importIcons = require.context("../../Icons", false, /\.jsx?$/);
    return(
        <>
        <ProjectsCardDiv>
            <h4>{project}</h4>
            <h5>Hello World: {creationDate}</h5>
            <p>Stage: {stage}</p>
            {/* Render icons dynamically */}
            <div style={{ display: 'flex', }}>
                {iconNames && iconNames.map((iconName) => {
                    try {
                        // Dynamically load the icon component
                        const Icon = importIcons(`./${iconName}.js`).default;
                        return (
                            <div key={iconName} style={{ textAlign: 'center' }}>
                                <Icon/>
                            </div>
                        );
                    } catch (error) {
                        console.error(`Icon not found for ${iconName}`);
                        return null; // If the icon is not found, return nothing
                    }
                })}
            </div>
            <a href={projectLink} target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
        </ProjectsCardDiv>
    </>
    );
}

export default ProjectsCard

