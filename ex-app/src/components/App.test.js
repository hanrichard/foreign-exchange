import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<App />);
  const heading = screen.getByText(/FX Calculator/);
  expect(heading).toBeInTheDocument();
});
