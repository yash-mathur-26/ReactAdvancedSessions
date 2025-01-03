/* eslint-disable react/prop-types */
import React from "react";
// eslint-disable-next-line react/prop-types
const TaskItem = ({task,onToggle,onDelete})=>{
    return (
        <li>
            <span style={{textDecoration:task.completed ? "line-through":"none","cursor":"pointer"}} onClick={()=> onToggle(task.id)}>
                {task.text}
            </span>
            <button onClick={()=>onDelete(task.id)}>Delete</button>
        </li>
    )
}
export default React.memo(TaskItem);