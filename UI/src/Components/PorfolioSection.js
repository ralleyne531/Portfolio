import React from 'react';
import styled from 'styled-components';
import Hero from './Hero.js'
import About from "./About";
import Skills from "./Skills.js";
import Experience from "./ExperienceComponent/Experience.js";
import Projects from "./ProjectsComponent/Projects";
import Interests from "./Interests";

// Define styles for the section
const StyledSection = styled.div`
  width: 100%;
  min-height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  filter: drop-shadow(0 5px 4px rgba(0, 0, 0, 0.5));
`;


function PortfolioSection({id,className }) {
    // Render different content based on the className
    const renderContent = () => {
        switch (className) {
            case 'hero':
                return (<Hero/>);
            case 'about':
                return (<About/>);
            case 'experience':
                return (<Experience/>);
            case 'projects':
                return (<Projects/>);
            case 'skills':
                return (<Skills/>);
            case 'interests':
                return (<Interests/>);
            default:
                return (
                    <>
                        <h2>Default Section</h2>
                        <p>This is the default section content.</p>
                    </>
                );
        }
    };

    return <StyledSection id={id}>{renderContent()}</StyledSection>;
}

export default PortfolioSection;
