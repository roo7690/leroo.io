import { theme } from '../canvas-provider'

export interface context{
  render:CanvasRenderingContext2D,
  theme:theme,
  mouse:mouse,
  dataset:any,
  canvas:HTMLCanvasElement
}

export interface mouse{
  x:number,y:number,
  vx:number,vy:number,
  ray:number
}
  
export interface pixel{
  x:number,
  y:number,
  color:string
}

export interface particle{
  setColor:(color:string)=>void,
  move:()=>void
}