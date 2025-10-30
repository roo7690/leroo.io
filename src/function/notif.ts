'use client'
import { useEffect } from "react"

export function Init(){
  useEffect(()=>{
    const $notif=JSON.parse(localStorage.getItem('notif')||'null')
    if($notif){
      localStorage.removeItem('notif')
      send($notif)
    }
  })

  useEffect(()=>{
    const notif=document.getElementById('notif') as HTMLDivElement
    const close=notif.getElementsByTagName('svg')[1] as SVGElement
    close.addEventListener('click',()=>end())
  },[])

  return null
}

type send={
  msg:string,
  state:'success'|'warning'|'error',
  auto_close?:boolean,
  delay?:number
}

export function send(props:send){
  if(!props.delay) props.delay=14000
  if(!props.auto_close) props.auto_close=true
  const notif_close=localStorage.getItem('notif_close')
  if(notif_close){
    localStorage.removeItem('notif_close')
    clearTimeout(notif_close)
  }
  const notif=document.getElementById('notif') as HTMLDivElement
  const recep=document.getElementById('notif-recep') as HTMLDivElement
  const content=document.getElementById('notif-content') as HTMLDivElement

  //close notif
  notif.classList.add('none')
  notif.style.setProperty('--_bgc','var(--_bg0)')
  notif.style.width='calc(3*var(--unit))'

  //open notif
  notif.classList.add('notif')
  setTimeout(()=>{
    recep.textContent=props.msg
    notif.style.setProperty('--_bgc',`var(--c${props.state})`)
    notif.style.width=`calc(10*var(--unit) + ${recep.clientWidth+.5}px)`
    content.textContent=props.msg
    setTimeout(()=>notif.classList.remove('none'),1100)
  },400)

  //auto close?
  if(props.auto_close){
    const notif_close=setTimeout(()=>end(),props.delay)
    localStorage.setItem('notif_close',notif_close.toString())
  }
}

export function end(){
  const notif=document.getElementById('notif') as HTMLDivElement
  const notif_close=window.localStorage.getItem('notif_close')
  if(notif_close){
    localStorage.removeItem('notif_close')
    clearTimeout(notif_close)
  }
  notif.classList.add('none')
  notif.style.setProperty('--_bgc','var(--_bg0)')
  notif.style.width='calc(3*var(--unit))'
  setTimeout(()=>notif.classList.remove('notif'),1200)
}

export function send_after_refresh(props:send){
  localStorage.setItem('notif',JSON.stringify(props))
}