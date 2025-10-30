"use client"
import Link from "next/link"
import css from './button.module.scss'
import { useEffect, useRef,HTMLAttributeAnchorTarget } from "react"

export type ButtonProps={
  children:React.ReactNode,
  link?:string,
  action?:{fn:(data:any)=>void,data:any}|(()=>void),
  alter?:boolean,
  id?:string,
  className?:string,
  dataset?:{[key:string]:string}
  noAnimation?:boolean
  AnimationTime?:number
  target?:HTMLAttributeAnchorTarget
}

export function Button(props:ButtonProps){
  const ref=useRef<HTMLButtonElement>(null)
  let _onclick:(()=>void)|undefined
  if(props.action === undefined || typeof props.action === 'function'){
    _onclick=props.action
  }else{
    const action:({fn:(data:any)=>void,data:any})=props.action
    _onclick=()=>action.fn(action.data)
  }
  
  const attr:React.ButtonHTMLAttributes<HTMLButtonElement>={
    type:'button',
    id:props.id,
    onClick:_onclick,
    className:`${css.btn} ${props.className} ${props.alter?css.alter:''}`
  }

  const dataset:any={}
  for(const key in props.dataset){
    dataset[`data-${key}`]=props.dataset[key]
  }

  useEffect(()=>{
    if(!props.noAnimation){
      let onClick=false,
        time=props.AnimationTime||200,
        _onClickAnimation:number
      ref.current!.addEventListener('mousemove',(ev)=>{
        if(!onClick){
          let x=(ev.clientX-ref.current!.getBoundingClientRect().left)/ref.current!.offsetWidth,
            y=(ev.clientY-ref.current!.getBoundingClientRect().top)/ref.current!.offsetHeight
          ref.current!.style.backgroundImage=`radial-gradient(circle at ${x*100}% ${y*100}%,var(--_b) 0%,transparent 77%)`
        }
      })
      ref.current!.addEventListener('mouseleave',()=>{
        ref.current!.style.backgroundImage='radial-gradient(var(--_b) 0%,var(--_b) 100%,var(--_b) 100%)'
        onClick=false
      })
      ref.current!.addEventListener('click',(ev)=>{
        onClick=true
        let x=(ev.clientX-ref.current!.getBoundingClientRect().left)/ref.current!.offsetWidth,
          y=(ev.clientY-ref.current!.getBoundingClientRect().top)/ref.current!.offsetHeight,
          _r=2800/time,r=0
        const onClickAnimation=()=>{
          ref.current!.style.backgroundImage=`radial-gradient(circle at ${x*100}% ${y*100}%,var(--_b) ${r}%,transparent 77%)`
          r+=_r
          if(r<100){
            _onClickAnimation=requestAnimationFrame(onClickAnimation)
          }else{
            ref.current!.style.backgroundImage='radial-gradient(var(--_b) 0%,var(--_b) 100%,var(--_b) 100%)'
          }
        }
        _onClickAnimation=requestAnimationFrame(onClickAnimation)
      })
      return ()=>cancelAnimationFrame(_onClickAnimation)
    }
  })

  return (props.link?
    <Link href={props.link} target={props.target}>
      <button ref={ref} {...attr} {...dataset}>{props.children}</button>
    </Link>
    :<button ref={ref} {...attr} {...dataset}>{props.children}</button>
  )
}