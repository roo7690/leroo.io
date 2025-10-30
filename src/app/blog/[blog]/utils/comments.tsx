'use client'
import type {Blog} from "@db"
import {Comment,Context,CommentProps} from '@components/comment'
import { useState,useEffect,useMemo } from "react"
import {Gravatar} from "@components/gravatar"
import {createRoot} from 'react-dom/client'
import { io } from "socket.io-client"

interface CommentsProps{
  blog:{
    id:string
    link:string
  }
  data:Blog.Data['comments']
  txt:string
  lang:string
  userId?:number
}

export function Comments(props:CommentsProps){
  const [data,setdata]=useState(props.data)
  const comment=useMemo(()=>{
    const comment$=data.error?[]:data.comments.filter(c=>c.response===null).map(c=>({
      id:c.id,
      comment:c.comment,
      reactions:c.reactions,
      id_user:c.id_user,
      date:c.date,
      response:[]
    })) as CommentProps[]
    for(const comment of comment$){
      comment.response=data.comments.filter(c=>c.response?.id===comment.id).map(c=>({
        id:c.id,
        comment:c.comment,
        reactions:c.reactions,
        id_user:c.id_user,
        date:c.date,
        response:[],
        id_parent_comment:comment.id
      }))
    }
    return comment$
  },[data.comments])

  const participants=(Array.from(data.users.values()).map(u=>(
    <Gravatar key={u.username} user={u} lang={props.lang} notViewUsername />
  )))

  useEffect(()=>{
    setdata(props.data)
  },[props.data.users])

  useEffect(()=>{
    createRoot(document.getElementById('com-participants') as HTMLElement)
    .render(participants)
  },[data.users])

  useEffect(()=>{
    createRoot(document.getElementById('com-nbr') as HTMLElement)
    .render(data.nbr)
  },[data.nbr])

  useEffect(()=>{
    const socket=io()
    socket.on('comments-update-'+props.blog.id,()=>{
      fetch('/comment/get',{
        method:'POST',
        mode:'cors',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({...props.blog})
      }).then(res=>res.json())
      .then(data=>{
        if(!data.error){
          data.users=new Map(data.users);
          (data.comments as Array<any>).forEach(c=>{
            c.date=new Date(c.date)
          })
        }
        setdata(data)
      })
      .catch(e=>{console.log(e)})
    })
    return ()=>{socket.off('comment-update-'+props.blog.link)}
  },[])

  return (data.error?
    <div className='error'>
      {props.txt}
    </div>
    :
    <Context.Provider value={{
      userId:props.userId,
      blogId:props.blog.id,
      lang:props.lang,
      users:data.users
    }}>
      {comment.map(c=>(
        <Comment key={c.id} id={c.id} comment={c.comment} reactions={c.reactions}
          id_user={c.id_user} response={c.response} date={c.date} />
      ))}
    </Context.Provider>
  )
}