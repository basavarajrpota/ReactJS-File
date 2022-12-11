const Theme=()=>{
    let dark=()=>{
   document.body.style.background="red"
   document.body.style.color="black"}
   
   let light=()=>{
   document.body.style.background="crimson"
   document.body.style.color="black"
   }
   
   return(
   <div>
   <h1>Hello</h1>Dark
   <input type="radio" name="abc" onClick={dark}/> light
   <input type="radio" name="abc" onClick={light}/> 
    </div>
   )}   

   export default Theme