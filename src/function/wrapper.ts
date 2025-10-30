import type {ParameterizedContext, Next} from 'koa'
import type { IncomingMessage, ServerResponse } from 'http'

export const expressMiddleware=async (
  em:(req:IncomingMessage,res:ServerResponse<IncomingMessage>,next:(err:any)=>any
)=>any)=>{
  return async (ctx:ParameterizedContext,next:Next)=>{
    await new Promise((resolve,reject)=>{
      em(ctx.req,ctx.res,err=>{
        if(err){return reject(err)}
        resolve(null)
      })
    })
    await next()
  }
}