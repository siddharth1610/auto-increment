import React, { useState } from "react";

const Mobile_number_validator_6 = () => {
  const [input, SetInput] = useState("");
  //const [validate,setValidate]=useState('')
  const [validate, setValidate] = useState(false);

  // const validator=(val)=>{
  //     if(val.length===0){
  //         setValidate('')
  //         return
  //     }
  //     if(val.length !==10){
  //         setValidate('Enter 10 digit')
  //         return
  //     }
  // }

  // const handleInput=(e)=>{
  //     SetInput(e.target.value)
  //     validator(e.target.value)
  // }

  const handleInput = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.slice(0, 10);
    SetInput(value);

    const isValidPhone = /^\d{10}$/g.test(value);
    console.log(isValidPhone);
    
    setValidate(isValidPhone);
  };
  return (
    <>
      <div>
        <h1>Mobile Number validator</h1>
        <input
          type="number"
          placeholder="Enter your mobile number"
          value={input}
          onChange={handleInput}
        />
      </div>
      <h3>{validate?(
        <p style={{color:'green'}}>Number valid</p>
      ):(
        <p style={{color:'red'}}>Number Invalid</p>
      )}</h3>
    </>
  );
};

export default Mobile_number_validator_6;
