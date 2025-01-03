/* eslint-disable react/prop-types */
import React , {useMemo} from "react";
import TaskItem from "./TaskItem";

const TaskList = ({tasks,onToggleTask,onDeleteTask})=>{
    const sortedTasks = useMemo(()=>{
        return [...tasks].sort((a,b)=>a.text.localeCompare(b.text));
    },[tasks]);

    return (
        <ul>
            {sortedTasks.map((task)=>(
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggleTask}
                    onDelete={onDeleteTask}
                />
            ))}
        </ul>
    )
}
export default React.memo(TaskList);