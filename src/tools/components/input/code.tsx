'use client'
import { ChangeEvent, DragEvent } from 'react'
import css from './input.module.scss'

export class CodeInput {
  private code:string
  private length:number

  constructor(length:number){
    this.code=''
    for(let i=0;i<length;i++){
      this.code+='-'
    }
    this.length=length
  }

  public getCode(){
    if(!/^\d+$/.test(this.code)){
      return null
    }
    return parseInt(this.code)
  }

  public render({id,reset}:{id:string,reset?:boolean}){
    if(reset){
      this.code=''
      for(let i=0;i<this.length;i++){
        this.code+='-'
      }
    }

    const force_caret=new Array(this.length)
    const is=[]
    for(let i=0;i<this.length;i++){
      is.push(i)
    }

    const setvalue=(val:string,i:number,ev:DragEvent|ChangeEvent,drop:boolean=false)=>{
      if(/^\d+$/.test(val)){
        let ic=document.getElementById(id) as HTMLDivElement
        if(!drop&&val.length>1&&this.code[i]!=='-'){
          val=val.slice(1)
        }
        let code=this.code.split('')
        let current_input=i
        for(let j=0;j<(this.length-i>val.length?val.length:this.length-i);j++){
          (ic.children[j+i] as HTMLInputElement).value=val[j]
          code[j+i]=val[j]
          current_input=j+i+1
        }
        this.code=code.join('');
        (ic.children[current_input] as HTMLInputElement|null)?.focus()
      }else{
        (ev.currentTarget as HTMLInputElement).value=this.code[i]==='-'?'':this.code[i]
      }
    }

    return <div id={id} className={css.ic+' input'} >
      {is.map(i=>(
        <input key={i} onBlur={()=>{clearInterval(force_caret[i])}}
          onFocus={(ev)=>force_caret[i]=setInterval(()=>ev.target.setSelectionRange(1,1),2)}
          onDrop={(ev)=>{
            ev.preventDefault()
            setvalue(ev.dataTransfer.getData('text/plain'),i,ev,true)
          }}
          onChange={(ev)=>{
            setvalue(ev.target.value,i,ev)
          }}
          onKeyDown={(ev)=>{
            let ic=document.getElementById(id) as HTMLDivElement
            if(ev.key==='Backspace'){
              ev.currentTarget.value=''
              let code=this.code.split('')
              code[i]='-'
              this.code=code.join('')
              if(i>0){
                (ic.children[i-1] as HTMLInputElement).focus()
              }
            }
            if(ev.key==='ArrowRight'){
              (ic.children[i+1] as HTMLInputElement|null)?.focus()
            }
            if(ev.key==='ArrowLeft'){
              (ic.children[i-1] as HTMLInputElement|null)?.focus()
            }
          }}
        />
      ))}
    </div>
  }
}