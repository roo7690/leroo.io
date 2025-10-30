'use client'
import { MarchingCubes } from "three/examples/jsm/Addons.js"
import {MetaBalle} from "../utils/metaballes"
import { Color, MeshPhongMaterial, Plane, Ray, Vector3 } from "three"
import { useContext, useMemo } from "react"
import { canvasData } from "../canvas-provider"
import { useFrame, useThree } from "@react-three/fiber"

export default function Blob({rayon,masse,MetaBalles,position,scale,color}:{
    rayon:number,
    masse:number,
    MetaBalles:MetaBalle[],
    position?:[number,number,number],
    scale?:number|[number,number,number],
    color?:boolean
  }
){
  const data=useContext(canvasData)
  const {camera}=useThree()
  const Delta=useMemo(()=>(MetaBalles.map((m,i)=>({
    loi:new MarcheAleatoire<"2D">({ecart_type:100000,espérance:.7,marche:'2D'}),
    state:{x:0,y:0},
    delta:(time:number)=>{
      let {x,y}=Delta[i].state
      Delta[i].state=Delta[i].loi.getMarche(time)
      x=(Delta[i].state.x-x)*.7
      y=(Delta[i].state.y-y)
      x=Math.abs(x)>.007?0:x
      y=Math.abs(y)>.07?0:y
      return {x,y}
    }
  }))),[])

  //mouvement du blob grace au ray
  const move=useMemo(()=>{
    let [x,y,z]=position||[0,0,0]
    return {x,y,z,vx:0,vy:0}
  },[])

  const blob=useMemo(()=>{
    const ray= new Ray()
    ray.origin.setFromMatrixPosition(camera.matrixWorld)
    data.listener.mouse.subscribe((event)=>{
      const background=document.getElementById('background') as HTMLElement
      const ev=event as MouseEvent
      ray.direction.set(
        2*(ev.clientX-background.getBoundingClientRect().left)/background.offsetWidth-1,
        -2*(ev.clientY-background.getBoundingClientRect().top)/background.offsetHeight+1,
        0.5
      ).unproject(camera).sub(ray.origin).normalize()
      let pos=new Vector3()
      ray.intersectPlane(new Plane(new Vector3(0,0,1),move.z),pos)
      move.x=pos.x
      move.y=pos.y
      move.vx=Math.abs(ev.movementX)
      move.vy=Math.abs(ev.movementY)
      return "continue"
    })
  
    const blob_mtl=new MeshPhongMaterial({
      shininess:2,
      vertexColors:true
    })
    const blob=new MarchingCubes(70,blob_mtl,color,color,100000)
    blob.isolation=70

    return blob
  },[])

  let time=0 
  useFrame((state,delta)=>{
    time+=delta
    blob.position.set(move.x,move.y,move.z)
    blob.reset()
    blob.addBall(.5,.5,.5,rayon,7,color?new Color(data.theme.cs):undefined)
    MetaBalles.forEach((mb,i)=>{let _delta=Delta[i].delta(time)
      let _rayon=mb.getRayon()+_delta.x
      _rayon=_rayon>.063?.063:_rayon<.014?.014:_rayon
      mb.setRayon(_rayon)
      let p=Math.random()
      let _color=new Color().addColors(
        new Color(data.theme.cp2).multiplyScalar(p),
        new Color(data.theme.cs2).multiplyScalar(1-p)
      )
      mb.setColor(mb.getColor().add(_color.multiplyScalar(_delta.y)))
      mb.gravite(masse,delta*4,new Vector3().copy(blob.position),
        new Vector3(move.vx,move.vy,0),blob)
    })
    blob.update()
  })

  return (
  <primitive object={blob} 
    position={position||[0,0,0]}
    scale={scale||1}/>
  )
}