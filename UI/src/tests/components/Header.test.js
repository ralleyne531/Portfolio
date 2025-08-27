import {render, screen} from '@testing-library/react';
import Header from "../../Components/HeaderComponent/Header";
import React from "react";

describe("<Header />", () => {
    it("renders the title and contact status without crashing ", () => {
        render(<Header />);
    })

    test('renders header and title: [Name]', () => {
        render(<Header />)

        const title = screen.getByRole('heading', {
            name: /Rashidi Alleyne/i
        });

        expect(title).toBeInTheDocument();

    });


    test('renders header and loads \'open\' contact status with appropriate content', () => {
        render(<Header />)

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("open");
        expect(button).toHaveTextContent(/Open to Work/i);

    });

})

