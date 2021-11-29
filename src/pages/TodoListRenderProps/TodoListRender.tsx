import React from 'react';

import Todo from './components/Todo/Todo';

const TodoListRender = (props: {
  renderList: Array<string>;
  showDate: boolean;
}) => {
  const { renderList, showDate } = props;

  const newDateObj = new Date();
  const currYear = newDateObj.getFullYear().toString();
  const currDate = newDateObj.getDate().toString();
  const currMonth = (newDateObj.getMonth() + 1).toString();

  const todoDate = ` (${currMonth}/${currDate}/${currYear})`;

  return (
    <ul>
      {renderList.map((item, index) => {
        return (
          <li key={index}>
            <Todo todoName={item} todoIndex={index} />
            {showDate ? todoDate : null}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoListRender;
