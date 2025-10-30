'use client'
import { useEffect, useRef, useState } from 'react'
import css from './gravatar.module.scss'
import Link from 'next/link'
import {Txt} from '@data-static'
import {link_blank} from '@components/svg'

export function Gravatar(
  {
    user:{img,username,url_data},
    className,card,lang,notViewUsername
}:{
  user:{img:string,username:string,url_data:string},
  className?:string,card?:boolean,lang:string,notViewUsername?:boolean
}){
  const hovercard=useRef<HTMLDivElement>(null)
  const [data,setdata]=useState<any>(undefined)
  let txt:Txt.Text['components']['gravatar']={} as any
  if(card){
    txt=Txt.get('components',lang).gravatar
  }
  
  useEffect(()=>{
    card&&
    fetch(url_data)
    .then(res=>res.json())
    .then(data=>setdata(data.res))
    .catch(err=>setdata(null))
  },[])

  useEffect(()=>{
    if(card&&hovercard.current&&data){
      const img=hovercard.current.children[0] as HTMLImageElement
      const çard=hovercard.current.children[1] as HTMLDivElement

      let removecard:NodeJS.Timeout,
        active:boolean

      img.onmouseenter=()=>{
        active=true
        clearTimeout(removecard)
        setTimeout(()=>{
          if(active){
            çard.style.display='block'
            setTimeout(()=>{
              çard.style.opacity='1'
            },0)
          }
        },500)
      }
      img.onmouseleave=()=>{
        active=false
        removecard=setTimeout(()=>{
          çard.style.opacity='0'
          setTimeout(()=>{
            çard.style.display='none'
          },200)
        },500)
      }

      çard.onmouseenter=()=>{
        clearTimeout(removecard)
      }
      çard.onmouseleave=()=>{
        removecard=setTimeout(()=>{
          çard.style.opacity='0'
          setTimeout(()=>{
            çard.style.display='none'
          },200)
        },500)
      }
    }
  })

  return (<>
  {!card?
    <Link href={url_data.replace('user-data','user')} className={css.link} target='_blank'>
      <img className={className+(!notViewUsername?' ':' '+css.nvu+' ')+css.img_link} 
        src={img} alt={username} />
      {!notViewUsername&&<div>{username}</div>}
    </Link>
  :
    <div ref={hovercard} className={className+' '+css.hovercard}>
      <img src={img} alt={username} />
      {data&&(
        <div className={css.card} style={{
          background:data.profileBackground.color?data.profileBackground.color:'var(--cp2)',
        }}>
          <div style={{
              backgroundImage:data.profileBackground.url?`url(${data.profileBackground.url})`:undefined,
              backgroundSize:data.profileBackground.url?'cover':undefined,
              backgroundPosition:data.profileBackground.url?'center':undefined,
              backgroundRepeat:data.profileBackground.url?'no-repeat':undefined,
              backgroundColor:data.profileBackground.url?undefined:'transparent'
            }}>
            <div>
              <div className={css.card_head}>
                <img src={img} alt={data.displayName} />
                <div>
                  <h3>{data.displayName}</h3>
                  <p>{data.job_title}</p>
                </div>
              </div>
              <p className={css.card_body}>{data.aboutMe}</p>
              <div className={css.card_end}>
                <div>
                  {data.accounts?.map((a:any,i:number)=>(
                    <Link key={i} href={a.url}>
                      <i className={`fa-brands fa-${getBrands(a.shortname)}`}/>
                    </Link>
                  ))}
                </div>
                <Link href={data.profileUrl}>
                  <div>{txt.profile}</div>
                  {link_blank}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  }
  </>)
}

const getBrands=(shortname:string)=>{
  if(shortname==='twitter'){
    return 'square-x-twitter'
  }
  return shortname
}