import React from "react";
import styled from "styled-components";
import GitHubIcon from "../Icons/GitHubIcon";

const ProjectsCardDiv = styled.div`
  
  display: flex;
  flex-direction: column;
`

function ProjectsCard({project,creationDate,stage,iconNames}){

    const importIcons = require.context("../Icons", false, /\.jsx?$/);
    return(
        <>
        <ProjectsCardDiv>
            <h3>{project}</h3>
            <h4>Hello World: {creationDate}</h4>
            <p>Stage: {stage}</p>
            {/* Render icons dynamically */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {iconNames && iconNames.map((iconName) => {
                    try {
                        // Dynamically load the icon component
                        const Icon = importIcons(`./${iconName}.js`).default;
                        return (
                            <div key={iconName} style={{ textAlign: 'center', margin: '10px' }}>
                                <Icon width={5} height={5} />
                            </div>
                        );
                    } catch (error) {
                        console.error(`Icon not found for ${iconName}`);
                        return null; // If the icon is not found, return nothing
                    }
                })}
            </div>
            <GitHubIcon/>
        </ProjectsCardDiv>
    </>
    );
}

export default ProjectsCard

