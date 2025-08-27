import {render, screen} from '@testing-library/react';
import Hero from "../../Components/Hero";
import React from "react";

describe("<Hero />", () => {
    it("renders the title and bio status without crashing ", () => {
        render(<Hero />);
    })

    test("renders the title, role, and bio status with appropriate content", () => {
        render(<Hero />);

        const title = screen.getByRole('heading', {level : 1})
        expect(title).toBeInTheDocument();

        const role = screen.getByRole('heading', {level : 5})
        expect(title).toBeInTheDocument();

    })
})