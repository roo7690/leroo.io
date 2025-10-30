"use client"
import { Tilt } from "react-tilt"
import { useEffect,useRef } from "react"

interface Div3Props {
  children: React.ReactNode
  className?:string
  style?:React.CSSProperties
  options?:options
  dataset?:{[key:string]:string}
}

type options={
  reverse?:boolean
  max?:number
  perspective?:number
  scale?:number
  speed?:number
  transition?:boolean
  axis?:"x"|"y"
  reset?:boolean
  easing?:string
}

export function Div3(props:Div3Props){
  const ref=useRef<any>()

  useEffect(()=>{
    for(let key in props.dataset){
      ref.current&&ref.current.element.setAttribute('data-'+key,props.dataset[key])
    }
  },[])

  return (
    <Tilt ref={ref} options={props.options}
      className={props.className} style={props.style}>
      {props.children}
    </Tilt>
  )
}