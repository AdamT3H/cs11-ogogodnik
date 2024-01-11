import './style.css';
import ToDoInputComponent from './todo-input';
import ToDoListComponent from './todo-list';

function App () {
  return (
    <div className="App">
      <ToDoInputComponent />
      <ToDoListComponent />
    </div>
  );
}

export default App;
