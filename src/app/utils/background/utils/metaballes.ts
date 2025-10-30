import { Color, Vector3 } from "three"
import { MarchingCubes } from "three/examples/jsm/Addons.js"
import type {theme} from '../canvas-provider'

export class MetaBalle{
  private rayon:number
  private pos:Vector3;private old_pos:Vector3
  private color:Color
  private ecart:number
  private masse:number
  private axe:Vector3
  private orbite:number
  private v0:number
  private sens_rotation:1|-1

  constructor({rayon,position:[x,y,z],masse,axe,center,color,sens_rotation}:{
    rayon:number,
    position:[x:number,y:number,z:number],
    masse:number,
    axe?:Vector3,
    center:[number,number,number],
    color:Color
    sens_rotation:1|-1
  }){
    [x,y,z].forEach(p=>{
      if(p>.5||p<-.5){
        console.error(Error('les axes sont compris entre -.5 et .5'))
      }
    })
    this.pos=new Vector3(x,y,z)
    this.rayon=rayon
    this.ecart=0
    this.masse=masse
    this.axe=axe||new Vector3().random()
    this.orbite=this.pos.length()
    this.old_pos=new Vector3(center[0],center[1],center[2])
    this.color=color
    this.v0=0
    this.sens_rotation=sens_rotation
  }

  public gravite(masse:number,delta:number,center:Vector3,
      force:Vector3,mc:MarchingCubes
    ){
    let move=center.clone().add(this.old_pos.multiplyScalar(-1))
      .multiplyScalar(-delta*.014*force.length()/this.masse),
      gravity=masse*this.masse*this.pos.length()*.02,
      sens=move.dot(this.pos)>0?1:-1
    this.old_pos.copy(center)

    if(move.length()!==0){
      this.ecart+=sens*move.length()*.1
    }else{
      this.ecart-=gravity*delta*.1
    }
    if(this.ecart<this.orbite)this.ecart=this.orbite;
    if(this.ecart>.4)this.ecart=.4;

    this.v0=((this.sens_rotation*Math.PI)/this.ecart)*(.2/70)
    this.pos.add(move.multiplyScalar(masse*2/Math.pow(this.ecart,3)))
    this.pos.applyAxisAngle(this.axe,this.v0)
    this.pos.normalize().multiplyScalar(this.ecart)

    mc.addBall(this.pos.x+.5,this.pos.y+.5,this.pos.z+.5,this.rayon,7,this.color)
  }

  public getPosition(){
    return this.pos
  }
  public setPosition([x,y,z]:[number,number,number]){
    this.pos=new Vector3(x,y,z)
  }

  public getRayon(){
    return this.rayon
  }
  public setRayon(rayon:number){
    this.rayon=rayon
  }

  public getColor(){
    return this.color
  }
  public setColor(color:Color){
    this.color=color
  }
}

export function getMetaBalles(
  n:number,center:[number,number,number],theme?:theme
):MetaBalle[]{
let m:MetaBalle[]=[],cp,cs
if(theme){
  cp=new Color(theme.cp2)
  cs=new Color(theme.cs2)
}else{
  cp=new Color(0xff)
  cs=new Color(0x00)
}


for(let i=0;i<n;i++){
  let p=Math.random(),
    _cp=cp.clone().multiplyScalar(p),
    _cs=cs.clone().multiplyScalar(1-p)
  
  m.push(new MetaBalle({
    rayon:.014+Math.random()*.049,
    masse:.7+Math.random()*2.8,
    center,
    position: [
      Math.random()*.007-.0035,
      Math.random()*.007-.0035,
      Math.random()*.007-.0035
    ],
    axe:new Vector3().random(),
    color:new Color().addColors(_cp,_cs),
    sens_rotation:Math.random()>.5?1:-1
  }))
}

return m
}