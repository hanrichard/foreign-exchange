import { render, screen } from '@testing-library/react';
import React from 'react';
import Exchange from './Exchange';

describe('<Exchange />', () => {
  it('should render Header', async () => {
    render(<Exchange />);
    const from = screen.getByText(/from/i);
    expect(from).toBeInTheDocument();
    const to = screen.getByText(/to/i);
    expect(to).toBeInTheDocument();
    const amount = screen.getByText(/amount/i);
    expect(amount).toBeInTheDocument();
  });
});
