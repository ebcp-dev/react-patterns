import React, { useState } from 'react';

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import TodoListRender from './TodoListRender';

import './TodoList.scss';

const TodoListRenderProps = () => {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleAddTodo = () => {
    if (!todoInput) {
      console.log('Enter a task to add.');
    } else {
      setTodoList((todoList) => [...todoList, todoInput]);
      setTodoInput('');
    }
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTodoInput(event.currentTarget.value);
  };

  return (
    <section className="todoList-section">
      <div className="todoList-container">
        <h1>Todo List Render Props</h1>
        <CustomTextInput
          name="todoInput"
          placeholder="Add a task"
          value={todoInput}
          onChange={handleInputChange}
        />
        <CustomButton onClick={handleAddTodo}>Add Todo</CustomButton>
        <TodoListRender renderList={todoList} showDate={true} />
      </div>
    </section>
  );
};

export default TodoListRenderProps;
