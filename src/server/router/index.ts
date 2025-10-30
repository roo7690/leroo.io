import type koa from 'koa'
import Router from '@koa/router'
import type {Route} from './router'

export default async function addRoutes(app:koa){
  const routers:Router[]=[]

  const modules=require.context('./',true,/\.ts$/,'sync')
  const mods_path=modules.keys().filter(key=>key!=='./index.ts'&&key!=='./router.ts')
  for(const mod of mods_path){
    const routesModule=await modules(mod)
    const router=new Router()
    if(routesModule.prefix){
      router.prefix(routesModule.prefix)
    }
    Object.keys(routesModule)
    .filter(key=>key!=='prefix').forEach(key=>{
      const route=routesModule[key] as Route
      router[route.method](route.path,route.handler)
    })
    routers.push(router)
  }

  routers.forEach(router=>{
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
  const nextRouter=new Router()
  nextRouter.all('(.*)',async ctx=>{
    ctx.status=200
    await ctx.nextHandler(ctx.req,ctx.res)
    ctx.respond=false
  })
  app.use(nextRouter.routes())
  app.use(nextRouter.allowedMethods())
}