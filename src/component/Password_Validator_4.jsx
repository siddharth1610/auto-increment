import React, { useState } from "react";

const Password_Validator_4 = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState('');

  const validate = (val) => {
    if(val===""){
        setPassword('')
        return
    }
    let strong =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let medium = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (strong.test(val)) {
      setPassword("Strong");
    } else if (medium.test(val)) {
      setPassword("Medium");
    } else {
      setPassword("Weak");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    validate(e.target.value);
  };
  return (
    <>
      <div>
        <h1>Password_Validator_4</h1>
        <input
          type="password"
          placeholder="Write Password"
          value={input}
          onChange={handleChange}
        />
      </div>
      <p>Password Strength:{password}</p>
    </>
  );
};

export default Password_Validator_4;
