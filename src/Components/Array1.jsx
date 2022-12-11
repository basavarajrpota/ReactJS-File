import { useState } from "react"

const Array1=()=>{
    let [da,setDa]=useState(["name:","Prajwal"])
    let kl=()=>{
        setDa(["reactJs","vueJs"])
    }
    return(
        <div>
            {da[0]}
            {da[1]}
            <button onClick={kl}>search</button>
        </div>
    )
}


export default Array1