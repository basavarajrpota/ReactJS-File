import { useRef } from 'react'
     const Ref=()=>{
     let demoRef = useRef();
    let clr=()=>{
           demoRef.current.style.background="red";
     return(
           <div>
           <h1 ref={demoRef}>Heading Tag </h1> 
           <button onClick={clr}>Click</button>
           </div>
           )
           }
        }
       export default Ref