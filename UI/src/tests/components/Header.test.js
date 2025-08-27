import {render, screen} from '@testing-library/react';
import Header from "../../Components/HeaderComponent/Header";
import React from "react";

describe("<Header />", () => {
    it("renders the title and contact status without crashing ", () => {})

    test('renders header and title: [Name]', () => {
        render(<Header />)

        const testElement = screen.getByRole('heading', {
            name: 'Rashidi Alleyne'
        });

        expect(testElement).toBeInTheDocument();

    });


    test('renders header and loads \'open\' contact status with appropriate content', () => {
        render(<Header />)

        const testElement = screen.getByRole('button');

        expect(testElement).toBeInTheDocument();
        expect(testElement).toHaveAttribute("open");
        expect(testElement).toHaveTextContent("Open to Work");

    });

})

