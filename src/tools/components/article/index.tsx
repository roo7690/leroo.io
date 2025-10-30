import type { Blog } from '@db'
import {Div3} from '@components/div3'
import css from './article.module.scss'
import Link from 'next/link'
import { Time } from '@function'
import {Hashtag} from '@components/hashtag'
import { Gravatar } from '@components/gravatar'

interface Props extends Blog.Article {
  lang:string
}

export function Article(props:Props){
  return (
  <div className={css.article+' bento'}>
    <Div3 className={css.img}
      options={{reverse:true,scale:1.014,speed:3500,max:14}}>
      <Link href={props.link}>
        <img style={{width:'100%',height:'100%'}} {...props.img}/>
        <div className={css.hashtags}>
          {props.hashtags.map((hashtag,i)=>(
            <Hashtag key={i} {...hashtag}/>
          ))}
        </div>
      </Link>
    </Div3>
    <div className={css.descrip}>
      <div>
        <div className={css.title}><Link href={props.link}>{props.title}</Link></div>
        <div className={css.content+' '+css.date}>{Time.formate(props.date,props.lang)}</div>
        <div className={css.content}>{props.content}</div>
      </div>
      <div className={css.auts}>
        {props.auts.map((aut,i)=><Gravatar user={{username:aut.name,img:aut.img,url_data:aut.url_data}} 
          key={i} lang={props.lang}/>)}
      </div>
    </div>
  </div>
  )
}