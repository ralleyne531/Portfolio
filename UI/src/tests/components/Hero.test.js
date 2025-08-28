import {render, screen} from '@testing-library/react';
import Hero from "../../Components/Hero";
import React from "react";

describe("<Hero />", () => {
    it("renders the title and bio status without crashing ", () => {
        render(<Hero />);
    })

    test("renders the title, role, and bio status with appropriate content", () => {
        render(<Hero />);

        let testElement = screen.getByRole('heading', {level : 1})
        expect(testElement).toBeInTheDocument();

        testElement = screen.getByRole('heading', {level : 5})
        expect(testElement).toBeInTheDocument();

        testElement = screen.getByRole('paragraph')
        expect(testElement).toBeInTheDocument();

    })
})