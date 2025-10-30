"use client"
import { useEffect} from "react"
import {skills as skil_css} from '../../scss'

export function Dynamic(){

  useEffect(()=>{
    const cont_doms = document.getElementsByClassName(skil_css.parent_dom)[0] as HTMLDivElement
    const cont_skills= cont_doms.parentElement!
    
    cont_skills.style.height=cont_doms.offsetHeight+'px'
    const ob=new ResizeObserver(els=>{
      for(let el of els){
        if(el.contentRect.height!==cont_skills.offsetHeight){
          cont_skills.style.height=cont_doms.offsetHeight+'px'
        }
      }
    })
    ob.observe(cont_doms)
    return ()=>ob.disconnect()
  },[])

  useEffect(()=>{
    let _transit:NodeJS.Timeout
    const cont_doms = document.getElementsByClassName(skil_css.parent_dom)[0]
    const cont_techs = document.getElementsByClassName(skil_css.parent_tech)[0]
    const doms=document.querySelectorAll('[data-dom]') as NodeListOf<HTMLDivElement>
    const techs=document.querySelectorAll('[data-todom]') as NodeListOf<HTMLDivElement>
    const back=document.getElementsByClassName(skil_css.back)[0] as HTMLDivElement

    if(back.dataset.dom){
      back.getElementsByTagName('div')[0].textContent=(document
        .querySelector(`[data-dom="${back.dataset.dom}"]`) as HTMLDivElement)
        .dataset._dom!
    }

    const transit=(sens:boolean,dom?:{name:string,id:string})=>{
      if(sens){
        cont_doms.classList.add(skil_css.transit)
        return setTimeout(()=>{
          cont_techs.classList.add(skil_css.transit)
          back.getElementsByTagName('div')[0].textContent=dom!.name
          back.dataset.dom=dom!.id
          back.classList.remove('hidden')
        },200)
      }else{
        back.classList.add('hidden')
        cont_techs.classList.remove(skil_css.transit)
        return setTimeout(()=>{
          cont_doms.classList.remove(skil_css.transit)
        },200)
      }
    }
    
    doms.forEach(dom=>{
      dom.addEventListener('click',()=>{
        techs.forEach(tech=>{
          if(dom.dataset.dom==tech.dataset.todom){
            tech.classList.remove('hidden')
          }else{
            tech.classList.add('hidden')
          }
        })
        _transit=transit(true,{name:dom.dataset._dom!,id:dom.dataset.dom!})
      })
    })
    back.addEventListener('click',()=>{
      _transit=transit(false)
    })

    return ()=>clearInterval(_transit)
  },[])

  return null
}