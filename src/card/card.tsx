import React from 'react';

export interface CardProps {
  title?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div>{props.title}</div>
  )
}

Card.defaultProps = {
  title: 'Nueva tarea'
}