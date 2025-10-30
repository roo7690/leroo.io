import type { Route } from "@router"

export const avatar:Route={
  path:'/blog/avatar/:id',
  method:'get',
  handler:async ctx=>{
    const {id}=ctx.params;
    let gravatarAccount=(await fetch(process.env.GRAVATAR+id+'.json')).ok
    if(gravatarAccount){
      ctx.redirect(process.env.GRAVATAR_AVATAR+id)
    }else{
      let theme=ctx.cookies.get('theme')==='dark'
      ctx.redirect(`${process.env.MEDIA}img/circle-user-solid ${theme?1:2}.png`)
    }
  }
}

export const user_data:Route={
  path:'/blog/user-data/:id',
  method:'get',
  handler:async ctx=>{
    const {id}=ctx.params
    let gravatarAccount=await fetch(process.env.GRAVATAR+id+'.json')
    if(gravatarAccount.ok){
      ctx.body={res:(await gravatarAccount.json()).entry[0]}
    }else{
      ctx.body={res:null}
    }
  }
}

export const user:Route={
  path:'/blog/user/:id',
  method:'get',
  handler:async ctx=>{
    const {id}=ctx.params
    ctx.redirect(process.env.GRAVATAR+id)
  }
}