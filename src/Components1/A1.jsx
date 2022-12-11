import High from "./HOC"
const A1 = (xyz) => {
    console.log(xyz);
  return (
    <div>
        {xyz.Data}
        <button onClick={xyz.Func}>Increment</button>
    </div>
  )
}

export default High(A1)