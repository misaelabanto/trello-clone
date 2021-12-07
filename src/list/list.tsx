import React from 'react';
import { CardProps, Card } from '../card/card';
import { Input } from '../input/input';

export interface ListProps {
  name?: string;
  cards?: CardProps[];
  onCardAdded?: () => CardProps;
}

export const List: React.FC<ListProps> = (props) => {
  const cards = props.cards;
  return (
    <div>
      <h1>{props.name}</h1>
      {cards && cards.map((card, index) => (
        <Card key={card.title! + index} title={card.title} />
      ))}
      <Input placeholder={'Nuevo ' + props.name}/>
    </div>
  )
}