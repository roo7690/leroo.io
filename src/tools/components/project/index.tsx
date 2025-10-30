import type { Project as P } from '@db'
import css from './project.module.scss'
import Link from 'next/link'
import React from 'react'
import { BuildElements } from "@layouts/build_elements"
import { link } from '@components/svg'
import {Hashtag} from '@components/hashtag'
import {Txt} from '@data-static'
import { ExternalLink } from './script'

interface Props extends P.Project{
  lang:string
}

export function Project(props:Props){
  const status=Txt.get('components',props.lang).project.status
  const style:React.CSSProperties={
    gridColumn:`span ${props.area[0]}`,
    gridRow:`span ${props.area[1]}`,
    backgroundImage:`url(${props.image.url})`,
    backgroundSize:props.image.size,
    backgroundPosition:props.image.position,
    backgroundRepeat:'no-repeat'
  }

  return (
  <div id={'project-'+props.title.value} className={css.container} style={style}>
    <div className={css.project+' bento b1 '+(props.moreDescription?css.hoverable:undefined)}>
      <Link href={props.blog} 
        style={{textDecoration:'none',color:'inherit'}}>
        <div>
          <div className={css.status} style={{'--status':`var(--${props.status})`} as any}>
            <div/><div>{(status as any)[props.status]}</div>
          </div>
          <div className={css.description}>
            <h1 style={{
              fontFamily:props.title.font?props.title.font.ff:undefined,
              fontSize:props.title.font?props.title.font.fs+'px':"32px",
              fontWeight:props.title.font?props.title.font.fw:400,
              color:props.title.color?props.title.color:undefined
            }}>{props.title.value}</h1>
            <p>{props.description}</p>
          </div>
          {props.moreDescription&&
            <div className={css.more} style={props.moreDescription.container_style}>
              <BuildElements child={props.moreDescription.children}/>
            </div>
          }
        </div>
        <div className={css.hashtag}>
          <div>
            {props.hashtags.map((hashtag,i)=>(
              <Hashtag key={i} {...hashtag}/>
            ))}
          </div>
          {props.link&&<>
            <ExternalLink id={'project-external_link-'+props.title.value}/>
            <Link id={'project-external_link-'+props.title.value} href={props.link} target='_blank'>
              <div className={'bento icon i0'}>{link}</div>
            </Link>
          </>}
        </div>
      </Link>
    </div>
  </div>
  )
}

export {Font} from './font'