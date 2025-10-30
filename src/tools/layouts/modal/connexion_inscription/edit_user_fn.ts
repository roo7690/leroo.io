'use client'
import {Txt} from '@data-static'
import {Notif,Verif} from '@function'

export const logout=()=>{
  fetch('/auth/logout',{
    method:'POST',
    mode:'cors',
    headers:{
      'Content-Type':'application/json',
    }
  }).then(()=>{
    TriggerEvent('refresh',window,{});
    (document.querySelector('[data-modal-close]') as HTMLElement).click()
  })
  .catch(e=>{console.log(e)})
}

export const chg_username=()=>{
  let newUsername=(document.getElementById('edit-user-edit') as HTMLInputElement).value
  if(newUsername===''){
    let msg=Txt.get('layouts',document.body.parentElement?.lang||'en').connexion.msg.notPseudo
    Notif.send({msg,state:'warning'})    
  }else if(!Verif.username(newUsername)){
    let msg=Txt.get('layouts',document.body.parentElement?.lang||'en').connexion.msg.notGoodPseudo
    Notif.send({msg,state:'warning'})
  }else{
    updateUser({username:newUsername})
  }
}

export const chg_email=(after:()=>void)=>{
  let newEmail=(document.getElementById('edit-user-edit') as HTMLInputElement).value
  if(Verif.mail(newEmail)){
    updateUser({email:newEmail},after)
  }else{
    let msg=Txt.get('layouts',document.body.parentElement?.lang||'en').connexion.msg.notEmail
    Notif.send({msg,state:'warning'})
  }
}

export const chg_email_code=(code:number|null)=>{
  updateUser({code},
    ()=>document.getElementById('edit-user-email')!.dispatchEvent(
      new CustomEvent('mousedown')
    )
  )
}

export const chg_password=()=>{
  let password=(document.getElementById('edit-user-edit') as HTMLInputElement).value
  let chg_password=sessionStorage.getItem('chg_password')
  if(Verif.password(password)){
    if(!chg_password){
      updateUser({pass_old:password},
        ()=>sessionStorage.setItem('chg_password','confirm-old-password')
      )
    }else if(chg_password==='confirm-old-password'){
      let confirm_password=(document.getElementById('edit-user-pass') as HTMLInputElement).value
      if(password===confirm_password){
        updateUser({password})
        sessionStorage.removeItem('chg_password')
      }else{
        let msg=Txt.get('layouts',document.body.parentElement?.lang||'en').connexion.msg.notConfPass
        Notif.send({msg,state:'warning'})
      }
    }
  }else{
    let msg=Txt.get('layouts',document.body.parentElement?.lang||'en').connexion.msg.notPassword
    Notif.send({msg,state:'warning'})
  }
}

export const delete_account=(username:string)=>{
  let _username=(document.getElementById('edit-user-edit') as HTMLInputElement).value
  if(username===_username){
    fetch('/auth/delete',{
      method:'POST',
      mode:'cors',
      headers:{
        'Content-Type':'application/json',
      }
    }).then(res=>res.json())
    .then((data)=>{
      if(data.need_connexion){
        let msg=Txt.get('layouts',document.body.parentElement?.lang||'en').edit_user.msg.need_connexion
        Notif.send({msg,state:'error'})
      }else{
        let msg=Txt.get('layouts',document.body.parentElement?.lang||'en').edit_user.msg.success_delete
        Notif.send_after_refresh({msg,state:'success'})
        TriggerEvent('refresh',window,{});
        (document.querySelector('[data-modal-close]') as HTMLDivElement).click()
      }
    })
    .catch(e=>{
      let msg=Txt.get('layouts',document.body.parentElement?.lang||'en').connexion.msg.error
      Notif.send({msg,state:'error'})
      console.log(e)
    })
  }else{
    let msg=Txt.get('layouts',document.body.parentElement?.lang||'en').edit_user.msg.notGoodPseudo
    Notif.send({msg,state:'warning'})
  }
}

const updateUser=(data:any,action?:()=>void)=>{
  fetch('/auth/update_user',{
    method:'POST',
    mode:'cors',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data)
  }).then(res=>res.json())
  .then((data)=>{
    let msg=Txt.get('layouts',document.body.parentElement?.lang||'en').connexion.msg
    if(data.need_connexion){
      let msg=Txt.get('layouts',document.body.parentElement?.lang||'en').edit_user.msg.need_connexion
      Notif.send({msg,state:'error'})
    }else if(data.not_username_free){
      Notif.send({msg:msg.u$ernamePris,state:'warning'})
    }else if(data.not_email_free){
      Notif.send({msg:msg.emailExist,state:'error'})
    }else if(data.send_code){
      action&&action()
    }else if(data.code_expired){
      Notif.send({msg:msg.notCode,state:'warning'})
      action&&action()
    }else if(data.not_good_code){
      Notif.send({msg:msg.notGoodCode,state:'error'})
    }else if(data.not_good_oldPassword){
      Notif.send({msg:msg.notGoodPassword,state:'error'})
    }else if(data.good_pass_old){
      action&&action()
    }else{
      let msg=Txt.get('layouts',document.body.parentElement?.lang||'en').edit_user.msg.success
      Notif.send_after_refresh({msg,state:'success'})
      window.addEventListener('signal-refresh',e=>{
        if(document.getElementById('modal-layout')){
          (document.querySelector('[data-modal-close]') as HTMLDivElement).click()
          document.getElementById('con_ins_edit_user')?.click()
        }
      })
      TriggerEvent('refresh',window,{signal:true})
      action&&action()
    }
  })
  .catch(e=>{
    let msg=Txt.get('layouts',document.body.parentElement?.lang||'en').edit_user.msg.error
    Notif.send({msg,state:'warning'})
    console.log(e)
  })
}