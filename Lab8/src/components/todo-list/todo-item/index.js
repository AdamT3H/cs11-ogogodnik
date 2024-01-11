// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import TodosContext from '../../../context/todo.context';

// /**
//  * 
//  * @param {Object} props 
//  * @param {string} props.text
//  * @param {Date} props.createdAt
//  * @returns 
//  */
const ToDoItemComponent = (/*props*/) => {

    const todoItem = document.querySelector(".todo-item");
    const todoList = document.querySelector(".todo-allList");

//  const text = props.text || "Text of todo item";
//  const date = (props.createdAt || new Date()).toDateString();

 return (
    <div className='todo-allList'>
        
        <div className='todo-item'>
        {/* <div>
            <input class="form-check-input" type="checkbox" value="option1" />
            <label class="form-check-label" for="inlineCheckbox1"></label>
            <span class="todo-text">{text}</span>
        </div>
        <span class="todo-text">{date}</span>
        <span class="span-button">
            <FontAwesomeIcon icon={faTrash} />
        </span>
        <span class="span-button">
            <FontAwesomeIcon icon={faPen} />
        </span> */}
        </div>
        <TodosContext.Provider value={{
            todoList,
            todoItem
        }}></TodosContext.Provider>
    </div>
        );
};

export default ToDoItemComponent;