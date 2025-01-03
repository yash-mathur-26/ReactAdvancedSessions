import { useCallback, useReducer } from 'react'
import './App.css'
import { taskReducer } from './reducers/taskReducer'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  const [tasks,dispatch]=useReducer(taskReducer,[]);
  const handleAddTask=useCallback(
    (taskText)=>{
      dispatch({type:"ADD_TASK",payload:taskText});
    },
    [dispatch]
  );
  const handleToggleTask=useCallback(
    (taskId)=>{
      dispatch({type:"TOGGLE_TASK",payload:taskId});
    },
    [dispatch]
  );
  const handleDeleteTask = useCallback(
    (taskId)=>{
      dispatch({type:"DELETE_TASK",payload:taskId});
    },
    [dispatch]
  )
  
  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask onAddTask={handleAddTask}/>
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask}/>
    </div>
  )
}

export default App
