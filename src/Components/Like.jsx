import { useState } from "react";

const Like=()=>{
    let [count,setCount]=useState(0)
    let incre=()=>{
        setCount(count++)
    }
    return(
        <div className="liking">
    <button onClick={incre}><i class="fa-regular fa-heart"></i></button><sup>{count}</sup>
        </div>
    )
}

export default Like