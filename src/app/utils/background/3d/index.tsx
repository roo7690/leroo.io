"use client"
import { Canvas } from "@react-three/fiber"
import Blob from "./blob"
import {getMetaBalles} from "../utils/metaballes"
import { useContext, useMemo } from "react"
import { canvasData } from "../canvas-provider"
import Exps from "./exps"

export default function Background3D(){
  const theme=useContext(canvasData).theme

  const blob=useMemo(()=>({
    rayon:.14,
    masse:4,
    MetaBalles:getMetaBalles(7,[0,0,0],theme),
    color:true
  }),[])

  return (
  <Canvas>
    <ambientLight intensity={.7}/>
    <Blob {...blob} />
  </Canvas>
  )
}