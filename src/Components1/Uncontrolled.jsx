import {useRef} from 'react'

const Uncontrolled = () => {
    let demoRef1=useRef()
    console.log(demoRef1);
    let demoRef2=useRef()
    console.log(demoRef2);
    let Fetch=(e)=>{
        e.preventDefault()
        let name=demoRef1.current.value
        let email=demoRef2.current.value
        console.log(name);
         console.log(email);
    }
  return (
    <div>
        <label>Name :  </label>
        <input type="text" ref={demoRef1} /> <br /> <br />
        <label >Email  :  </label>
        <input type="Email" ref={demoRef2} /> <br /> <br />
        <button onClick={Fetch}>Submit</button>
    </div>
  )
}

export default Uncontrolled