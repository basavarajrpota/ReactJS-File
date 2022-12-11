import React from 'react'
import { useState } from 'react'
const B = () => {
let [count,setCount]=useState(0)
let incre=()=>{
    setCount(count++)
}
  return (
    <div>
        {count}
        <button onMouseOver={incre}>Increment</button>
    </div>
  )
}

export default B