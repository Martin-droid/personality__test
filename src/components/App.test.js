
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EndScreen from './EndScreen';
import Menu from './Menu';
import Test from './Test';



test('renders the Menu page', () => {
  render(<Menu />);
});

test('renders the Menu page', () => {
  render(<Test />);
});

test('renders the Menu page', () => {
  render(<EndScreen />);
});