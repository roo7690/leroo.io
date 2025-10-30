"use client"
import { sun, moon } from "@components/svg"
import { body_request_cookie } from "@function"

export function Astres(){
  return(
  <div id="theme" onClick={()=>{
    const theme=document.body.dataset.theme
    const newTheme=(theme==='dark')?'light':'dark'
    TriggerEvent('theme',window,{value:newTheme})
    document.body.dataset.theme=newTheme
    fetch('/set-cookies',{
      method:'POST',
      mode:'cors',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(body_request_cookie('theme',newTheme))
    })
  }}>
    {sun}
    {moon}
  </div>
  )
}