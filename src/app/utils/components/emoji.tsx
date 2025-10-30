"use client"
import { useEffect } from "react"
import { Txt } from "@data-static"

export function Emoji(){
  let emojis=Txt.get('home','en').emojis as any
  useEffect(()=>{
    let logo_src:any=document.getElementById('logo')!.getElementsByTagName('a')[0]
      logo_src=getComputedStyle(logo_src).backgroundImage
      logo_src=logo_src.split('"')[1]
      emojis.push(`<img src="${logo_src}" />`)
    let i=0
    const interval=setInterval(()=>{
      (document.getElementById('emojis') as HTMLElement).innerHTML=emojis[i]
      i++
      if(i==emojis.length)i=0
    },2800)
    return ()=>clearInterval(interval)
  })

  return <div id='emojis'>{emojis[0]}</div>
}