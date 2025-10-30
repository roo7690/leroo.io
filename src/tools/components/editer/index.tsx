'use client'
import css from './editer.module.scss'
import { Button , ButtonProps} from "@components/button"
import { ReactNode,useState } from 'react'
import { MdComment } from '@layouts/md'
import { Txt } from '@data-static'

export function Editer(props:{
  id:string
  lang:string
  edit:{
    children:ReactNode
    action:ButtonProps['action']
    placeholder:string
  }
  cancel?:{
    children:ReactNode
    action:ButtonProps['action']
  }
  content?:string
}){
  const txt=Txt.get('components',props.lang).editer
  const [mode,setMode]=useState('edit' as 'edit'|'view')
  const [content,setContent]=useState(props.content)

  return (
  <div className={"input "+css.editer}>
    <textarea className={css.textarea} id={props.id} placeholder={props.edit.placeholder}
      style={mode==='view'?{display:'none'}:undefined} onChange={(ev)=>{
        setContent(ev.target.value)
      }}>
      {content}
    </textarea>
    {mode==='view'&&
      <div className={'bento '+css.view}>
        <MdComment>{content!}</MdComment>
      </div>
    }
    <div className={css.btns}>
      <div>
        {props.cancel?
          <Button alter action={props.cancel.action}>
            {props.cancel.children}
          </Button>:
          (content!==undefined&&content!=='')&&
          <Button noAnimation dataset={{setmode:''}} action={()=>setMode(mode==='edit'?'view':'edit')}>
            {mode==='edit'?txt.view:txt.edit}
          </Button>
        }
        <Button action={props.edit.action}> 
          {props.edit.children}
        </Button>
      </div>
      {props.cancel&&(content!==undefined&&content!=='')&&
        <Button noAnimation dataset={{setmode:''}} action={()=>setMode(mode==='edit'?'view':'edit')}>
          {mode==='edit'?txt.view:txt.edit}
        </Button>
      }
    </div>
  </div>
  )
}