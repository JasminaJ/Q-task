import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './home';

test('checking if home page has link to navigate to posts', () => {
    render(
        <Router>
            <Home />
        </Router>,
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/posts');
});

export {};
