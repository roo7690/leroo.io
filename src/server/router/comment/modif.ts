import type { Route } from "@router"
import { Comment } from "@db"
import { Verif } from "@function"

export const prefix='/comment'

export const put_react:Route={
  path:'/put-react',
  method:'post',
  handler:async ctx=>{
    const {id_blog,id_user,id_comment,reaction}=ctx.request.body
    let res=await Comment.updateReactions({id_blog,id_comment,id_user,reaction})
    res&&ctx.wss.emit('comment-update-react-'+id_comment)
    ctx.body={success:res}
  }
}

export const get_react:Route={
  path:'/get-react',
  method:'post',
  handler:async ctx=>{
    const {id_blog,id_comment}=ctx.request.body
    let res=await Comment.getReactions({id_blog,id_comment})
    ctx.body={reactions:res}
  }
}

export const put_comment:Route={
  path:'/put-comment',
  method:'post',
  handler:async ctx=>{
    const {id_blog,id_comment,comment}=ctx.request.body
    if(Verif.comment(comment)){
      let res=await Comment.put({id_blog,id_comment,comment})
      res&&ctx.wss.emit('comment-update-'+id_comment)
      ctx.body={success:res}
    }else{
      ctx.body={refuse:true}
    }
  }
}

export const get_comment:Route={
  path:'/get-comment',
  method:'post',
  handler:async ctx=>{
    const {id_blog,id_comment}=ctx.request.body
    let res=await Comment.get({id_blog,id_comment})
    ctx.body={comment:res}
  }
}