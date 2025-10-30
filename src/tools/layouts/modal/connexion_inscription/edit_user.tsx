'use client'
import css from './con_ins.module.scss'
import { useState,useEffect, useMemo } from 'react'
import {Txt} from '@data-static'
import * as fn from './edit_user_fn'
import { close } from '@components/svg'
import {Button} from '@components/button'
import {Input,CodeInput} from '@components/input'
import {Drop} from '@layouts/drop'
import { caret } from '@components/svg'
import type {Users} from '@db'

export function EditUser(props:Users.User){
  const [lang,setLang]=useState(document.body.parentElement?.lang||'en')
  const txt=Txt.get('layouts',lang).edit_user
  const [dashboard,setDashboard]=useState({
    label:(t:typeof txt)=>props.username,
    send:(t:typeof txt)=>t.prop.edit,
    fn:fn.chg_username,
    action:(t:typeof txt)=>t.prop.username,
    inputType:'text',
    delete:false,
    label_pass:undefined as ((t:typeof txt)=>string)|undefined
  })
  
  const code=useMemo(()=>(new CodeInput(5)),[])

  const state_password=useMemo(()=>(()=>{
    let chg_password=sessionStorage.getItem('chg_password')
    if(chg_password==='confirm-old-password'){
      return {
        send:(t:typeof txt)=>t.prop.edit,
        label:(t:typeof txt)=>t.prop.new_password,
        label_pass:(t:typeof txt)=>t.prop.confirm_password
      }
    }
    return {
      send:(t:typeof txt)=>t.prop.submit,
      label:(t:typeof txt)=>t.prop.password,
      label_pass:undefined
    }
  }),[])
  
  useEffect(()=>{
    window.addEventListener('lang',e=>{
      setLang(e.detail.value)
    })
  },[])

  return (
    <div id='edit_user' className={css.con_ins}>
      <div data-modal-close className={css.close}>{close}</div>
      <div className='h1'>{txt.title}</div>
      <div className={css.c_i_there+' '+css.edit}>
        <Drop dropbutton={{
          value:<div className={css.edit_drop+' bento'}
            style={dashboard.delete?{backgroundColor:'var(--cerror)'}:undefined} >
              {dashboard.action(txt)}{caret}
          </div>
        }}
        dropcontent={{
          className:css.edit_props+' bento',
          value:[
            <div key={0} className='bento' onMouseDown={
              ()=>setDashboard({
                label:(t:typeof txt)=>props.username,
                send:(t:typeof txt)=>t.prop.edit,
                fn:fn.chg_username,
                action:(t:typeof txt)=>t.prop.username,
                inputType:'text',
                delete:false,
                label_pass:undefined
              })
            }>{txt.prop.username}</div>,
            <div key={1} id='edit-user-email' className='bento' onMouseDown={()=>
              setDashboard({
                label:(t:typeof txt)=>props.email,
                send:(t:typeof txt)=>t.prop.submit,
                fn:()=>fn.chg_email(()=>setDashboard({
                  label:(t:typeof txt)=>'',
                  send:(t:typeof txt)=>t.prop.edit,
                  fn:()=>fn.chg_email_code(code.getCode()),
                  action:(t:typeof txt)=>t.prop.email,
                  inputType:'code',
                  delete:false,
                  label_pass:undefined
                })),
                action:(t:typeof txt)=>t.prop.email,
                inputType:'email',
                delete:false,
                label_pass:undefined
              })
            }>{txt.prop.email}</div>,
            <div key={2} className='bento' onMouseDown={()=>{
              if(!props.auth_interne){
                sessionStorage.setItem('chg_password','confirm-old-password')
              }else{
                sessionStorage.removeItem('chg_password')
              }
              setDashboard({
                inputType:'password',
                action:(t:typeof txt)=>t.prop.pas$word,
                fn:fn.chg_password,
                delete:false,
                ...state_password()
              })
            }}>{txt.prop.pas$word}</div>,
            <div key={3} className='bento' onMouseDown={()=>{
              setDashboard({
                label:(t:typeof txt)=>t.prop.confirm_delete+props.username,
                send:(t:typeof txt)=>t.prop.delete,
                fn:()=>fn.delete_account(props.username),
                action:(t:typeof txt)=>t.prop.why,
                inputType:'text',
                delete:true,
                label_pass:undefined
              })
            }}>
              {txt.delete}
            </div>
          ]}}
        />
        {dashboard.inputType==='code'?code.render({id:'edit-user-edit',reset:true}):
          <div className={css.edit_input}>
            <Input id='edit-user-edit' label={dashboard.label(txt)} type={dashboard.inputType} />
            {dashboard.label_pass&&<Input id='edit-user-pass' label={dashboard.label_pass(txt)} type='password' />}
          </div>
        }
        <Button action={dashboard.fn}>
          {dashboard.send(txt)}
        </Button>
      </div>
      <div className={css.logout_del}>
        <Button action={fn.logout} alter>
          {txt.logout}
        </Button>
      </div>
    </div>
  )
}