import { render, screen, fireEvent } from '@testing-library/react';
import { CardProps } from '../card/card';
import { List } from './list';

describe('List Component', () => {
  it('should be defined', () => {
    expect(List).toBeDefined();
  })

  it('should render', () => {
    expect(() => {
      render(<List />);
    }).not.toThrow();
  })

  it('should display its name', async () => {
    const name = 'Pendiente';
    render(<List name={name} />);
    const listFound = await screen.findByText(name);
    expect(listFound).toHaveTextContent(name);
  })

  it('should display defined cards', async () => {
    const name = 'Pendiente';
    const cards: CardProps[] = [
      {
        title: 'Realizar presentación',
      },
      {
        title: 'Preprar sesión práctica'
      }
    ];
    render(<List name={name} cards={cards} />);
    const cardFound1 = await screen.findByText(cards[0].title!);
    const cardFound2 = await screen.findByText(cards[1].title!);
    expect(cardFound1).toHaveTextContent(cards[0].title!);
    expect(cardFound2).toHaveTextContent(cards[1].title!);
  })

  it('should have an input', async () => {
    const name = 'Pendiente';
    const placeholder = 'Nuevo ' + name;
    const cards: CardProps[] = [
      {
        title: 'Realizar presentación',
      },
      {
        title: 'Preprar sesión práctica'
      }
    ];
    render(<List name={name} cards={cards} />);
    const inputFound = await screen.findByPlaceholderText(placeholder);
    expect(inputFound).toHaveAttribute('placeholder', placeholder);
  })
  
  it('should add a card on input enter', async () => {
    const name = 'Pendiente';
    const placeholder = 'Nuevo ' + name;
    const onCardAdded = jest.fn();
    const cards: CardProps[] = [
      {
        title: 'Realizar presentación',
      },
      {
        title: 'Preprar sesión práctica'
      }
    ];
    render(<List name={name} cards={cards} onCardAdded={onCardAdded} />);
    const inputFound = await screen.findByPlaceholderText(placeholder);
    fireEvent.change(inputFound, {
      target: {
        value: 'Nueva tarjeta agregada',
      },
    });
    fireEvent.keyPress(inputFound, {
      target: {
        key: 'Enter',
      }
    })
  })
})