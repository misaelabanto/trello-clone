import React from 'react';

export interface InputProps {
  placeholder?: string;
  onChange?: (value: string) => string;
  onEnter?: (value: string) => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const onPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      props.onEnter?.(event.currentTarget.value);
    }
  }
  return (
    <input
      onKeyPress={onPress}
      onChange={event => props.onChange?.(event.target.value)}
      placeholder={props.placeholder}
    />
  )
}