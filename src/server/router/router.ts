import type {Middleware} from 'koa'

export interface Route {
  path:string
  method: 'get' | 'post' | 'put' | 'delete'
  handler: Middleware
}