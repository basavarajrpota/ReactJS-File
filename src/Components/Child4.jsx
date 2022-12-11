const Child4=(l)=>{
    console.log(l);
    return(
        <div className="jango">
          <h1>{l.content[0].name}</h1>
          <h3>{l.content[0].id}</h3>
          <h1>{l.content[1].name}</h1>
          <h3>{l.content[1].id}</h3>
          <h1>{l.content[2].name}</h1>
          <h3>{l.content[2].id}</h3>

        </div>
    )
}
export default Child4