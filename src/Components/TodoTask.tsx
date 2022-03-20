import React from "react";
import { ITask } from "../interface";

interface Props{
    task: ITask;
    completeTask(tasknametodelete: string): void;

}


const TodoTask=({task, completeTask}:Props)=>{
return( 
<div className="task">
<div className="content">
<span>{task.tasklist}</span>
<span>{task.deadline}</span>
</div>
    <button onClick={()=>{
        console.log("Im being called"+task.tasklist);
        completeTask(task.tasklist);
    }}>X</button>
    
</div>

)}

export default TodoTask;


