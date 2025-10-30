import type {Route} from '@router'
import {Blog,Comment} from '@db'
import {Verif} from '@function'

export const prefix='/comment'

export const add:Route={
  path:'/add',
  method:'post',
  handler:async ctx=>{
    const {id_blog,id_user,comment,id_response}=ctx.request.body
    if(Verif.comment(comment)){
      let res=await Comment.add({id_blog,comment,id_user,id_response})
      res&&ctx.wss.emit('comments-update-'+id_blog)
      ctx.body={success:res}
    }else{
      ctx.body={refuse:true}
    }
  }
}

export const get:Route={
  path:'/get',
  method:'post',
  handler:async ctx=>{
    const {id,name}=ctx.request.body
    const comments=await Blog.getCommentsBlog(id,name)
    let res:any=comments
    res.users=[...comments.users];
    comments.comments.forEach(c=>{
      res.date=c.date.getTime()
    })
    ctx.body=comments
  }
}

export const del:Route={
  path:'/delete',
  method:'post',
  handler:async ctx=>{
    const {id_blog,id_comment}=ctx.request.body
    let res=await Comment.remove({id_blog,id_comment})
    res&&ctx.wss.emit('comments-update-'+id_blog)
    ctx.body={success:res}
  }
}