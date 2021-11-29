import { createContext } from 'react';

type TodosContextState = {
  todoList: string[];
  handleAddTodo: (name: string) => void;
};

export const contextDefaultValues: TodosContextState = {
  todoList: [],
  handleAddTodo: () => null
};

export const TodoListContext =
  createContext<TodosContextState>(contextDefaultValues);
