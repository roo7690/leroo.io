'use client'
import { ModalLayout } from "@layouts/modal"
import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react"
import { Txt } from "@data-static"
import css from './components.module.scss'
import Link from "next/link"
import { search } from "@components/svg"
import { Mark } from "@components/mark"

type Doc={
  title:string
  description:string
  link:string
}

export const Search=()=>{
  const ref=useRef() as MutableRefObject<HTMLDivElement>
  const [lang,setLang]=useState(document.body.parentElement?.lang||'en')
  const [res,setRes]=useState<Doc[]>([])
  const marks=useMemo<{value:string[]}>(()=>({value:[]}),[])
  const [error,setError]=useState(false)
  const txt=Txt.get('components',lang).search_blog

  
  useEffect(()=>{
    document.getElementById('search-blog')!.focus()
    const destroy=()=>{
      ref.current!.parentElement!.remove()
      document.getElementById('search')!.onclick=build_search_blog
    }
    window.addEventListener('lang',e=>{
      setLang(e.detail.value)
    })
    ref.current!.addEventListener('click',ev=>ev.stopPropagation())
    document.getElementById('logo')!.addEventListener('click',destroy)
    ref.current!.parentElement!.onclick=destroy
    document.getElementById('search')!.onclick=null
  },[])

  useEffect(()=>{
    const sb=document.getElementById('search-blog') as HTMLInputElement
    sb.addEventListener('input',ev=>{
      let _looking=localStorage.getItem('search-blog')
      _looking&&clearTimeout(parseInt(_looking))
      let looking=setTimeout(()=>{
        const input=(ev.target as HTMLInputElement).value
        marks.value=input.split(' ')
        fetch('/blog/search',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify({input})
        }).then(res=>res.json())
        .then(setRes)
        .catch(err=>setError(true))
      },500)
      localStorage.setItem('search-blog',looking+'')
    })
    return ()=>localStorage.removeItem('search-blog')
  },[marks])


  return (
  <div ref={ref} className={css.search}>
    <div className="bento b1">
      <div>
        {search}
        <input id='search-blog' autoComplete="off" type="text" placeholder={txt.placeholder}/>
      </div>
      <div>
        {!error?res.map((r,i)=>(<Link href={'/blog/'+r.link} key={i}>
          <h3><Mark text={r.title} words={marks.value}/></h3>
          <p><Mark text={r.description} words={marks.value}/></p>
        </Link>)):
        <div className="error">{txt.error}</div>}
      </div>
    </div>
  </div>
  )
}

export function CanSearchTrigger(){
  useEffect(()=>{
    document.getElementById('search')!.onclick=build_search_blog
  })
  return null
}

export const build_search_blog=()=>{
  ModalLayout({
    children:<Search/>,
    position:{
      top:'10em',
      left:'0',
      translate:'0 0'
    }
  })
}