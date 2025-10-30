'use client'
import { useEffect } from "react"

export function Select(){
  useEffect(()=>{
    const secteurs=Array.from(document.getElementById('secteurs')!.children) as HTMLDivElement[]
    const jobs=Array.from(document.getElementById('jobs')!.children) as HTMLDivElement[]

    secteurs.forEach(s=>{
      s.onclick=()=>{
        jobs.forEach(j=>{
          j.classList.remove('hidden')
          if(s.id!=='all-secteurs'){
            if(s.children[0].textContent!==j.dataset.secteur){
              j.classList.add('hidden')
            }
          }
        })
      }
    })
  })
  return null
}