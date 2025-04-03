import {render, screen } from '@testing-library/react';
import Header from "./Components/HeaderComponent/Header";

test('renders header and checks for Title [Name]', () => {
    render(<Header />)

    const testElement = screen.getByText("Rashidi Alleyne");
    expect(testElement).toBeInTheDocument();

});

test('renders header and checks contact button is clickable', () => {
    render(<Header />)

    const testElement = screen.findByTitle()
    expect(testElement).toBeInTheDocument();

});

test('renders header and checks contact status is consistent with appropriate button content', () => {
    render(<Header />)

    const testElement = screen.findByTitle()
    expect(testElement).toBeInTheDocument();

});

test('renders header and checks contact button opens mailto', () => {
    render(<Header />)

    const testElement = screen.findByTitle()
    expect(testElement).toBeInTheDocument();

});

test('renders header and checks aside button opens navigation', () => {
    render(<Header />)

    const testElement = screen.findByTitle()
    expect(testElement).toBeInTheDocument();

});
