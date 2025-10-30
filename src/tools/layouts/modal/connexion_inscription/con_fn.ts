'use client'
import {Txt} from "@data-static"
import { Verif,Notif,body_request_cookie} from "@function"

export const send_email=(swicth_to_password:()=>void)=>{
  const msg=Txt.get('layouts',document.body.parentElement?.lang||'en').connexion.msg
  const email=(document.getElementById('con_ins_email') as HTMLInputElement).value
  if(!Verif.mail(email)){
    Notif.send({msg:msg.notEmail,state:'error'})
  }else{
    fetch('/auth/in',{
      method:'POST',
      mode:'cors',
      headers:{
        'Content-Type':'application/json',
        'Request-Task':'verif-email'
      },
      body:JSON.stringify({email})
    }).then(res=>res.json())
    .then(data=>{
      if(data.trouv$){
        if(data.other_auth){
          Notif.send({msg:msg.other_auth,state:'warning'})
        }else{
          Notif.end()
          swicth_to_password()
        }
      }else{
        Notif.send({msg:msg.emailNotFound,state:'error'})
      }
    })
    .catch(e=>Notif.send({msg:msg.error,state:'warning'}))
  }
}

export const send_password=(swicth_to_email:()=>void)=>{
  const msg=Txt.get('layouts',document.body.parentElement?.lang||'en').connexion.msg
  const password=(document.getElementById('con_ins_password') as HTMLInputElement).value
  if(!Verif.password(password)){
    Notif.send({msg:msg.notPassword,state:'error'})
  }else{
    let success=false
    fetch('/auth/in',{
      method:'POST',
      mode:'cors',
      headers:{
        'Content-Type':'application/json',
        'Request-Task':'verif-password'
      },
      body:JSON.stringify({password})
    }).then(res=>res.json())
    .then(data=>{
      if(data.reset_email){
        Notif.send({msg:msg.reset_email,state:'warning'})
        swicth_to_email()
      }else if(!data.success){
        Notif.send({msg:msg.notGoodPassword,state:'error'})
      }else{
        Notif.send_after_refresh({msg:msg.connect,state:'success'});
        (document.querySelector('[data-modal-close]') as HTMLElement).click()
        TriggerEvent('refresh',window,{})
      }
    })
    .catch(e=>Notif.send({msg:msg.error,state:'warning'}))
  }
}

export const con_sso=(sso:string)=>{
  fetch('/set-cookies',{
    method:'POST',
    mode:'cors',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(body_request_cookie('last-page',location.pathname))
  }).then(res=>res.json())
  .then(data=>{
    location.href='/auth/'+sso
  })
  .catch(err=>console.log(err))
}