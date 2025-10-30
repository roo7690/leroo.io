"use client"
import { useRouter } from 'next/navigation'
import { caret } from '@components/svg'
import css from './lang.module.scss'
import { body_request_cookie } from '@function'
import { useEffect } from 'react'

export function Lang({lang}:{lang:string}){
  const router=useRouter()
  const change=(value:string)=>{
    (value!==lang)&&
    fetch('/set-cookies',{
      method:'POST',
      mode:'cors',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(body_request_cookie('lang',value))
    }).then(()=>{
      if(document.getElementById('modal-layout')){
        sessionStorage.setItem('lang-refresh','true')
      }
      router.refresh()
    })
  }

  useEffect(()=>{
    if(sessionStorage.getItem('lang-refresh')){
      sessionStorage.removeItem('lang-refresh')
      TriggerEvent('lang',window,{value:document.body.parentElement?.lang||'en'})
    }
  })

  return (
  <>
  <div className={css.lang}>
    <div tabIndex={0}
      onFocus={()=>document.getElementById(css.options)?.classList.toggle(css.close)} 
      onBlur={()=>document.getElementById(css.options)?.classList.add(css.close)}>
      {lang}{caret}
    </div>
    <div id={css.options} className={css.options+' '+css.close}>
      <ul>
        <li onMouseDown={()=>change('en')}>En</li>
        <li onMouseDown={()=>change('fr')}>Fr</li>
        {/*<li onMouseDown={()=>change('中文')}>中文</li>*/}
      </ul>
    </div>
  </div>
  </>
  )
}