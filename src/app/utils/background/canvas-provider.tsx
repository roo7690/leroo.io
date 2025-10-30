"use client"
import { ReactNode, createContext, useEffect, useMemo, useState } from "react"

export type canvas={
  theme:theme,
  media_src:string,
  listener:{
    mouse:ListenerEvent
  }
}

export type theme={
  name:"dark"|"light",
  cp:string,
  cp2:string,
  cs:string,
  cs2:string,
  ct:string,
  cq:string
}

export const canvasData=createContext({} as canvas)

export const CanvasProvider=({children,default_theme,media_src}:
  {
    children:ReactNode,
    default_theme:"dark"|"light",
    media_src:string
  }
)=>{
  const listener=useMemo(()=>({mouse:{}}),[]) as {mouse:ListenerEvent}
  const [data,setData]=useState({
    theme:getTheme(default_theme),
    listener,
    media_src
  })
  
  useEffect(()=>{
    listener.mouse=new ListenerEvent('mousemove',window)
    listener.mouse.listen()
    window.addEventListener('theme',ev=>{
      setData({
        theme:getTheme(ev.detail.value),
        listener,
        media_src
      })
    })
    document.getElementById('background')?.classList.remove('loading')
    setData({
      theme:getTheme(default_theme),
      listener,
      media_src
    })
  },[])

  return (
  <canvasData.Provider value={data}>
    {children}
  </canvasData.Provider>
  )
}

const getTheme:(theme:"dark"|"light")=>theme=(theme)=>{
  let colors;
  switch(theme){
    case "light":
      colors={
        name:"light" as 'light',
        cp:"#E9EAEC",
        cp2:"#36454F",
        cs:"#ADD8E6",
        cs2:"#059DC0",
        ct:"#5A5E68",
        cq:"#0B0909",
      }
      break;
    default:
      colors={
        name:"dark" as 'dark',
        cp:"#1B1734",
        cp2:"#191970",
        cs:"#4B0082",
        cs2:"#D396FF",
        ct:"#4169E1",
        cq:"#A0AFB7",
      }
  }
  return colors
}