import {render, screen} from '@testing-library/react';
import Header from "./Components/HeaderComponent/Header";
import React from "react";

test('renders header and checks for Title [Name]', () => {
    render(<Header />)

    const testElement = screen.getByText("Rashidi Alleyne");
    expect(testElement).toBeInTheDocument();

});


test('renders header and checks contact status is consistent with appropriate content', () => {
    render(<Header />)

    const testElement = screen.getByText("Open to Work");
    expect(testElement).toBeInTheDocument();
    expect(testElement).toHaveStyle({background:"radial-gradient(#4CAF50,#45a049)"});

});

