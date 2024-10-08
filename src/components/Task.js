import React from 'react'

export default function Task({task,index,deleteTask}) {
  return (
    <div className="task">
        <div className="taskText">
           <p>{task}</p> 
           
        </div>
        <div className="taskButton">
            <button onClick={ () => deleteTask(index)}><i class="fas fa-trash-alt"></i></button>
        </div>
    </div>
  )
}
