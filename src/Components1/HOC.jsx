import {useState} from 'react'
const High=(Wrappedcompo)=>{
    function Hoc(){
        let [count, setCount]=useState(0)
        let incre=()=>{setCount(count++)}
        return(
            <div>
           <Wrappedcompo Data={count} Func={incre}/>
            </div>
        )
    }
return Hoc
}
export default High