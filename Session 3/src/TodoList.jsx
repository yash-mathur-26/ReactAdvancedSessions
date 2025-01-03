import { useState } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { addTodo,toggleTodo,deleteTodo } from "../src/features/todo/todoSlice";
import './App.css'

const TodoList=()=> {
    const [input,setInput] = useState('');
    const todos = useSelector((state)=>state.todos.items);
    const dispatch = useDispatch();

    const handleAddTodo=()=>{
        if(input.trim()){
            dispatch(addTodo(input));
            setInput('');
        }
    };
    return (
        <div style={{padding:'20px'}}>
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder='Enter a task'
                />
                <button onClick={handleAddTodo}>Add Task</button>
            </div>
            <ul style={{listStyle:"none",padding:0}}>
                {todos.map((todo)=>(
                    <li
                        key={todo.id}
                        style={{
                            display:"flex",
                            justifyContent:"space-between",
                            textDecoration:todo.completed?'line-through':"none",
                            marginBottom:'10px',
                        }}
                    >
                        <span onClick={()=>dispatch(toggleTodo(todo.id))}
                            style={{cursor:'pointer'}}
                        >
                            {todo.text}
                        </span>
                        <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default TodoList;
