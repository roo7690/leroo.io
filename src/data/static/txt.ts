import * as schemas_p from './pages/schema'
import * as schemas_l from './layouts/schema'

export const get=<T extends keyof Text>(src:T,lang:string|undefined)=>{
  return require(`./${folder[src]}/${lang}/${src}.ts`).txt as Text[T]
}

export interface Text {
  home:schemas_p.home
  blog:schemas_p.blog
  'about-me':schemas_p.about_me
  layouts:schemas_l.layouts
  components:schemas_l.components
}

const folder:{[key in keyof Text]:string}={
  home:'pages',
  blog:'pages',
  'about-me':'pages',
  layouts:'layouts',
  components:'layouts'
}

export const news_msg_error={
  img:"https://blob.leroo.io/download/public/.roo7690/img/logo.png",
  link:"#",
  en:{
    msg:"Error while loading news. Please try again later.",
    btn:"Oops!"
  },
  fr:{
    msg:"Erreur lors du chargement des actualités. Veuillez réessayer plus tard.",
    btn:"Oups!"
  }
}