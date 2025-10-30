'use client'
import {Txt} from "@data-static"
import { Verif, Notif } from "@function"

export const send_email=(swicth_to_code:()=>void)=>{
  const msg=Txt.get('layouts',document.body.parentElement?.lang||'en').connexion.msg
  const email=(document.getElementById('con_ins_email') as HTMLInputElement).value
  if(!Verif.mail(email)){
    Notif.send({msg:msg.notEmail,state:'error'})
  }else{
    fetch('/auth/up',{
      method:'POST',
      mode:'cors',
      headers:{
        'Content-Type':'application/json',
        'Request-Task':'verif-email'
      },
      body:JSON.stringify({email})
    }).then(res=>res.json())
    .then(data=>{
      if(!data.success){
        Notif.send({msg:msg.error,state:'warning'})
      }else if(data.u$exist){
        Notif.send({msg:msg.emailExist,state:'error'})
      }else{
        Notif.send({msg:msg.code_sent,state:'warning',auto_close:false})
        swicth_to_code()
      }
    })
    .catch(e=>Notif.send({msg:msg.error,state:'warning'}))
  }
}

export const send_code=(code:number,swicth_to_email:()=>void,
  swicth_to_pp:()=>void)=>{
  const msg=Txt.get('layouts',document.body.parentElement?.lang||'en').connexion.msg
  fetch('/auth/up',{
    method:'POST',
    mode:'cors',
    headers:{
      'Content-Type':'application/json',
      'Request-Task':'verif-code'
    },
    body:JSON.stringify({code})
  }).then(res=>res.json())
  .then(data=>{
    if(data.code_expired){
      Notif.send({msg:msg.reset_email,state:'warning'})
      swicth_to_email()
    }else if(data.good_code){
      Notif.end()
      swicth_to_pp()
    }else{
      Notif.send({msg:msg.notGoodCode,state:'error'})
    }
  })
  .catch(e=>Notif.send({msg:msg.error,state:'warning'}))
}

export const send_pp=()=>{
  const msg=Txt.get('layouts',document.body.parentElement?.lang||'en').connexion.msg
  const u$ername=(document.getElementById('con_ins_pseudo') as HTMLInputElement).value
  const password=(document.getElementById('con_ins_new_password') as HTMLInputElement).value
  const confirm_password=(document.getElementById('con_ins_confirm_password') as HTMLInputElement).value

  if(u$ername===''){
    Notif.send({msg:msg.notPseudo,state:'warning'})
  }else if(!Verif.username(u$ername)){
    Notif.send({msg:msg.notGoodPseudo,state:'warning'})
  }else if(!Verif.password(password)){
    Notif.send({msg:msg.notPassword,state:'warning'})
  }else if(password!==confirm_password){
    Notif.send({msg:msg.notConfPass,state:'warning'})
  }else{
    fetch('/auth/up',{
      method:'POST',
      mode:'cors',
      headers:{
        'Content-Type':'application/json',
        'Request-Task':'get-pp'
      },
      body:JSON.stringify({u$ername,password})
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        Notif.send({msg:msg.error,state:'warning'})
      }else if(!data.u$ernameFree){
        Notif.send({msg:msg.u$ernamePris,state:'warning'})
      }else{
        localStorage.setItem('Notif.send',JSON.stringify({msg:msg.connect,state:'success'}));
        (document.querySelector('[data-modal-close]') as HTMLElement).click()
        TriggerEvent('refresh',window,{})
      }
    })
    .catch(e=>Notif.send({msg:msg.error,state:'warning'}))
  } 
}