import React, {useState} from 'react'

import "./App.css"
import AddTask from './components/AddTask'
import Header from './components/Header'
import TaskList from './components/TaskList'


export default function App() {
  const [tasks, setTasks]=useState([]);

  const addTasks=(text)=>{
    setTasks([...tasks,text]);
    console.log(tasks);
  }

  const deleteTask=(index)=>{
    setTasks( tasks.filter((_, i) => i !== index));
  }
  return (
    <body>
      <div className="container">  
        <AddTask addTasks={addTasks}/>   
        <Header/> 
        <TaskList tasks={tasks} deleteTask={deleteTask}/>


      </div>
    </body>
  )
}
