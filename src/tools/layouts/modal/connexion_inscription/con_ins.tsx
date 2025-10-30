'use client'
import { close } from '@components/svg'
import css from './con_ins.module.scss'
import {Txt} from '@data-static'
import {Button} from '@components/button'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {Input,CodeInput} from '@components/input'
import { send_email, send_password,con_sso } from './con_fn'
import {send_email as send_email$, send_code, send_pp} from './ins_fn'
import { Notif } from '@function'

const data:{
  txt:Txt.Text['layouts']['connexion'],
  setFn?:Dispatch<SetStateAction<(media:string)=>JSX.Element>>,
  ic:CodeInput
}={ic:new CodeInput(5),txt:({} as any)}

export function ConIns({media}:{media:string}) {
  const [lang,setLang]=useState(document.body.parentElement?.lang||'en')
  data.txt=Txt.get('layouts',lang).connexion
  const [con_ins,setConIns]=useState(()=>con_email)
  data.setFn=setConIns
  
  useEffect(()=>{
    window.addEventListener('lang',e=>{
      setLang(e.detail.value)
    })
  },[])

  return (
  <div className={css.con_ins}>
    <div data-modal-close className={css.close}>{close}</div>
    {con_ins(media)}
  </div>
  )
}

const con_email=(media:string)=>(<>
  <div className={css.alter} onClick={
    ()=>data.setFn && data.setFn(()=>ins_email)
  }>
    {data.txt?.modal.alter.ins}
  </div>
  <div className='h1'>
    {data.txt?.modal.title.con}
  </div>
  <div className={css.c_i_there}>
    <img src={media+'img/logo.png'} className={css.img} alt='logo'/>
    <Input id='con_ins_email' label={data.txt?.modal.email as string} />
    <Button action={()=>send_email(()=>data.setFn && data.setFn(()=>con_password))}>
      {data.txt?.modal.submit}
    </Button>
  </div>
  <div className={css.ou}>
    <div></div>
    <span>{data.txt?.modal.ou}</span>
    <div></div>
  </div>
  <div className={css.con_ins_g}>
    <Button noAnimation action={()=>con_sso('google')}>
      <img src={media+'img/google.png'} alt='google'/>
      {data.txt?.modal.google.con}
    </Button>
    <Button noAnimation action={()=>con_sso('github')}>
      <img src={media+'img/github.png'} alt='github'/>
      {data.txt?.modal.github.con}
    </Button>
  </div>
</>)

const con_password=(media:string)=>(<>
  <div className={css.alter} onClick={
    ()=>data.setFn && data.setFn(()=>con_email)}>
    {data.txt?.modal.alter.return}
  </div>
  <div className='h1'>{data.txt?.modal.title.con}</div>
  <div className={css.c_i_there}>
    <img src={media+'img/logo.png'} className={css.img} alt='logo'/>
    <Input id='con_ins_password' label={data.txt?.modal.password as string} />
    <Button action={()=>send_password(()=>data.setFn && data.setFn(()=>con_email))}>
      {data.txt?.modal.submit}
    </Button>
  </div>
  <div className={css.help}>
    {data.txt?.modal.forgot}
  </div>
</>)

const ins_email=(media:string)=>(<>
  <div className={css.alter} onClick={
    ()=>data.setFn && data.setFn(()=>con_email)
  }>
    {data.txt?.modal.alter.con}
  </div>
  <div className='h1'>{data.txt?.modal.title.ins}</div>
  <div className={css.c_i_there}>
    <img src={media+'img/logo.png'} className={css.img} alt='logo'/>
    <Input id='con_ins_email' label={data.txt?.modal.email as string} />
    <Button action={()=>send_email$(()=>data.setFn && data.setFn(()=>ins_code))}>
      {data.txt?.modal.submit}
    </Button>
  </div>
</>)

const ins_code=(media:string)=>(<>
  <div className={css.alter} onClick={
    ()=>data.setFn && data.setFn(()=>ins_email)
  }>
    {data.txt?.modal.alter.return}
  </div>
  <div className='h1'>{data.txt?.modal.title.ins}</div>
  <div className={css.c_i_there}>
    <img src={media+'img/logo.png'} className={css.img} alt='logo'/>
    {data.ic.render({id:'con_ins_code',reset:true})}
    <Button action={()=>{
      let code=data.ic.getCode()
      if(code){
        send_code(code,
          ()=>data.setFn && data.setFn(()=>ins_email),
          ()=>data.setFn && data.setFn(()=>ins_pp)
        )
      }else{
        Notif.send({msg:data.txt?.msg.notCode as string,state:'warning'})
      }
    }}>
      {data.txt?.modal.submit}
    </Button>
  </div>
  <div className={css.help}>
    {data.txt?.modal.resend_code}
  </div>
</>)

const ins_pp=(media:string)=>(<>
  <div className={css.alter} onClick={
    ()=>data.setFn && data.setFn(()=>ins_email)
  }>
    {data.txt?.modal.alter.return}
  </div>
  <div className='h1'>{data.txt?.modal.title.ins}</div>
  <div className={css.c_i_there+' '+css.pp}>
    <img src={media+'img/logo.png'} className={css.img} alt='logo'/>
    <div>
      <Input id='con_ins_pseudo' label={data.txt?.modal.u$ername as string} />
      <Input id='con_ins_new_password' type='password'
        label={data.txt?.modal.new_password as string} />
      <Input id='con_ins_confirm_password' type='password'
        label={data.txt?.modal.confirm_password as string} />
    </div>
    <Button action={()=>send_pp()}>
      {data.txt?.modal.submit}
    </Button>
  </div>
</>)