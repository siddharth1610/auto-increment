import React, { useState } from "react";

// const Increment = () => {
//   const [count, setCount] = useState(0);

//   const increaseMain = () => {
//     setCount(count + 1);
//   };
//   const decreaseMain = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <h1>Counter</h1>
//       <h2>{count}</h2>
//       <button onClick={increaseMain}>Increment</button>
//       <button onClick={decreaseMain}>Decrement</button>
//     </div>
//   );
// };

const Increment = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  );
};

export default Increment;
