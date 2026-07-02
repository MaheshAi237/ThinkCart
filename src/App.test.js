import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders Thinkcart.ai nav brand', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const brandElement = screen.getByText('Thinkcart.ai', { selector: '.nav-title' });
  expect(brandElement).toBeInTheDocument();
});
