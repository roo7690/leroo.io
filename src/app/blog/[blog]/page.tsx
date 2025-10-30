import {MdBlog} from "@layouts/md"
import { notFound } from "next/navigation"
import {Blog as B,Users} from '@db'
import { cookies } from 'next/headers'
import css from './page.module.scss'
import {Txt} from '@data-static'
import {Button} from "@components/button"
import { addr_user, send } from "@components/svg"
import {ModalLayout,ModalConIns,ModalEditUser} from "@layouts/modal"
import {Comments,Copy} from "./utils"
import {Editer} from '@components/editer'
import {Comment,createActionServer,Time} from '@function'
import { Gravatar } from '@components/gravatar'

export default async function Page({params}:
  {params:{blog:string}}
){
  const lang=(cookies().get('lang')?.value || 'en') as string
  const data_blog=await B.getDataBlog(params.blog,lang)
  const layout=Txt.get('layouts',lang)
  const txt=Txt.get('blog',lang)

  if(data_blog.error){
    return (
    <div className={css.page}>
      <div className='error'>
        {txt.error}
      </div>
    </div>
    )
  }

  if(!data_blog.actif||data_blog.not_found){
    notFound()
  }

  let md:string=''
  const res= await fetch(`${process.env.BLOB}/blogs/${params.blog}/${lang}`,{
    method:'GET',
    mode:'cors',
    headers:{
      'Content-Type':'application/octect-stream',
      'Access-Key':`${process.env.BLOB_KEY}`
    }
  })

  if(res.headers.get('Content-Type')==='application/octet-stream'){
    md=await res.text()
  }else{
    if(process.env.INCLUDE_ASSETS==='true'){
      try{
        md=require('fs').readFileSync(`./assets/blogs/${params.blog}.md`,'utf-8')
      }catch(e){
        notFound()
      }
    }else{
      notFound()
    }
  }
  const user=JSON.parse(cookies().get('user')?.value || 'null') as null|Omit<Users.User,'password'>
  
  return (
  <div className={css.page}>
    <div className={css.title}>
      <span>{Time.formate(data_blog.date!,lang)}</span>
      <h1 className="h0">{data_blog.title}</h1>
      <div>{txt.blog_page.by}</div>
      <div>
        {data_blog.auts.map((aut,i)=>
          <Gravatar user={{username:aut.name,img:aut.img,url_data:aut.url_data}} 
            key={i} lang={lang}/>)
        }
      </div>
    </div>
    <div className={css.blog}>
      <MdBlog>{md}</MdBlog>
      <Copy/>
    </div>
    <div className={css.coms}>
      <div>
        <span id="com-nbr" className='title1'/>
        <span className='title1'>{txt.blog_page.comment}</span>
      </div>
      <div>
        <div id='com-participants'></div>
        <Button id="con_ins_edit_user" action={!user?modal_cons_ins({media:process.env.MEDIA})
          :modal_edit_user(user)}
          className={css.connexion} alter >{addr_user}{user?
          layout.connexion.connexion._true:
          layout.connexion.connexion._false}
        </Button>
      </div>
    </div>
    <div className={data_blog.comments.nbr!==0?css.comments:''}>
      <Comments blog={{id:data_blog.id,link:data_blog.link}} 
        userId={user?.id} lang={lang} txt={txt.error} data={data_blog.comments}/>
    </div>
    <Editer lang={lang}
      id="add_comment" edit={{
      children:<>{txt.blog_page.send_comment}{send}</>,
      placeholder:txt.blog_page.comment_placeholder,
      action:user?createActionServer(Comment.Send,{
        id_editer:'add_comment',
        id_blog:data_blog.id,
        id_user:user.id,
        lang,
        msg_refuse:layout.blog.msg_refuse
      }):modal_cons_ins({media:process.env.MEDIA})
      }}
    />
  </div>
  )
}

const modal_cons_ins=(
  props:{media:string}
)=>(createActionServer(ModalLayout,{
  position:{
    top:'50%',
    left:'50%',
    translate:'-50% -50%'
  },
  children:<ModalConIns {...props} />
}))

const modal_edit_user=(
  props:Users.User
)=>(createActionServer(ModalLayout,{
  position:{
    top:'50%',
    left:'50%',
    translate:'-50% -50%'
  },
  children:<ModalEditUser {...props}/>
}))