import React from 'react'
import { useState } from 'react'
function AddTask({onAdd}) {
    const [input, setInput] = useState("");
    const handleAdd = () => {
        if(input.trim() === "") return;
        onAdd(input);
        setInput("");
    }
  return (
    <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a task" />
        <button onClick={handleAdd}>Add Task</button>
    </div>
  )
}

export default AddTask