"use client"
import vertex from './shaders/exp.plan.vs'
import fragment from './shaders/exp.plan.fs'
import { useFrame } from '@react-three/fiber'

export default function Exps(){
  const time = {value:0}
  
  useFrame((state, delta) => {
    time.value += delta
  })
  
  return (
    <mesh position={[0,0,0]}>
      <planeGeometry args={[1,1]} />
      <rawShaderMaterial onBeforeCompile={(shader,render)=>{
        shader.uniforms.uTime=time
        shader.vertexShader = vertex
        shader.fragmentShader = fragment
      }} />
    </mesh>
  )
}