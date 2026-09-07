import React from 'react';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Header from './components/layouts/Header';

test('renders a useful not-found page for an unknown route', async () => {
  window.history.pushState({}, '', '/missing-page');
  const { getByRole } = render(<App />);
  const heading = await waitForElement(() => getByRole('heading', { name: /page not found/i, level: 1 }));
  expect(heading).toBeInTheDocument();
  expect(getByRole('main')).toBeInTheDocument();
});

test('keeps the closed mobile menu out of the keyboard order', async () => {
  window.innerWidth = 390;
  const { container, getByLabelText, getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  await waitForElement(() => getByLabelText('Open main menu'));
  const navigation = container.querySelector('#primary-navigation');
  const homeLink = getByText('Home');

  expect(navigation).toHaveAttribute('aria-hidden', 'true');
  expect(homeLink).toHaveAttribute('tabindex', '-1');

  fireEvent.click(getByLabelText('Open main menu'));

  expect(navigation).toHaveAttribute('aria-hidden', 'false');
  expect(homeLink).toHaveAttribute('tabindex', '0');
  expect(homeLink).toHaveFocus();

  const apartmentButton = getByText('Apartment');
  fireEvent.click(apartmentButton);
  expect(apartmentButton).toHaveAttribute('aria-expanded', 'true');
});
