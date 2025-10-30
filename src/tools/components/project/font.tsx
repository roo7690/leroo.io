'use client'
import { useEffect } from "react"

export function Font({href}:{href:string}){
  useEffect(()=>{
    const link=document.createElement('link')
    link.href=href
    link.rel='stylesheet'
    document.head.appendChild(link)
  },[])
  return null
}