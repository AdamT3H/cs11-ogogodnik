import './style.css';
import TodosContext from '../../context/todo.context';
import {useRef, useContext} from 'react';


const ToDoInputComponent = () => {

    const addRef = useRef();

    const updateButton = document.querySelector(".update");

    const addButton = document.querySelector(".add");

    const {todos, addTodoItem, updateTodoButton} = useContext(TodosContext);

    const addInput = () => {

        const reading = addRef.current.value;

        if (reading === ""){

            return

        };

        addTodoItem(reading);

        addRef.current.value = "";

    };

    const updateInput = (id) => {

        addButton.style.display = "none";

        updateButton.style.display = "inline";

        addRef.value = todos[id].text;

    };



 return (
  <div className='todo-input-section'>
   <input ref={addRef} type="text" placeholder="Add item..." />
   <button onClick = {addInput} type="submit" class="add">
    Add
   </button>
   <button id="update-button" type="button" class="update">
    Update
   </button>
   <div id="search">
    <input id="search-input" type="text" placeholder="Search" />
    <span>X</span>
   </div>
   <button id="search-button" type="button" class="search">Search</button>

   <TodosContext.Provider value={{ updateInput }}></TodosContext.Provider>
   
  </div>
 );
};

export default ToDoInputComponent;