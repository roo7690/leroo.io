'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function Refresher(){
  const router=useRouter()
  useEffect(()=>{
    window.addEventListener('refresh',e=>{
      router.refresh()
      if(document.getElementById('modal-layout')&&e.detail.signal){
        sessionStorage.setItem('window-refresh','true')
      }
    })
  },[])

  useEffect(()=>{
    if(sessionStorage.getItem('window-refresh')){
      sessionStorage.removeItem('window-refresh')
      TriggerEvent('signal-refresh',window,undefined)
    }
  })

  return null
}