import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { List, ListProps } from './list/list';
import { CardProps } from './card/card';

function App() {
  const [lists, setLists] = useState<ListProps[]>([
    {
      name: 'Pendiente',
      cards: [{
        title: 'Realizar demo'
      }],
    },
    {
      name: 'Hecho',
      cards: [{
        title: 'Realizar presentación'
      }],
    }
  ]);
  const onCardAdded = (listIndex: number, card: CardProps) => {
    console.log('ADDED');
    const list = lists[listIndex];
    console.log(list);
    list.cards = list.cards?.concat(card);
    setLists([...lists]);
  }
  useEffect(() => {
    setLists([...lists]);
  }, [])
  return (
    <div style={{ display: 'flex' }}>
      {lists.map((list, index) => (
        <List
          key={list.name! + index}
          name={list.name}
          cards={list.cards}
          onCardAdded={card => onCardAdded(index, card)}
        />
      ))}
    </div>
  );
}

export default App;
