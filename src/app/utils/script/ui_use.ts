'use client'
import UIUse from "client/ui"
import { useEffect } from "react"

export function _UIUse(){
  useEffect(()=>{
    UIUse({
      'event':true,
      "marche-aleatoire":true
    })
  },[])
  return null
}