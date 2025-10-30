export function Hashtag({color,hashtag}
  :{color:string,hashtag:string}
){
  return (
  <div className='hashtag' 
    style={{'--c':color} as any}>
    # {hashtag}
  </div>
  )
}