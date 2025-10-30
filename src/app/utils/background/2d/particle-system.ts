"use client"
import { useEffect, useContext, useMemo } from "react"
import { canvasData } from "../canvas-provider"
import { mouse, pixel, context } from "../utils/type"
import particle from "../utils/particle"
import { usePathname } from "next/navigation"

export default function ParticleSystem(){
  const page=usePathname()
  const data=useContext(canvasData)
  const theme=useMemo(()=>(data.theme),[data.theme.cp])
  const mouse:mouse=useMemo(()=>({
    x:0,vx:0,
    y:0,vy:0,
    ray:105
  }),[])

  useEffect(()=>{
    const canvas=document.getElementById('Canvas2d') as HTMLCanvasElement
    const render=canvas.getContext('2d',{willReadFrequently:true}) as CanvasRenderingContext2D
    render.reset()

    if(page==='/about-me'&&data.listener.mouse.is){
      let listen_mouse=data.listener.mouse.subscribe((event)=>{
        const ev=event as MouseEvent
        const background=document.getElementById('background')!
        mouse.x=((ev.clientX-background.getBoundingClientRect().left)/background.offsetWidth)*700
        mouse.y=((ev.clientY-background.getBoundingClientRect().top)/background.offsetHeight)*700
        mouse.vx=Math.abs(ev.movementX)
        mouse.vy=Math.abs(ev.movementY)
        return "continue"
      })

      canvas.width=700
      canvas.height=700
  
      let animate_id:number
      const img=new Image(canvas.width,canvas.height)
      const dataset={img}
  
      img.onload=()=>{
        const particles=initParticleSystem({render,theme,mouse,dataset,canvas})
        animate_id=requestAnimationFrame(animate)
  
        function animate(){
          render.reset()
          particles.forEach(pa=>pa.move())
          animate_id=requestAnimationFrame(animate)
        } 
      }
      img.crossOrigin='anonymous'
      img.src=data.media_src+'img/about-'+data.theme.name+'.png'
  
      return ()=>{
        cancelAnimationFrame(animate_id)
        data.listener.mouse.unsubscribe(listen_mouse)
      }
    }
  })

  return null
}

function initParticleSystem({render,mouse,theme,dataset,canvas}:context){
  render.drawImage(dataset.img,0,0,dataset.img.width,dataset.img.height)
  const pixels=particle.getPixels(render,{
    gap:10,
    x:0,y:0,
    width:700,
    height:700
  })
  const background=document.getElementById('background')!
  const particles:particle[]=[]
  pixels.forEach(pixel=>{
    const nature={
      rad:2+Math.random()*5,
      draw:(pixel:pixel)=>{
        let radX=(nature.rad/background.offsetWidth)*700,
        radY=(nature.rad/background.offsetHeight)*700
        render.fillStyle=pixel.color
        render.beginPath()
        render.ellipse(pixel.x-nature.rad*.5,pixel.y-nature.rad*.5,radX,radY,0,0,2*Math.PI)
        render.fill()
      }
    }
    particles.push(new particle(mouse,canvas,{pixel,nature}))
  })

  return particles
}