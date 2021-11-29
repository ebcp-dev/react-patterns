import React, { useState } from 'react';

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';

import './TodoList.scss';
import Todo from './components/Todo/Todo';

const TodoListHOC = () => {
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

  const renderTodoList = todoList.map((item: string, index: number) => {
    // Change key to unique value. List index shouldn't be used as unique key because multiple lists could result in duplicate indexes.
    return <Todo todoName={item} todoIndex={index} key={index} />;
  });

  return (
    <section className="todoList-section">
      <div className="todoList-container">
        <h1>Todo List HOC (withDate)</h1>
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

export default TodoListHOC;
