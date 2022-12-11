import React from 'react'
import { useState } from 'react'
const ControlledPractice = () => {
    let [name,setName]=useState("");
    let [address,setAddress]=useState(" ")

    let storeName=(event)=>{
            setName(event.target.value);
    }
    let storeAddress=(event)=>{
        setAddress(event.target.value)
    }
  let author=(event)=>{
    event.preventDefault()
    console.log(name);
    console.log(address);

  }
  return (
   <form action="">
    <label >Name</label>
    <input type="text" value={name} onChange={storeName}/> <br />
    <label htmlFor="">Address</label>
    <textarea name="" id=""  value={address} onChange={storeAddress}></textarea><br />
    <button onClick={author}>Submit</button>
   </form>
  )
}

export default ControlledPractice