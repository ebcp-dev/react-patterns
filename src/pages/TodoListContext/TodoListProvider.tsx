import React, { useState } from 'react';

import {
  contextDefaultValues,
  TodoListContext
} from './context/TodoListContext';

const TodoListProvider: React.FunctionComponent = ({ children }) => {
  const [todoList, setTodoList] = useState<string[]>(
    contextDefaultValues.todoList
  );

  const handleAddTodo = (newTodo: string) => {
    if (!newTodo) console.log('Enter a task.');
    else setTodoList((todoList) => [...todoList, newTodo]);
  };

  return (
    <TodoListContext.Provider value={{ todoList, handleAddTodo }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
