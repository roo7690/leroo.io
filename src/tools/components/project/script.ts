'use client'
import { useEffect } from "react"

export function ExternalLink({id}:{id:string}){
  useEffect(()=>{
    const link=document.getElementById(id)
    link!.addEventListener('click',ev=>{
      ev.stopPropagation()
    })
  })
  return null
}