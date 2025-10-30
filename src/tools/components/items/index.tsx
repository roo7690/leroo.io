export function Items({list}:{list:string[]}){
  return (
  <ul style={{listStyle:'none',display:'flex',flexDirection:'column'}}>
    {list.map((item,i)=>(
      <li key={i} style={{display:'inline-flex',alignItems:'center'}}>
        <div className="_item"></div><div>{item}</div>
      </li>
    ))}
  </ul>
  )
}