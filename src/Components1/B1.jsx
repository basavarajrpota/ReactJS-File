import High from "./HOC"
const B1 = (mno) => {
    console.log(mno);
    return (
      <div>
          {mno.Data}
          <button onMouseOver={mno.Func}>Increment</button>
      </div>
  )
}

export default High(B1)