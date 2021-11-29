import React, { useState } from 'react';

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import Todo from './components/Todo/Todo';

import { useTodoList } from './todoListHook';

import './TodoList.scss';

const TodoListHook = () => {
  const [todoInput, setTodoInput] = useState('');
  const todoList = useTodoList([]);

  const handleAddTodo = () => {
    if (!todoInput) {
      console.log('Enter a task to add.');
    } else {
      todoList.addTodo(todoInput);
      setTodoInput('');
    }
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTodoInput(event.currentTarget.value);
  };

  const renderTodoList = todoList.todoMap((item: string, index: number) => {
    // Change key to unique value. List index shouldn't be used as unique key because multiple lists could result in duplicate indexes.
    return <Todo todoName={item} todoIndex={index} key={index} />;
  });

  return (
    <section className="todoList-section">
      <div className="todoList-container">
        <h1>Todo List Custom Hook</h1>
        <CustomTextInput
          name="todoInput"
          placeholder="Add a task"
          value={todoInput}
          onChange={handleInputChange}
        />
        <CustomButton onClick={handleAddTodo}>Add Todo</CustomButton>
        {renderTodoList}
      </div>
    </section>
  );
};

export default TodoListHook;
