import type { Route } from '@router'
import passport from 'koa-passport'

export const prefix='/auth'

export const auth_goo:Route={
  path:'/google',
  method:'get',
  handler: passport.authenticate('google',{
    scope:['profile','email']
  })
}

export const auth_goo_cb:Route={
  path:'/google/callback',
  method:'get',
  handler:async ctx=>{
    await passport.authenticate('google',{},(err,user)=>{
      if(user){
        ctx.cookies.set('user',JSON.stringify(user),{
          maxAge:parseInt(process.env.MA_USER)
        })
      }
      const last_page=ctx.cookies.get('last-page')
      if(!last_page){
        ctx.redirect('/blog')
      }
      ctx.redirect(last_page as string)
    })(ctx,undefined as any)
  }
}

export const auth_git:Route={
  path:'/github',
  method:'get',
  handler: passport.authenticate('github', { scope: [ 'user:email' ] })
}

export const auth_git_cb:Route={
  path:'/github/callback',
  method:'get',
  handler:async ctx=>{
    await passport.authenticate('github',{},(err,user)=>{
      if(user){
        ctx.cookies.set('user',JSON.stringify(user),{
          maxAge:parseInt(process.env.MA_USER)
        })
      }
      const last_page=ctx.cookies.get('last-page')
      if(!last_page){
        ctx.redirect('/blog')
      }
      ctx.redirect(last_page as string)
    })(ctx,undefined as any)
  }
}