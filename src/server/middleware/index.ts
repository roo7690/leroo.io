import type koa from 'koa'

export default async function addMiddlewares(app:koa){
  const middlewares:{[key:number]:koa.Middleware[]}={}

  const modules=require.context('./',true,/\.ts$/,'sync')
  const mods_path=modules.keys().filter(key=>key!=='./index.ts'&&key!=='./types.ts')
  for(const mod of mods_path){
    const middlewareModule= await modules(mod)
    if(typeof middlewareModule.order!=='number'|| !middlewareModule.middlewares){
      console.error('a middleware module must have an order property of type number (for order) and a middleware property of type Array\n')
      process.exit(1)
    }
    middlewares[middlewareModule.order]=middlewareModule.middlewares
  }

  Object.keys(middlewares).forEach(key=>{
    middlewares[parseInt(key)].forEach(middleware=>{
      app.use(middleware)
    })
  })
}