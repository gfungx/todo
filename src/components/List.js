import React from 'react';
import { useRecoilValue } from 'recoil';
import ToDoState from '../atoms/ToDoState';

import ToDoCard from './Card';

const cardMap = arr => {
  return arr.map(({ text, completed, uid }) => <ToDoCard text={text} completed={completed} uid={uid} key={uid} />);
};

const ToDoList = ({ filter }) => {
  const toDos = useRecoilValue(ToDoState);
  let Cards;

  if (filter === 'active') {
    Cards = cardMap(toDos.filter(({ completed }) => !completed));
  } else if (filter === 'completed') {
    Cards = cardMap(toDos.filter(({ completed }) => completed));
  } else {
    Cards = cardMap(toDos);
  };

  return (
    <div className="mt-3">
      {Cards}
    </div>
  );
};

export default ToDoList;
