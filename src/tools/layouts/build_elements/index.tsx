'use client'
import {createElement} from 'react'

export type ElementProps=
{
  type:string
  props:any
  children?:ElementProps
}[]|{
  type:string
  props:any
  children?:ElementProps
}|string

export const BuildElements=(
  {child}:{child:ElementProps}
)=>{
  if(Array.isArray(child)){
    return child.map((c,i)=><BuildElements key={i} child={c}/>)
  }else if(typeof child!=='string'){
    return createElement(child.type,child.props,
      child.children?<BuildElements child={child.children} />:undefined)
  }
  return child
}