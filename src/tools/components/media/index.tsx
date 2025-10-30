"use client"
import { useRef, useState } from 'react'
import css from './media.module.scss'
import { link, rotate_left, sound_off, sound_on } from '@components/svg'
import Link from 'next/link'

export interface MediaProps<T='image'|'video'>{
  poster?:React.ReactElement,
  size:[width:string,height:string],
  link?:string
  className?:string,style?:React.CSSProperties,
  alt:string
  src:T extends 'image'?string:T extends 'video'?string[]:never
}

export function Media<type>(props:MediaProps<type>){
  const vid=useRef<HTMLVideoElement>(null)
  const [sound,setSound]=useState(sound_off)
  const style:React.CSSProperties={
    ...props.style,
    width:props.size[0],
    height:props.size[1]
  }

  return(
    <div className={css.med+' '+props.className} style={style}>
      {Array.isArray(props.src)?
        <video ref={vid} className={css.media} muted loop autoPlay
          onPause={(ev)=>{ev.currentTarget.play()}} preload='auto'>
          {props.src.map((src,index)=><source src={src} key={index} />)}
          <p>{props.alt}</p>
        </video>
        :
        <img src={props.src} className={css.media} alt={props.alt} />
      }
      <div className={css.poster}>
        <div>{props.poster}</div>
        {Array.isArray(props.src)?
          <div>
            <button className='bento icon i0' 
              onClick={()=>(vid.current as HTMLVideoElement).currentTime-=10}>
              {rotate_left}
            </button>
            <button className='bento icon i0' onClick={()=>{
              (vid.current as HTMLVideoElement).muted=!vid.current?.muted
              setSound(vid.current?.muted?sound_off:sound_on)
            }}>
              {sound}
            </button>
          </div>
          :null
        }
        <div>
          {props.link?<Link href={props.link} target='_blank'>
            <div className='bento icon i0'>{link}</div></Link>
            :null}
        </div>
      </div>
    </div>
  )
}