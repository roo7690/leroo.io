import type {Route} from '@router'
import { Password, print_error } from '@function'
import { Users } from '@db'

export const prefix='/auth'

export const In:Route={
  path:'/in',
  method:'post',
  handler:async ctx=>{
    const task=ctx.get('Request-Task')
    if(task==='verif-email'){
      const {email}=ctx.request.body
      if(!email){
        ctx.status=400
        ctx.throw('email is required')
      }
      const user=await Users.find(email)
      if(user){
        user.auth_interne&&ctx.cookies.set('_user',user.id+'',
          {maxAge:parseInt(process.env.MA__USER)}
        )
        ctx.body={trouv$:true,other_auth:!user.auth_interne}
        return
      }
      ctx.body={trouv$:false}
      return
    }

    if(task==='verif-password'){
      const {password}=ctx.request.body
      if(!password){
        ctx.status=400
        ctx.throw('password is required')
      }
      const userId=parseInt(ctx.cookies.get('_user')||'')
      if(Number.isNaN(userId)){
        ctx.body={reset_email:true}
        return
      }
      const _user=await Users.getUser(userId) as Users.User
      const success=await Password.compare(password,_user.password as string)
      if(success){
        ctx.cookies.set('user',JSON.stringify({
          id:_user.id,username:_user.username,
          email:_user.email,auth_interne:true}),
          {maxAge:parseInt(process.env.MA_USER)}
        )
      }
      ctx.body={success}
      return
    }

    ctx.status=400
    ctx.throw('Invalid request')
  }
}

export const up:Route={
  path:'/up',
  method:'post',
  handler:async ctx=>{
    const task=ctx.get('Request-Task')
    if(task==='verif-email'){
      const {email}=ctx.request.body
      if(!email){
        ctx.status=400
        ctx.throw('email is required')
      }
      const user=await Users.find(email)
      if(user){
        ctx.body={u$exist:true}
        return
      }
      let code=0
      for(let i=0;i<5;i++){
        code=code*10+Math.floor(Math.random()*10)
      }
      let success=true
      await fetch(`${process.env.HOST}/send-mail`,{
        method:'POST',
        mode:'cors',
        headers:{
          'Content-Type':'application/json',
          'Request-Task':'send-code'
        },
        body:JSON.stringify({email,code})
      }).then(res=>res.json())
      .then(data=>{if(data.error){
        success=false
        console.log(print_error('Erreur lors de l\'envoi du mail'))
      }})
      .catch(e=>{
        success=false
        console.log(print_error('Erreur lors de l\'envoi du mail'),e)
      })

      if(success){
        ctx.cookies.set('_ins',
          JSON.stringify({email,code})
          ,{maxAge:parseInt(process.env.MA_INS)}
        )
      }

      ctx.body={success}
      return
    }

    if(task==='verif-code'){
      const {code}=ctx.request.body
      if(!code){
        ctx.status=400
        ctx.throw('code is required')
      }
      const _ins=JSON.parse(ctx.cookies.get('_ins')||'null')
      if(!_ins){
        ctx.body={code_expired:true}
        return
      }
      if(_ins.code!==code){
        ctx.body={good_code:false}
        return
      }
      ctx.cookies.set('_ins',_ins.email)
      ctx.body={good_code:true}
      return
    }

    if(task==='get-pp'){
      const {username,password}=ctx.request.body
      const uf=await Users.usernameFree(username)
      if(!uf){
        ctx.body={u$ernameFree:false}
        return
      }
      const email=ctx.cookies.get('_ins') as string
      const user=await Users.addUser(username,{email,password})
      if(!user){
        ctx.body={error:true}
        return
      }
      ctx.cookies.set('user',
        JSON.stringify(user),
        {maxAge:parseInt(process.env.MA_USER)}
      )
      ctx.cookies.set('_ins')
      ctx.body={success:true}
      return
    }

    ctx.status=400
    ctx.throw('Invalid request')
  }
}

export const update:Route={
  path:'/update_user',
  method:'post',
  handler: async ctx=>{
    const user=JSON.parse(ctx.cookies.get('user')||'null')
    if(!user){
      ctx.body={need_connexion:true}
      return
    }
    const data=ctx.request.body

    if(data.username){
      let libre=await Users.usernameFree(data.username)
      if(!libre){
        ctx.body={not_username_free:true}
        return
      }
      await Users.updateUser(user.id,{username:data.username})
      let _user=await Users.getUser(user.id) as Users.User
      delete _user.password
      ctx.cookies.set('user',JSON.stringify(_user),
        {maxAge:parseInt(process.env.MA_USER)}
      )
      ctx.body={success:true}
      return
    }

    if(data.email){
      let libre=await Users.find(data.email)
      if(libre){
        ctx.body={not_email_free:true}
        return
      }

      let code=0
      for(let i=0;i<5;i++){
        code=code*10+Math.floor(Math.random()*10)
      }
      let send_code=true
      await fetch(`${process.env.HOST}/send-mail`,{
        method:'POST',
        mode:'cors',
        headers:{
          'Content-Type':'application/json',
          'Request-Task':'send-code'
        },
        body:JSON.stringify({email:data.email,code})
      }).then(res=>res.json())
      .then(data=>{if(data.error){
        send_code=false
        console.log(print_error('Erreur lors de l\'envoi du mail'))
      }})
      .catch(e=>{
        send_code=false
        console.log(print_error('Erreur lors de l\'envoi du mail'),e)
      })

      send_code&&ctx.cookies.set('chg_email',
        JSON.stringify({email:data.email,code}),
      {maxAge:parseInt(process.env.MA_CODE)})
      ctx.body={send_code}
      return
    }

    if(data.code){
      const _chg_email=JSON.parse(ctx.cookies.get('chg_email')||'null')
      if(!_chg_email){
        ctx.body={code_expired:true}
        return
      }
      if(_chg_email.code!==data.code){
        ctx.body={not_good_code:true}
        return
      }
      await Users.updateUser(user.id,{email:_chg_email.email})
      let _user=await Users.getUser(user.id) as Users.User
      delete _user.password
      ctx.cookies.set('user',JSON.stringify(_user),
        {maxAge:parseInt(process.env.MA_USER)}
      )
      ctx.cookies.set('chg_email')
      ctx.body={success:true}
      return
    }

    if(data.pass_old){
      const _user=await Users.getUser(user.id) as Users.User
      const success=await Password.compare(data.pass_old,_user.password as string)
      if(!success){
        ctx.body={not_good_oldPassword:true}
        return
      }
      ctx.body={good_pass_old:true}
      return
    }

    if(data.password){
      await Users.updateUser(user.id,{password:data.password})
      let _user=await Users.getUser(user.id) as Users.User
      delete _user.password
      ctx.cookies.set('user',JSON.stringify(_user),
        {maxAge:parseInt(process.env.MA_USER)}
      )
      ctx.body={success:true}
      return
    }

    ctx.status=400
    ctx.throw('Invalid request')
  }
}

export const out:Route={
  path:'/logout',
  method:'post',
  handler:ctx=>{
    ctx.cookies.set('user')
    ctx.body=null
  }
}

export const del:Route={
  path:'/delete',
  method:'post',
  handler:async ctx=>{
    const user=JSON.parse(ctx.cookies.get('user')||"null")
    if(!user){
      ctx.body={need_connexion:true}
      return
    }
    const code=ctx.cookies.get('del_compte')
    const _code=ctx.request.body.code as number
    if(code!==_code+''){
      ctx.body={not_good_code:true}
      return
    }
    await Users.deleteUser(user.id)
    ctx.cookies.set('user')
    ctx.body={success:true}
  }
}