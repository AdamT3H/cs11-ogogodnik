import './style.css';
import ToDoItemComponent from './todo-item';


const ToDoListComponent = () => {
 return (
  <div className='todo-list'>
   <ToDoItemComponent />
  </div>
 );
};

export default ToDoListComponent;