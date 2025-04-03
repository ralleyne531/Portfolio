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
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;`;

function PortfolioSection({ className }) {
    // Render different content based on the className
    const renderContent = () => {
        switch (className) {
            case 'hero':
                return (<Hero></Hero>);
            case 'about':
                return (<About></About>);
            case 'experience':
                return (<Experience></Experience>);
            case 'projects':
                return (<Projects></Projects>);
            case 'skills':
                return (<Skills></Skills>);
            case 'interests':
                return (<Interests></Interests>);
            default:
                return (
                    <>
                        <h2>Default Section</h2>
                        <p>This is the default section content.</p>
                    </>
                );
        }
    };

    return <StyledSection>{renderContent()}</StyledSection>;
}

export default PortfolioSection;
