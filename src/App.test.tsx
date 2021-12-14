import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  })
  it('should display two inital lists', async () => {
    const list1 = await screen.findByText('Pendiente');
    expect(list1).toHaveTextContent('Pendiente');
    const list2 = await screen.findByText('Hecho');
    expect(list2).toHaveTextContent('Hecho');
  });
})