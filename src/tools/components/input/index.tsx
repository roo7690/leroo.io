'use client'
import css from './input.module.scss'
import { HTMLInputTypeAttribute, useRef } from 'react'
 
export function Input({label,id,type='text'}:
  {label:string,id:string,type?:HTMLInputTypeAttribute}
){
  const lab=useRef<HTMLLabelElement>(null)

  return (
  <div className={css.input+' input'}>
    <label ref={lab} htmlFor={id}>{label}</label>
    <input type={type} id={id} onFocus={()=>lab.current?.classList.add(css.decal)}
      onBlur={(ev)=>{
        if(!ev.target.value){
          lab.current?.classList.remove(css.decal)
        }
      }} />
  </div>
  )
}

export {CodeInput} from './code'