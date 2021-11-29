import React from 'react';

import './Todo.scss';

const Todo = (props: { todoName: string; todoIndex: number }) => {
  return (
    <>
      Todo {props.todoIndex}: {props.todoName}
    </>
  );
};

export default Todo;
