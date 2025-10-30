'use client'
import css from './comment.module.scss'
import {MdComment} from '@layouts/md'
import { Time,Items,Notif, Comment as fn } from '@function'
import {Gravatar} from '@components/gravatar'
import {Drop} from '@layouts/drop'
import { edit, point3, reply, share, smile, suppr, close, send } from '@components/svg'
import {Txt} from '@data-static'
import { useMemo,useState,useEffect,useContext } from 'react'
import { io } from 'socket.io-client'
import {ModalLayout} from '@layouts/modal'
import {Button} from '@components/button'
import {Context} from './provider'
import { Editer } from '@components/editer'

export interface CommentProps{
  id:string
  comment:string
  date:Date
  reactions:string[]
  response:CommentProps[]
  id_user:number
  id_parent_comment?:string
}

export {Context}

export function Comment(props:CommentProps){
  const ctx=useContext(Context)
  const user=ctx.users.get(props.id_user)!

  const txt=Txt.get('components',ctx.lang).comment
  const [reactions,setReactions]=useState(Items.group(props.reactions,{reverse:true}))
  const [comment,setComment]=useState({date:props.date,comment:props.comment})
  const [mode,setMode]=useState({edit:false,comment:false})

  const putReact=useMemo(()=>((reaction:string)=>{
    if(ctx.userId){
      fetch('/comment/put-react',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          id_blog:ctx.blogId,
          id_user:ctx.userId,
          id_comment:props.id,
          reaction
        })
      }).then(res=>res.json())
      .then(data=>{
        if(!data.success){
          Notif.send({msg:txt.reaction.error,state:'error'})
        }
      }).catch(()=>{
        Notif.send({msg:txt.reaction.error,state:'error'})
      })
    }else{
      document.getElementById('con_ins_edit_user')?.click()
    }
  }),[])

  const putComment=useMemo(()=>(comment:string)=>{
    fetch('/comment/put-comment',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        id_blog:ctx.blogId,
        id_comment:props.id,
        comment
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.refuse){
        Notif.send({state:'warning',msg:txt.edit_comment.refuse})
      }else if(data.success){
        setMode({edit:false,comment:false})
      }else{
        Notif.send({msg:txt.reaction.error,state:'error'})
      }
    })
    .catch(()=>{
      Notif.send({msg:txt.reaction.error,state:'error'})
    })
  },[])

  useEffect(()=>{
    const socket=io()
    socket.on('comment-update-react-'+props.id,()=>{
      fetch('/comment/get-react',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          id_blog:ctx.blogId,
          id_comment:props.id
        })
      }).then(res=>res.json())
      .then(data=>{
        data.reactions&&setReactions(Items.group(data.reactions,{reverse:true}))
        !data.reactions&&Notif.send({msg:txt.reaction.error,state:'error'})
      })
      .catch(()=>Notif.send({msg:txt.reaction.error,state:'error'}))
    })
    .on('comment-update-'+props.id,()=>{
      fetch('/comment/get-comment',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          id_blog:ctx.blogId,
          id_comment:props.id
        })
      }).then(res=>res.json())
      .then(data=>{
        data.comment&&setComment(data.comment)
        !data.comment&&Notif.send({msg:txt.reaction.error,state:'error'})
      })
      .catch(()=>Notif.send({msg:txt.reaction.error,state:'error'}))
    })
  },[])

  return (
  <div id={props.id} className={css.comment}>
    <div>
      <Gravatar className={css.avatar} user={user}
        card lang={ctx.lang}/>
      {props.response.length!==0?<div>
        <div className={css.line}/>
      </div>:null}
    </div>
    <div>
      <div className={css.bento+' bento b1'}>
        <div className={css.header}>
          <div className={css.username}>{user.username}</div>
          <div>{ctx.userId===user.id&&
            <Drop dropbutton={{value:point3,className:'bento icon i0 '+css.action}}
              dropcontent={{
                value:<div className={css.params}>
                  <ul>
                  <li onMouseDown={()=>setMode({edit:true,comment:false})}>{txt.edit}{edit}</li>
                  <li data-noclick onMouseDown={()=>
                    ModalLayout({position:{
                      top:'50%',
                      left:'50%',
                      translate:'-50% -50%'
                    },children:<ModalDelete id_blog={ctx.blogId} id_comment={props.id}/>}
                  )}>{txt.delete}{suppr}</li>
                  </ul>
                </div>
              }} />}
          </div>
        </div>
        <div className={css.response}></div>
        <div className={css.date}>{Time.there(comment.date,ctx.lang,'comment')}</div>
        <div>
          {!mode.edit?
            <MdComment>{comment.comment}</MdComment>
            :
            <Editer id={props.id+'-edit_comment'} content={comment.comment} lang={ctx.lang}
              edit={{children:<>{txt.edit_comment.edit}{send}</>,
              placeholder:txt.edit_comment.placeholder,
              action:()=>putComment(document.getElementById(props.id+'-edit_comment')?.textContent as string)
            }} cancel={{
              children:txt.edit_comment.cancel,
              action:()=>setMode({edit:false,comment:false})
            }} />
          }
        </div>
        <div className={css.footer}>
          <div className={css.reactions}>
            <div>
              <Drop dropbutton={{value:smile,className:'bento icon i0 '+css.action}}
                dropcontent={{
                  value:<div>{txt.reactions.map(r=>
                    <div key={r} onMouseDown={()=>putReact(r)}>{r}</div>
                  )}</div>
                }} />
            </div>
            <div>
              {reactions.map(r=>
                <div key={r.value} onClick={()=>putReact(r.value)}>{`${r.nbr} ${r.value}`}</div>
              )}
            </div>
          </div>
          <div>
            <div className={'bento icon i0 '+css.action}
              onClick={(ev)=>{
                if(ctx.userId){
                  setMode({edit:false,comment:true})
                  ev.clientY=ev.clientY+140
                }else{
                  document.getElementById('con_ins_edit_user')?.click()
                }
              }}
            >{reply}</div>
            <div className={'bento icon i0 '+css.action}
              onClick={()=>{
                navigator.clipboard.writeText(window.location.href+'#'+props.id)
                Notif.send({state:'success',msg:txt.share})
              }}
            >{share}</div>
          </div>
        </div>
        {mode.comment&&
          <Editer id={props.id+'-add_comment'} content={`@${user.username} `} lang={ctx.lang}
            edit={{children:<>{txt.add_comment.answer}{send}</>,
            placeholder:txt.add_comment.placeholder,
            action:()=>fn.Send({
              id_editer:props.id+'-add_comment',
              id_blog:ctx.blogId,
              id_user:ctx.userId as number,
              lang:ctx.lang,
              id_response:props.id_parent_comment||props.id,
              msg_refuse:txt.add_comment.refuse,
              success_action:()=>setMode({edit:false,comment:false})
            })}} 
            cancel={{
              children:txt.add_comment.cancel,
              action:()=>setMode({edit:false,comment:false})
            }} 
          />
        }
      </div>
      {props.response.map(resp=>
        <Comment key={resp.id} id={resp.id} comment={resp.comment}
          reactions={resp.reactions} id_user={resp.id_user} id_parent_comment={resp.id_parent_comment}
          response={[]} date={resp.date}/>
      )}
    </div>
  </div>
  )
}

  const ModalDelete=({id_blog,id_comment}:{
    id_blog:string
    id_comment:string
  })=>{
    const [lang,setlang]=useState(document.body.parentElement?.lang||'en')
    const txt=Txt.get('components',lang).comment.modal

    useEffect(()=>{
      window.addEventListener('lang',e=>{
        setlang(e.detail.value)
      })
    },[])

    return (
    <div className={css.modal_content+' bento'}>
      <div data-modal-close>{close}</div>
      <div>
        <div className='h2'>{txt.delete.content}</div>
        <div>
          <Button noAnimation action={()=>{
            fetch('/comment/delete',{
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
                id_blog,
                id_comment
              })
            }).then(res=>res.json())
            .then(data=>{
              if(data.success){
                Notif.send({msg:txt.delete.success,state:'success'});
                (document.querySelector('[data-modal-close]') as HTMLElement).click()
              }else{
                Notif.send({msg:txt.delete.error,state:'error'})
              }
            })
            .catch(()=>Notif.send({msg:txt.delete.error,state:'error'}))
          }} className={css.modal_confirm}>{txt.delete.delete}</Button>
          <Button dataset={{'modal-close':''}}>{txt.delete.cancel}</Button>
        </div>
      </div>
    </div>
    )
  }