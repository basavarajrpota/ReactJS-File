import React from 'react'
import {useState} from 'react'
const A = () => {
    let [count, setCount]=useState(0);
let incre=()=>{
    setCount(count++);
}
  return (
    <div>
        {count}
<button onClick={incre}>Increment</button>
    </div>
  )
}

export default A