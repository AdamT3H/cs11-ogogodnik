import './style.css';
import TodosContext from '../../context/todo.context';
import {useContext, useEffect} from 'react';


const ToDoInputComponent = () => {

    // const [textTodo, setTextTodo] = useState('');
    // const { todo, setTodos } = useContext(TodosContext);
    let todoStateIndex = -1;
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    const {todoList} = useContext(TodosContext);
    const {todoItem} = useContext(TodosContext);

    let todoSection, todoInput, addButton, updateButton;

    useEffect(() => {
    todoSection = document.querySelector(".todo-section"); /*form*/
    todoInput = document.querySelector("#todo-Input");
    addButton = document.querySelector("#add-Button");
    updateButton = document.querySelector("#update-Button");
    // const searchInput = document.querySelector("#search-Input");
    // const searchButton = document.querySelector("#search-Button");
    
    if (addButton) {
        addButton.addEventListener("click", addToList);
    }  

    // if (todoSection) {
    //     todoSection.addEventListener("submit", addToList);
    // }

    return () => {

    };
    }, []);

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    
    function createTodos() {

        if (!todoList) {
            console.error("Елемент списку справ не визначений");
            return;
        };

    
        

        todos.forEach((todo, index) => {

            todoItem.innerHTML = "";

            const todo_item = document.createElement("todo-elem");
            todo_item.className = "todo-elem";

            const checkbox = document.createElement("input");
            checkbox.className = "form-check-input";
            checkbox.type = "checkbox";
            checkbox.value = "option1";
            checkbox.checked = todo.completed;
            checkbox.addEventListener("change", () => toggleTodoCompleted(index));

            const label = document.createElement("label");
            label.className = "form-check-label";

            const elementText = document.createElement("element");
            elementText.className = "todo-text";
            elementText.textContent = `${todo.text} / ${todo.date}`;

            const deleteButton = document.createElement("element");
            deleteButton.className = "element-button";
            deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
            deleteButton.addEventListener("click", () => deleteTodo(index));

            const editButton = document.createElement("element");
            editButton.className = "element-button";
            editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
            editButton.addEventListener("click", () => editTodo(index));

            todo_item.appendChild(checkbox);
            todo_item.appendChild(label);
            todo_item.appendChild(elementText);
            todo_item.appendChild(deleteButton);
            todo_item.appendChild(editButton);

            todoItem.appendChild(todo_item);

        });

    };

    function addToList() {

        const textTodo = todoInput.value;

        if (textTodo !== "") {
            const currentDate = new Date();

            if (todoStateIndex === -1) {
                todos.push({
                    text: textTodo,
                    completed: false,
                    date: currentDate.toLocaleString(),
                });
            } else {
                todos[todoStateIndex].text = textTodo;
                todos[todoStateIndex].date = currentDate.toLocaleString();
                todoStateIndex = -1;
                addButton.style.display = "inline";
                updateButton.style.display = "none";
                }
            
            saveTodos();
            createTodos();
            todoInput.value = "";
        };

        return false; //не дає перезавантажити сайт//

    };

    function toggleTodoCompleted(index) {
        todos[index].completed = !todos[index].completed;
        saveTodos();
        createTodos();
    };

    function deleteTodo(index) {
        todos.splice(index, 1);
        saveTodos();
        createTodos();
    };
    
    function editTodo(index) {
        const textTodo = todos[index].text;
        todoInput.value = textTodo;
        todoStateIndex = index;
        addButton.style.display = "none";
        updateButton.style.display = "inline";
    }


    // if (addButton) {
    //     addButton.addEventListener("click", addToList);
    // }                                 

    // updateButton.addEventListener("click", addToList);
    // // searchButton.addEventListener("click", searchTodo);
    // createTodos();

 return (
  <div className='todo-section'>
   <input id="todo-Input" type="text" placeholder="Add item..."/>
   <button id="add-Button" type="submit" class="add">
    Add
   </button>
   <button id="update-Button" type="button" class="add hide">
    Update
   </button>
   <div id="search">
    <input id="search-Input" type="text" placeholder="Search" />
    <span>X</span>
   </div>
   <button id="search-Button" type="button">Search</button>
  </div>

  
 );
};

export default ToDoInputComponent;