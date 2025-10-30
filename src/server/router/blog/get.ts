import type { Route } from "@router"
import { Blog } from "@db"

export const avatar:Route={
  path:'/blog/blogs',
  method:'post',
  handler:async ctx=>{
    const {start,lang}=ctx.request.body
    const qtite=parseInt(process.env.QTITE_BLOGS)
    const posts=await Blog.gets(lang,[start,qtite])
    ctx.body={res:posts}
  }
}