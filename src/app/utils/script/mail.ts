'use client'
import css from '../../scss/page.module.scss'
import {Notif,Verif} from '@function'

export function SendMail(msg:{success:string,error:string}){
  let valid=true
  const name=document.getElementById('ct_name') as HTMLInputElement
  const email=document.getElementById('ct_email') as HTMLInputElement
  const object=document.getElementById('ct_object') as HTMLInputElement
  const message=document.getElementById('ct_message') as HTMLTextAreaElement

  if(!name.value){
    name.classList.remove(css.valid)
    name.classList.add(css.error)
    valid=false
  }else{
    name.classList.remove(css.error)
    name.classList.add(css.valid)
  }

  if(!object.value){
    object.classList.remove(css.valid)
    object.classList.add(css.error)
    valid=false
  }else{
    object.classList.remove(css.error)
    object.classList.add(css.valid)
  }

  if(!message.value){
    message.classList.remove(css.valid)
    message.classList.add(css.error)
    valid=false
  }else{
    message.classList.remove(css.error)
    message.classList.add(css.valid)
  }

  if(!Verif.mail(email.value)){
    email.classList.remove(css.valid)
    email.classList.add(css.error)
    valid=false
  }else{
    email.classList.remove(css.error)
    email.classList.add(css.valid)
  }

  if(valid){
    const svg=document.getElementsByClassName(css.contact)[0].getElementsByTagName('svg')[0]
    svg.classList.add(css.loading_contact)
    const data={
      name:name.value,
      email:email.value,
      object:object.value,
      message:message.value
    }
    fetch('/send-mail',{
      method:'POST',
      mode:'cors',
      headers:{
        'Content-Type':'application/json',
        'Request-Task':'contact'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>{
      if(res.error){
        Notif.send({msg:msg.error,state:'error'})
      }else{
        Notif.send({msg:msg.success,state:'success'});
        ([name,email,object,message]).forEach(e=>{
          e.value=''
          e.classList.remove(css.valid)
        })
      }
    })
    .catch(err=>{
      console.error(err)
      Notif.send({msg:msg.error,state:'error'})
    })
    .finally(()=>svg.classList.remove(css.loading_contact))
  }
}