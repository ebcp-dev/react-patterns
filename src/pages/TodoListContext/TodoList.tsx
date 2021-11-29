import React, { useContext, useState } from 'react';

import { TodoListContext } from './context/TodoListContext';
import TodoListProvider from './TodoListProvider';

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import Todo from './components/Todo/Todo';

import './TodoList.scss';

const TodoListContextAPI = () => {
  const [todoInput, setTodoInput] = useState('');
  const { todoList, handleAddTodo } = useContext(TodoListContext);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTodoInput(event.currentTarget.value);
  };

  const renderTodoList = todoList.map((item: string, index: number) => {
    return <Todo todoName={item} todoIndex={index} key={index} />;
  });

  return (
    <section className="todoList-section">
      <div className="todoList-container">
        <h1>Todo List Context API</h1>
        <CustomTextInput
          name="todoInput"
          placeholder="Add a task"
          value={todoInput}
          onChange={handleInputChange}
        />
        <CustomButton onClick={() => handleAddTodo(todoInput)}>
          Add Todo
        </CustomButton>
        {renderTodoList}
      </div>
    </section>
  );
};

const TodoListContextAPIWrapper = () => (
  <TodoListProvider>
    <TodoListContextAPI />
  </TodoListProvider>
);

export default TodoListContextAPIWrapper;
