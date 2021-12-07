import React from 'react';

export interface InputProps {
  placeholder?: string;
  onChange?: (value: string) => string;
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input 
      onChange={event => props.onChange && props.onChange(event.target.value)}
      placeholder={props.placeholder}
    />
  )
}