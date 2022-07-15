import { render, screen } from '@testing-library/react';
import DanyayaJSApp from './App';

test('renders learn react link', () => {
  render(<DanyayaJSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
