import Md from '../md'
import { Components } from "react-markdown"

export function Blog({children}:{children:string}){
  let md=children.replace(/:::\s*([a-zA-Z]+)\s+([\s\S]*):::/g,'')
  const Components:Partial<Components>={}
  const SpeComponents={}

  return (
    <Md Components={Components} SpeComponents={SpeComponents}>
      {md}
    </Md>
  )
}