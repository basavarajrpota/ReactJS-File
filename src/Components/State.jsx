
// making state to dynamic by using onClick event
import { useState } from "react";

const State=()=>{
let[data,setData]=useState(1)
let o=()=>{
    setData(data++)
}
let oo=()=>{
    setData(data--)
}
let ooo=()=>{
    setData(0)
}
    return(
        <div className="mutate">
           {data}
           <br /><button onClick={o} >Increment</button><br />
           <button onClick={oo}>Decrement</button><br />
           <button onClick={ooo}>Reset</button>
        </div>
    )
}

export default State