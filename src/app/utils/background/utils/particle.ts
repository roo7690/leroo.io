import { mouse, pixel } from './type'

export default class particle{
  private mouse:mouse
  private nature:{draw:(pixel:pixel)=>void}
  private coord:{x:number,y:number}
  private origin:{x:number,y:number}
  private color:string
  private poussée=Math.random()*.49+.7
  private vitesse=Math.random()*.14+.035
  private canvas:HTMLCanvasElement


  constructor(mouse:mouse,canvas:HTMLCanvasElement,{
    pixel:{x,y,color},nature}:{
      pixel:pixel,nature:{draw:(pixel:pixel)=>void}
  }){
    this.mouse=mouse
    this.coord={x,y}
    this.origin={x,y}
    this.color=color
    this.nature=nature
    this.canvas=canvas
  }

  public setColor(color:string){
    this.color=color
  }

  private init(){
    this.nature.draw({x:this.origin.x,y:this.origin.y,color:this.color})
  }

  public move(){
    let distance=Math.pow(
      Math.pow((this.coord.x-this.mouse.x)*this.canvas.offsetWidth/this.canvas.width,2)
      +Math.pow((this.coord.y-this.mouse.y)*this.canvas.offsetHeight/this.canvas.height,2),.5)
    

    if(distance<this.mouse.ray){
      let force=this.mouse.ray/distance,
        angle=Math.atan2(this.coord.y-this.mouse.y,this.coord.x-this.mouse.x)
      this.coord.x+=this.mouse.vx*force*Math.cos(angle)*this.poussée
      this.coord.y+=this.mouse.vy*force*Math.sin(angle)*this.poussée
    }
    this.coord.x+=(this.origin.x-this.coord.x)*this.vitesse
    this.coord.y+=(this.origin.y-this.coord.y)*this.vitesse
    
    this.nature.draw({x:this.coord.x,y:this.coord.y,color:this.color})
  }

  static getPixels(render:CanvasRenderingContext2D,{objs,gap,x,y,width,height}:{
    objs?:{draw:()=>void}[],
    gap:number,
    x:number,
    y:number,
    width:number,
    height:number
  }):pixel[]{
    if(objs){
      objs.forEach(obj=>obj.draw())
    }
    const pixels=render.getImageData(x,y,width,height).data
    let particles=[]
    for(let y=0;y<height;y+=gap){
      for(let x=0;x<width;x+=gap){
        let index=(y*width+x)*4
        let alpha=pixels[index+3]
        if(alpha>0){
          particles.push({x,y,color:`rgb(${pixels[index]},${pixels[index+1]},${pixels[index+2]})`})
        }
      }
    }
    return particles
  }
}