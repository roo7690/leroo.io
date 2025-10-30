'use client'
import { useEffect } from 'react'
import {Notif} from '@function'
import {Txt} from '@data-static'
import css from '../page.module.scss'

export {Comments} from './comments'

export function Copy(){
  useEffect(()=>{
    let txt=Txt.get('layouts',document.body.parentElement!.lang).blog.copy
    const blog=document.getElementsByClassName(css.blog)[0];
    [...blog.querySelectorAll<HTMLDivElement>('[data-copy]')].forEach(cp=>{
      cp.onclick=()=>{
        let pre=cp.parentElement!.parentElement!.children[1]
        navigator.clipboard.writeText(pre.textContent!)
        Notif.send({state:'success',msg:txt})
      }
    })
  })
  return null
}