import React from 'react';
import styled from 'styled-components';
import Hero from './Hero.js'
import About from "./About";
import Skills from "./Skills.js";

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
                return (
                    <>
                        <h2>Experience</h2>
                        <p>Here's where I've contributed.</p>
                    </>
                );
            case 'projects':
                return (
                    <>
                        <h2>Projects</h2>
                        <p>Explore the projects I have worked on.</p>
                    </>
                );
            case 'skills':
                return (<Skills></Skills>);
            case 'interests':
                return (
                    <>
                        <h2>Interests</h2>
                        <p>What I do away from engineering.</p>
                    </>
                );
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
