import React,{useState} from 'react'

export default function AddTask({addTasks}) {
    const [text,setText]=useState("");

    const handleChange =(event)=>{
        setText(event.target.value);
    }

    const handleClick=()=>{
      addTasks(text);
      setText("");
    }

  return (
    <div className="addTask">
        <div className="inputBox">
            <input type="text" value={text} onChange={handleChange} placeholder="Enter your todo" />
        </div>
        <div className="submitBox">
            <button type="submit" onClick={handleClick}>+</button>
        </div>
    </div>
  )
}
