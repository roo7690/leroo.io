import type {Route} from '@router'
import { CookiesKey } from '@function'

export const set_cookies:Route={
  path:'/set-cookies',
  method:'post',
  handler:async ctx=>{
    const {name,value,time}=ctx.request.body
    if(name===undefined||value===undefined){
      ctx.status=400
      ctx.throw('aucun nom ou valeur de cookie spécifié')
    }
    let maxAge:number|undefined
    switch(name as CookiesKey){
      case 'theme':
        maxAge=parseInt(process.env.MA_THEMES)
        break
      case 'lang':
        maxAge=parseInt(process.env.MA_LANG)
        break
      default:
        maxAge=time
    }
    try{
      ctx.cookies.set(name,value,{
        signed:true,
        maxAge,
        httpOnly:true,
        secure:process.env.NODE_ENV==='production',
        sameSite:'lax',
        domain:process.env.DOMAIN
      })
    }catch(err){
      console.error('Cookie error: ', err)
    }
    ctx.body={success:true}
  }
}