'use client'
import {Txt} from "@data-static"
import { Notif } from "@function"

export function Send(
  data:{
    id_editer:string,
    id_blog:string,
    id_user:number,
    lang:string,
    msg_refuse:string,
    id_response?:string
    success_action?:()=>void
  },
){
  const comment=document.getElementById(data.id_editer) as HTMLTextAreaElement
  fetch('/comment/add',{
    method:'POST',
    mode:'cors',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      id_blog:data.id_blog,
      id_user:data.id_user,
      comment:comment.value,
      id_response:data.id_response
    })
  }).then(res=>res.json())
  .then((data)=>{
    if(data.refuse){
      Notif.send({state:'warning',msg:data.msg_refuse})
    }else if(!data.success){
      Notif.send({msg:Txt.get('layouts',data.lang).error,state:'error'})
    }else{
      data.success_action&&data.success_action()
    }
  })
  .catch((e)=>{
    const error=Txt.get('layouts',data.lang).error
    Notif.send({msg:error,state:'error'})
  })
}