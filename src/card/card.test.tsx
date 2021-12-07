import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('Card Component', () => {
  it('should be defined', () => {
    expect(Card).toBeDefined();
  })

  it('shoud render', () => {
    expect(() => {
      render(<Card />);
    }).not.toThrow();
  })

  it('should display its title', async () => {
    const title = 'Lorem Ipsum';
    render(<Card title={title} />);
    const cardFound = await screen.findByText(title);
    expect(cardFound).toHaveTextContent(title);
  })
})