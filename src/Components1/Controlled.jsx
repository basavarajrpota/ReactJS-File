// import React from 'react'
import {useState} from 'react'
const Controlled = () => {
let [name,setName]=useState(" ")
let [email,setEmail]=useState(" ")
let nameData=(e)=>{
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    setName(e.target.value)

}
let emailData=(e)=>{
setEmail(e.target.value)
}
let submitData=(e)=>{
    e.preventDefault()
    console.log(name);
    console.log(email);
}
  return (
    <form>
        <label >Name</label>
        <input type="text" value={name} onChange={nameData} />
        <label >Email</label>
        <input type="text"  value={email} onChange={emailData}/>
        <button onClick={submitData}>Submit</button>
    </form>
  )
}

export default Controlled