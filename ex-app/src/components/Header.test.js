import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('<Header />', () => {
  it('should render Header', async () => {
    render(<Header />);
    const heading = screen.getByText(/FX Calculator/);
    expect(heading).toBeInTheDocument();
  });
});
