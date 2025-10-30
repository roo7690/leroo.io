import './scss/md.scss'
import Markdown, {Components} from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {CSSProperties} from 'react'
import {Button} from '@components/button'
import { Media } from '@components/media'
import { copy } from '@components/svg'

export default function Md({Components,SpeComponents,children}:{
  Components:Partial<Components>,
  SpeComponents:any,
  children:string
}){
  const dsc=/[^a-zA-Z0-9]/g
  const components:Partial<Components>={
    p:'div',
    h1:(props:any)=>(<h1 id={props.children.replace(dsc,'')} className='section h1'>{props.children}</h1>),
    h2:(props:any)=>(<h2 id={props.children.replace(dsc,'')} className='section h2'>{props.children}</h2>),
    h3:(props:any)=>(<h3 id={props.children.replace(dsc,'')} className='title1'>{props.children}</h3>),
    a:(props:any)=><a style={{color:'var(--cs2)'}} {...props} target='_blank'>{props.children}</a>,
    code:(props:any)=>{
      let l=1
      const language=/language-(.*)/.exec(props.className||'')
      let children=props.children as string
      let lines={} as {[key:string]:CSSProperties}
      let txt='',descrip=''
      if(language){
        descrip=children.slice(0,children.indexOf('\n'))
        children=children.slice(children.indexOf('\n')+1)
        children.split('\n').forEach((line,i)=>{
          lines[i+1]={}
          if(line.trim().startsWith('➕')){
            lines[i+1].backgroundColor='darkgreen'
            let plus=line.indexOf('➕')
            line=line.slice(0,plus===0?0:plus-1)+line.slice(plus+1).trimEnd()+' '
          }        
          if(line.trim().startsWith('➖')){
            lines[i+1].backgroundColor='darkred'
            let minus=line.indexOf('➖')
            line=line.slice(0,minus===0?0:minus-1)+line.slice(minus+1).trimEnd()+' '
          }
          txt+=(i===0?'':'\n')+line
        })
      }
      return (
      <>
      {!language?
        <code className='z-index'>{props.children}</code>:
        <div className='bento' style={{display:'block',padding:'0'}}>
          <div style={{
            display:'flex',
            alignItems:'center',justifyContent:"space-between",
            borderBottom:'var(--bord)',
            color:'var(--ct)',
            paddingBlock:'var(--unit)',
            paddingInline:'calc(2*var(--unit))'}}>
            {descrip}<div className='bento icon i0' data-copy>{copy}</div>
          </div>
          <Prism language={language[1]} wrapLongLines wrapLines style={vscDarkPlus} 
            customStyle={{
              backgroundColor:'transparent',
              paddingBlock:"calc(2*var(--unit))",
              paddingLeft:'calc(4*var(--unit))',
              paddingRight:'calc(2*var(--unit))'
            }}
            lineProps={(line)=>{
              let style=lines[l];l++
              return {style}
            }}>
            {txt}
          </Prism>
        </div>
      }</>)
    },
    button:(props:any)=>(
      <Button alter={typeof props.alter=='string'?true:false} link={props.link}>
        {props.children}
      </Button>
    ),
    img:(props:any)=>{
      let style:any={}
      for(let key in props){
        if(key.startsWith('w-')){style.width=`${key.split('-')[1]}px`}
        if(key.startsWith('h-')){style.height=`${key.split('-')[1]}px`}
      }

      return <img width={style.width} height={style.height} 
        src={process.env.MEDIA+props.src} style={props.style} alt={props.alt}/>
    },
    video:(props:any)=>{
      let style:any={}
      for(let key in props){
        if(key.startsWith('w-')){style.width=`${key.split('-')[1]}px`}
        if(key.startsWith('h-')){style.height=`${key.split('-')[1]}px`}
      }

      return (
      <video width={style.width} height={style.height} style={props.style}
        controls title={props.title} muted preload='auto'>
        <source src={process.env.MEDIA+props.src} />
        <p>{props.alt}</p>
      </video>
      )
    }
  }

  const Specomponents={
    media:(props:any)=>{
      let width='200px',
        height=width
      for(let key in props){
        if(key.startsWith('w-')){
          width=`calc(${key.split('-')[1]}*var(--unit))`
        }
        if(key.startsWith('h-')){
          height=`calc(${key.split('-')[1]}*var(--unit))`
        }
      }
      let src=''
      if(props.img){
        src=process.env.MEDIA+props.img
      }else if(props.vid){
        src=props.vid.split(' ').map((v:string)=>process.env.MEDIA+v)
      }
      return <Media<'image'|'video'> {...props} 
        src={src} size={[width,height]} />
    }
  }

  return (
  <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}
    components={{...components,...Specomponents,
      ...Components,...SpeComponents}}>
    {children}
  </Markdown>
  )
}