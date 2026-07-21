import { render, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders ThinkCart.ai wordmark in the nav', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const nav = document.querySelector('.navbar');
  const brandElement = within(nav).getByText('ThinkCart', { selector: '.logo-wordmark span' });
  expect(brandElement).toBeInTheDocument();
});
