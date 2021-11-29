import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import TodoList from '../pages/TodoListRedux/TodoList';
import TodoListContextAPIWrapper from '../pages/TodoListContext/TodoList';
import TodoListHOC from '../pages/TodoListHOC/TodoList';
import TodoListHook from '../pages/TodoListHook/TodoList';
import TodoListRenderProps from '../pages/TodoListRenderProps/TodoList';
import NotFound from '../pages/NotFound/NotFound';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">TodoList Redux</Link>
        </li>
        <li>
          <Link to="/context">TodoList Context API</Link>
        </li>
        <li>
          <Link to="/hoc">TodoList HOC</Link>
        </li>
        <li>
          <Link to="/hook">TodoList Custom Hook</Link>
        </li>
        <li>
          <Link to="/render-props">TodoList Render Props</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/context" element={<TodoListContextAPIWrapper />} />
        <Route path="/hoc" element={<TodoListHOC />} />
        <Route path="/hook" element={<TodoListHook />} />
        <Route path="/render-props" element={<TodoListRenderProps />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
