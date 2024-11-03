import React, { useState } from 'react'

const TO_DO_2 = () => {
    const [tasks,setTasks]=useState([])
    const [input,setInput]=useState('')

    const addTask=()=>{
        if(input.trim !==""){
            let result=[...tasks,{id:Date.now(),text:input,taskCompleted:false}]
            setTasks(result)
            console.log(result)
            setInput('')
        }
    }

    const toggleTask=(id)=>{
        const update=tasks.map((task)=>
            task.id===id ? {...task,taskCompleted:!task.taskCompleted}:task
        )
        setTasks(update)
        
    }

    const handleRemove=(id)=>{
        const up=tasks.filter((task)=>task.id !== id)
        setTasks(up)

    }
  return (
    <>
    <div>
        <h1>TO_DO</h1>
        <input type="text" 
        placeholder='Write here!!'
        value={input}
        onChange={(e)=>setInput(e.target.value)} />
        <button onClick={addTask}>Add</button>
    </div>
    <div>
        <ol>
            {
                tasks.map((task)=>(
                    <li key={task.id}>
                        <input type="checkbox"
                        checked={task.taskCompleted}
                        onChange={()=>toggleTask(task.id)} />

                        <span style={{textDecoration:task.taskCompleted?'line-through':'none'}}>{task.text}</span>
                    
                
                <button onClick={()=>handleRemove(task.id)}>Remove</button></li>
            ))}
        </ol>

    </div>
</>
  )
}

export default TO_DO_2