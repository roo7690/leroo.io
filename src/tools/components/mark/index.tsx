import type { ReactNode } from "react"

export function Mark({text,words}:{
  text:string,
  words:string[]
}){
  words=words.map(word=>word.trim()).filter(word=>!!word)
  words.forEach(word=>text=text.replaceAll(new RegExp(`\\b${word}\\b`,'g'),`<ma__rk>${word}</ma__rk>`))
  let children=[] as ReactNode[]
  text.split('<ma__rk>').forEach(jeton=>{
    console.log(jeton)
    let mark=jeton.match(/(?<mark>.*)<\/ma__rk>(?<no_mark>.*)/)
    if(mark){
      children.push(<>
        <mark>{mark.groups!.mark}</mark>
        {mark.groups!.no_mark}
      </>)
    }else{
      children.push(jeton)
    }
  })
  return children
}