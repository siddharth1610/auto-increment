import React, { useState } from "react";

const Form_handling=()=>{
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")

    const handleSubmit=(e)=>{
e.preventDefault()
//in axios dirctly send it with post link.
console.log({username,email})
setUsername('')
setEmail('')
    }
    return(
        <>
        <form onSubmit={handleSubmit}autoComplete='off'>
            <input type="text"
            placeholder="Name"
            
            value={username}
            onChange={(e)=>setUsername(e.target.value)} />

            <input type="text" 
             placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            <button type="submit">Click</button>
        </form>
        </>
    )
}
export default Form_handling