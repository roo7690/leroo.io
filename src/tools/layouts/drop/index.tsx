'use client'
import React, { useRef } from "react"

export function Drop({dropbutton,dropcontent}:{
  dropbutton:{value:React.ReactNode,className?:string}
  dropcontent:{value:React.ReactNode,className?:string,style?:React.CSSProperties}
}){
  const dc= useRef<HTMLDivElement>(null)

  return (<>
    <div tabIndex={0} className={dropbutton.className}
      onFocus={()=>dc.current?.classList.remove('hidden')}
      onBlur={()=>dc.current?.classList.add('hidden')}>
      {dropbutton.value}
    </div>
    <div ref={dc} className={"hidden "+dropcontent.className}
      style={{position:'absolute',zIndex:2,...dropcontent.style}}>
      {dropcontent.value}
    </div>
  </>)
}