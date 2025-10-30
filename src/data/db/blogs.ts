import {jsonDb,sqlDb} from './db'
import { print_error } from "@function"
import {sha256} from 'js-sha256'
import type { Comment } from './comments'
import { ObjectId } from 'bson'

export interface Article{
  title:string
  content:string
  img:{src:string,alt:string}
  auts:{name:string,img:string,url_data:string}[],
  link:string,
  date:Date,
  hashtags:{color:string,hashtag:string}[]
}

  /**recupere tous les blogs */
export async function gets(lang:string,[start,qtite]:[number,number]):Promise<Article[]>{
  let blogs:Article[]=[]
  await jsonDb.$connect()
  try{
    let _blogs= await jsonDb.blogs.findMany({
      orderBy:{date:'desc'},
      where:{visible:true},
      take:qtite,skip:start-1}
    )
    let _hashtags= await jsonDb.hashtags.findMany()
    _blogs.forEach(b=>{
      const {title,content,img,auts,link,date,hashtags}=b
      const __hashtags=hashtags.map(h=>{
        const {color,hashtag}=_hashtags.find(_h=>_h.key===h)||{color:'var(--cb)',hashtag:'oups !'}
        return {color,hashtag}
      })
      blogs.push({
        title:(title as any)[lang],
        content:(content as any)[lang],
        link:'/blog/'+link,
        date,
        img:{
          src:process.env.MEDIA+img.src,
          alt:img.alt
        },
        auts:auts.map(aut=>({
          name:aut.name,
          img:process.env.MEDIA+aut.img,
          url_data:`${process.env.HOST}/blog/user-data/${sha256(aut.email)}.json`
        })),
        hashtags:__hashtags.map(h=>({
          color:h?.color||'var(--cb)',hashtag:h?.hashtag||'oups !'
        }))
      })
    })
  }catch(e){
    console.log(print_error('Erreur lors de la récupération des blogs'),e)
  }finally{
    await jsonDb.$disconnect()
  }

  return blogs
}

export type Data={
  id:string
  title:string
  link: string
  actif: boolean
  date: Date|null
  auts:{name:string,img:string,url_data:string}[]
  comments:{
    nbr:number
    comments:Comment[]
    users:Map<number,{id:number,username:string,img:string,url_data:string}>
    error?:boolean
  },
  error?:boolean
  not_found?:boolean
}

/**recupere les informations d'un blog */
export async function getDataBlog(link:string,lang:string):
Promise<Data>{
  const data:Data={
    id:'',
    title:'',
    auts:[],
    link:link,
    actif:false,
    date:null,
    comments:{
      nbr:0,
      comments:[],
      users:new Map()
    }
  }
  await jsonDb.$connect()
  try{
    let blog= await jsonDb.blogs.findMany({where:{link}})
    if(blog.length===0){
      data.not_found=true
    }else if(blog.length>1){
      data.error=true
      console.log(print_error('Plusieurs blogs ont le même lien : '+link))
    }else{
      data.actif=blog[0].actif
      data.id=blog[0].id
      data.date=blog[0].date
      data.title=(blog[0].title as any)[lang]
      data.auts=blog[0].auts.map(aut=>({
        name:aut.name,
        img:process.env.MEDIA+aut.img,
        url_data:`${process.env.HOST}/blog/user-data/${sha256(aut.email)}`
      }))
    }
  }catch(e){
    data.error=true
    console.log(print_error('Erreur lors de la récupération du blog '+link),e)
  }finally{
    await jsonDb.$disconnect()
  }

  if(data.actif&&!data.error){
    data.comments=await getCommentsBlog(data.id,link)
  }

  return data
}

/**recupere les commentaires d'un blog */
export async function getCommentsBlog(id_blog:string,link:string)
:Promise<Data['comments']>{
  const comments:Data['comments']={
    nbr:0,
    comments:[],
    users:new Map()
  }
  await jsonDb.$connect()
  try{
    let _comments= await jsonDb.comments.findFirst({
      where:{id_blog}
    })
    if(_comments){
      const cmts=_comments.comments.map(c=>{
        return {
          id:c.id,
          comment:c.comment,
          date:c.date,
          id_user:c.id_user,
          reactions:c.reactions.map(r=>r.reaction),
          response:c.response
        }
      })
      comments.comments=cmts
      comments.nbr=_comments.nbr_comments

      const users_id=new Set<number>()
      comments.comments.forEach(c=>{
        users_id.add(c.id_user)
      })
      sqlDb.$connect()
      try{
        const users= await sqlDb.users.findMany({where:{id:{in:[...users_id]}}})
        for(const u of users){
          const h_email=sha256(u.email)
          comments.users.set(u.id,{
            id:u.id,
            username:u.username,
            img:`${process.env.HOST}/blog/avatar/${h_email}`,
            url_data:`${process.env.HOST}/blog/user-data/${h_email}`
          })
        }
      }catch(e){
        comments.error=true
        console.log(print_error('Erreur lors de la récupération des utilisateurs'),e)
      }finally{
        await sqlDb.$disconnect()
      }
    }else{
      await jsonDb.comments.create({
        data:{
          id:new ObjectId().toHexString(),id_blog,
          blog:link,
          nbr_comments:0,
          comments:[]
        }
      })
    }
  }catch(e){
    comments.error=true
    console.log(print_error('Erreur lors de la récupération des commentaires du blob : '+link),e)
  }finally{
    await jsonDb.$disconnect()
  }

  return comments
}