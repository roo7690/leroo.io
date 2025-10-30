import Md from "../md"
import { Components } from "react-markdown"

export function Comment({children}:{children:string}){
  const filtre=['on','data','id']

  const Components:Partial<Components>={
    script:(props:any)=>{
      let script=props.node.children.map((c:any)=>c.value)
      script=JSON.stringify(script).slice(1,-1)
      return `!?? lol <script !??${script}??! />`
    }
  }

  return (
    <Md Components={Components} SpeComponents={{}}>
      {children}
    </Md>
  )
}