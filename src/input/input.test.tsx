import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './input';

describe('Input Component', () => {
  it('should display its placeholder', async () => {
    const placeholder = 'Añadir nueva tarjeta';
    render(<Input placeholder={placeholder}/>);
    const inputFound = await screen.findByPlaceholderText(placeholder);
    expect(inputFound).toHaveAttribute('placeholder', placeholder);
  })
  it('should retrieve the typed text', async () => {
    const onChange = jest.fn();
    const placeholder = 'Nueva tarea';
    const valueTyped = 'Crear presentación';
    render(<Input placeholder={placeholder} onChange={onChange} />);
    const inputFound = await screen.findByPlaceholderText(placeholder);
    fireEvent.change(inputFound, {
      target: {
        value: valueTyped,
      }
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(valueTyped);
  })
  it('should retrieve if enter was pressed', () => {
    
  })
})