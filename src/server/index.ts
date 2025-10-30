import {config} from 'dotenv'
import fs from 'fs'
import {createServer} from 'http'
import {Server as WebSocketServer} from 'socket.io'
import koa from 'koa'
import cors from '@koa/cors'
import session from 'koa-session'
import bodyParser from '@koa/bodyparser'
import addMiddlewares from './middleware'
import addRoutes from './router'
import next from 'next'

const envs=[
  `.env.${process.env.NODE_ENV}.local`,
  '.env.local',
  `.env.${process.env.NODE_ENV}`,
  '.env'
]

envs.forEach(env=>{
  if(fs.existsSync(env)){
    config({path:env})
  }
})

const dev=process.env.NODE_ENV!=='production'
const hostname=process.env._HOSTNAME
const port=parseInt(process.env.PORT)

try{
  const app=new koa()
  app.proxy=!dev
  app.keys=[process.env.SECRET_KEY]
  app.use(cors())
  app.use(bodyParser())
  app.use(session({
    signed:true,
    maxAge:86400000,
    httpOnly:true,
    secure:!dev,
    sameSite:'lax',
    domain:process.env.DOMAIN
  },app))

  const nextServer=next({dev,hostname,port,customServer:true})
  const nextHandler=nextServer.getRequestHandler()
  await nextServer.prepare()
  let wss:WebSocketServer

  app.use(async (ctx,next)=>{
    ctx.nextServer=nextServer
    ctx.nextHandler=nextHandler
    ctx.wss=wss
    await next()
  })

  await addMiddlewares(app)
  await addRoutes(app)

  const server=createServer(app.callback())
  
  wss=new WebSocketServer(server)
  wss.on('connection_error',err=>console.log(err.message,err))
  
  server
  .once('error',err=>{
    console.log(err);
    process.exit(1)
  })
  .listen(port,hostname,()=>{
    console.log(`\n\x1b[1;32m> Le server démarre sur http://${hostname}:${port}\x1b[0m\n`)
  })
}catch(err){
  console.log(err)
  process.exit(1)
}