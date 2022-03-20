import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./interface";
import TodoTask from "./Components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  let [todoList, setTodolist] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };
  const addTask = () => {
    const newTask: ITask = { tasklist: task, deadline: deadline };
    setTodolist([...todoList, newTask]);
    console.log(todoList);
    setTask("");
    setDeadline(0);
  };
  const completeTask=(taskNameTodelete: string):void=>{
    console.log("Im also called"+ taskNameTodelete)
    todoList= todoList.filter((task)=>{
      return (task.tasklist !== taskNameTodelete);
    })
    console.log(todoList);
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputCoantainer">
          <input
            type="text"
            placeholder="Task...."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in days)...."
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todolist">
          {
            todoList.map((task: ITask,key:number)=>{
              return <TodoTask key={key} task={task} completeTask={completeTask} />
            })
          }
      </div>
    </div>
  );
};

export default App;
