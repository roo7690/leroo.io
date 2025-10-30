"use client"
import { link_blank } from '@components/svg'
import {Txt} from '@data-static'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useCallback, useMemo, useState, CSSProperties } from 'react'

export function Nav({lang}:{lang:string}){
  const page=usePathname()
  const txt=useMemo(()=>Txt.get('layouts',lang).nav,[lang])
  const navs=useMemo(()=>([
    {href:"/blog",title:txt.blog},
    {href:"/about-me",title:txt.about_me},
    {href:"https://github.com/roo7690",title:<>{txt.github}{link_blank}</>,blank:true}
  ]),[lang])
  const getStyles=useCallback((page:string)=>{
  let styles:{[key:string]:CSSProperties}={}
  for(const nav of navs){
    styles[nav.href]={
      color:page.startsWith(nav.href)?'var(--cs2)':undefined
    }
  }
  return styles
  },[])
  const [_styles,set_styles]=useState(getStyles(page))

  useEffect(()=>{
    const navdrop=document.getElementById('navdrop')!
    navdrop.classList.contains('active')&&navdrop.click()
    set_styles(getStyles(page))
  },[page])

  return (
    <>
    {navs.map((nav,i)=>(
      <li key={i}>
        <Link href={nav.href} style={_styles[nav.href]} target={nav.blank?'_blank':undefined}>
          {nav.title}
        </Link>
      </li>
    ))}
    </>
  )
}

export function NavDrop(){
  const [state,setState]=useState(undefined as 'active'|undefined)

  return (
  <div id='navdrop' className={state} 
    onClick={()=>{
      setState(state?undefined:'active')
      document.getElementById('page')?.classList.toggle('over_hidden')
      document.getElementById('nav')?.classList.toggle('drop')
    }}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  )
}