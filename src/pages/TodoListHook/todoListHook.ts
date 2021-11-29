import { useCallback, useState } from 'react';
// Usage
// function App() {
// Call the hook which returns, current value and the toggler function
// const [isTextChanged, setIsTextChanged] = useToggle();
// return (
//   <button onClick={setIsTextChanged}>
//     {isTextChanged ? 'Toggled' : 'Click to Toggle'}
//   </button>
// );
// }
// Hook
export const useTodoList = (initialValue: Array<string> = []) => {
  const [value, setValue] = useState<Array<string>>(initialValue);

  const addTodo = useCallback((element: string) => {
    setValue((oldValue) => [...oldValue, element]);
  }, []);

  const removeTodo = useCallback((index: number) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  }, []);

  const todoMap = useCallback(
    (callback) => {
      const newArr = [];
      for (let i = 0; i < value.length; i++) {
        newArr.push(callback(value[i], i, value));
      }
      return newArr;
    },
    [value]
  );

  const todoIsEmpty = () => value.length === 0;

  return { value, setValue, addTodo, removeTodo, todoMap, todoIsEmpty };
};
