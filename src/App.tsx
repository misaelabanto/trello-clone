import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { List, ListProps } from './list/list';

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
  const onCardAdded = (listIndex: number, cardTitle: string) => {

  }
  useEffect(() => {
    setLists([...lists]);
  }, [])
  return (
    <div className='board'>
      {lists.map(list => <List />)}
    </div>
  );
}

export default App;
