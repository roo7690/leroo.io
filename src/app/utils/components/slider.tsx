'use client'
import { useState } from 'react'
import {page as css} from '../../scss'
import { angle_left } from '@components/svg'

export function Slider({items}:{items:JSX.Element[]}){
  const [start,setStart]=useState(0)
  let _items=[]
  for(let i=0;i<3;i++){
    let j=start+i>=items.length?start+i-items.length:start+i
    _items.push(items[j])
  }

  return (
  <div className={css.testimonials}>
    <div onClick={()=>setStart(start===0?items.length-1:start-1)} 
      className='bento icon i0'>{angle_left}</div>
    <div>
      {_items.map(i=>i)}
    </div>
    <div onClick={()=>setStart(start===items.length-1?0:start+1)}
      className='bento icon i0'>{angle_left}</div>
  </div>
  )
}