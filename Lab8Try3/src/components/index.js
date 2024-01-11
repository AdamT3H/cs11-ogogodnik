import { useState } from 'react';
import './style.css';
import ToDoInputComponent from './todo-input';
import ToDoListComponent from './todo-list';
import TodosContext from '../context/todo.context';
import { v1 as uuidv1 } from 'uuid';

function App () {

  const [todos, setTodos] = useState([]);

  const [localStorageTodos, setLocalStorageTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todoStorageElement");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTodoItem = (text) =>{

    setTodos(prev => ([...prev, {localStorageTodos}]));

    localStorageTodos.push({
     id: uuidv1(),
     text: text, 
     date: new Date().toLocaleString(),
    });

   localStorage.setItem("todoStorageElement", JSON.stringify(localStorageTodos));

  };

  const updateTodoItem = (text) =>{

    localStorageTodos.text = text;


  };

  const filterTodoItem = (id) => {
    const updatedTodos = localStorageTodos.filter(todo => todo.id !== id);
    setLocalStorageTodos(updatedTodos);
    localStorage.setItem("todoStorageElement", JSON.stringify(updatedTodos));
  };

  const deleteTodoItem = (id) => {
    if (id) {
      filterTodoItem(id);
    }
  };

  return (
    <div className="App">
      <TodosContext.Provider value={{todos: localStorageTodos, addTodoItem, deleteTodoItem, updateTodoItem}}>    

      <ToDoInputComponent />
      <ToDoListComponent />

      </TodosContext.Provider>
    </div>
  );
}

export default App;
