import {jsonDb} from './db'
import { print_error } from '@function'

export interface Project{
  title:{
    value:string
    font?:{
      ff:string
      link:string
      fs?:number
      fw?:number
    }
    color?:string
  }
  description:string
  image:{
    url:string
    size:string
    position:string
  }
  blog:string
  link?:string
  hashtags:{color:string,hashtag:string}[]
  status:string
  area:[number,number]
  moreDescription?:any
}

/**recupere tous les projets */
export async function gets(lang:string):Promise<Project[]>{
  let projects:Project[]=[]
  await jsonDb.$connect()
  try{
    let _projects=await jsonDb.projects.findMany({orderBy:{ordre:'asc'}})
    const hashtags=await jsonDb.hashtags.findMany()
    projects=_projects.map(p=>({
      title:{
        value:(p.title.value as any)[lang],
        font:p.title.font?{
          ff:p.title.font.ff,
          link:p.title.font.link,
          fs:p.title.font.fs,
          fw:p.title.font.fw
        }:undefined,
        color:p.title.color
      },
      description:(p.description as any)[lang],
      image:{...p.image,url:process.env.MEDIA+p.image.url},
      link:p.link||undefined,
      blog:'/blog/'+p.blog,
      hashtags:p.hashtags.map(_h=>{
        const {color,hashtag}=hashtags.find(h=>h.key===_h)||{color:'var(--cb)',hashtag:'oups !'}
        return {color,hashtag}
      }),
      status:p.status,
      area:p.area as any,
      moreDescription:p.moreDescription as any
    }))
  }catch(e){
    console.log(print_error('Erreur lors de la récupération des projets'),e)
  }finally{
    await jsonDb.$disconnect()
  }

  return projects
}