import React from 'react'
import Task from './Task'


export default function TaskList({tasks,deleteTask}) {
  return (
    <div className="taskList">
      { tasks.map( (task,index) => (
            
          <Task key={index} index={index} task={task} deleteTask={deleteTask}/>
       )) }
     
    </div>
  )
}
