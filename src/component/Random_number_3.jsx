import React, { useState } from 'react'

const Random_number_3 = () => {
    const [number,setRandom]=useState(0)
    const [input,setInput]=useState(0)
    // const generate=(value)=>{
    //     let result = Math.floor(Math.random()*value)
    //     setRandom(result)
    // }
    const generate = (digitCount) => {
        if (digitCount < 1) return; // Handle invalid input
    
        // Calculate the minimum and maximum values for the given digit count
        const min = Math.pow(10, digitCount - 1);
        const max = Math.pow(10, digitCount - 1);
    
        // Generate a random number within the range
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandom(result);
    };
    
  return (
    <>
    <div>
        <h1>Random Number Generator</h1>
    </div>
    <div>
        <input type="number"
        placeholder='Enter Digit'
        value={input}
        onChange={(e)=>setInput(e.target.value)} />

        <button onClick={()=>generate(input)}>Click to generate random number</button>
        <h2>{number}</h2>
    </div>
    </>
  )
}

export default Random_number_3