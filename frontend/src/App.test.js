import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import GameView from './GameView';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
  it('renders Search component and finds the search prompt', () => {
    render(<App />);
    expect(screen.getByText('Find a game:')).toBeInTheDocument();
  });
  it('expects ARIA role for search', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('expects placeholder text in search', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('🔍')).toBeInTheDocument();
  });
  it('expects a user event', async () => {
    render(<App />);
    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
  });
});

describe('GameView', () => {
  it('renders GameView component', () => {
    render(<GameView />);
  });
});
