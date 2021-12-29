import { fireEvent, render, screen } from '@testing-library/react';
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
  it('should display cards by each list', async () => {
    const cardList1 = await screen.findByText('Realizar demo');
    expect(cardList1).toHaveTextContent('Realizar demo');
  })
  it('should add a card to a list when press enter on its input', async () => {
    const inputFound = await screen.findByPlaceholderText('Nuevo Pendiente');
    fireEvent.change(inputFound, {
      target: {
        value: 'Terminar presentación',
      },
    });
    fireEvent.keyPress(inputFound, {
      key: 'Enter',
      keyCode: 13,
    });
    const newCardAdded = await screen.findByText('Terminar presentación');
    expect(newCardAdded).toHaveTextContent('Terminar presentación');
  })
})