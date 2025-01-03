import React, {useState,useCallback} from "react";
// eslint-disable-next-line react/prop-types
const AddTask = ({onAddTask})=>{
    const [task,setTask] = useState("");
    const handleAddTask = useCallback(()=>{
        if(task.trim()){
            onAddTask(task);
            setTask("");
        }
    }, [task,onAddTask]);

    return (
        <div>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}
                placeholder="Enter new Task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    )

}
export default React.memo(AddTask);