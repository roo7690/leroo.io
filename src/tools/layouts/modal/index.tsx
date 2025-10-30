'use client'
import css from './modal.module.scss'
import { createRoot } from 'react-dom/client'

export function ModalLayout({children,position}:
  {children:JSX.Element,position:{top:string,left:string,translate:string}}
){
  const _layout=document.createElement('div')
  _layout.id='modal-layout'
  _layout.className=css.modal_layout
  _layout.style.setProperty('--modal-top',position.top)
  _layout.style.setProperty('--modal-left',position.left)
  _layout.style.setProperty('--modal-translate',position.translate)
  new MutationObserver((mut)=>{
    mut.forEach(m=>{
      if(m.type==='childList'){
        _layout.querySelectorAll('[data-modal-close]')
        .forEach(cl=>cl.addEventListener('click',
          e=>_layout.remove()
        ))
      }
    })
  }).observe(_layout,{childList:true})

  document.getElementById('nav')!.after(_layout)

  createRoot(_layout).render(children)
}

export {ConIns as ModalConIns} from './connexion_inscription/con_ins'
export {EditUser as ModalEditUser} from './connexion_inscription/edit_user'