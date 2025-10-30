'use client'
import { useState } from 'react'
import css from '../page.module.scss'
import { Blog } from '@db'
import { Txt } from '@data-static'
import {Article} from '@components/article'
import { Button } from '@components/button'
import { circle_notch } from '@components/svg'
import { Notif } from '@function'

export function Blogs({articles,lang,txt}:{articles:Blog.Article[],lang:string,txt:Txt.Text['blog']}){
  const [posts,setPost]=useState(articles)
  
  return (
  <>
  <div className={css.content}>
    {posts.length==0?
      <div className='error'>{txt.error}</div>
      :
      posts.map((post,i)=>(
        <Article key={i} {...post} lang={lang}/>
      ))
    }
  </div>
  <div className={css.footer}>
    <Button className={css.btn_load} action={()=>{
      const btn_load=document.getElementsByClassName(css.btn_load)[0]!
      btn_load.classList.add(css.load)
      fetch('/blog/blogs',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({start:posts.length+1,lang})
      }).then(res=>res.json())
      .then(data=>{
        let _posts=posts
        data.res.forEach((p:Blog.Article)=>_posts.push(p))
        setPost(_posts)
      })
      .catch(e=>{
        Notif.send({state:'error',msg:txt.error})
      })
      .finally(()=>btn_load.classList.remove(css.load))
    }}>{txt.blogs.btn}{circle_notch}</Button>
  </div>
  </>
  )
}