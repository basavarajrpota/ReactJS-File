import { useState } from 'react';

const State1=()=>{
    let[string,setString]=useState("hungry")
    let p=()=>{
        setString("I am happy")
    }
return(
    <div>
        {string}
        <button onClick={p}>Click her</button>
    </div>
)
}

export default State1