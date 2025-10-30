import type { Job as J } from '@db'
import React from 'react'
import css from './job.module.scss'
import {Media} from '@components/media'
import {Items} from '@components/items'
import { location } from '@components/svg'

export function Job(props:J.Job){

  return (
    <div data-secteur={props.secteur} className={css.job+' bento b1'}>
      <div className={css.header}>
        <div className='h1'>{props.title}</div>
        <div className={css.secteur}>{`# ${props.secteur}`}</div>
      </div>
      <div className={css.body}>
        <div>
          <div>
            <div className={css.entreprise}>{props.entreprise}</div>
            <div className={css.date}>
              <div>{props.date.start}</div>
              <div style={{height:'2px',width:'14px',backgroundColor:'var(--cs)'}}></div>
              <div>{props.date.end}</div>
            </div>
          </div>
          <Items list={props.description} />
        </div>
        <div>
          <Media<'video'|'image'> {...props.media} />
        </div>
      </div>
      <div className={css.footer}>
        <div>{location}</div>
        <div>{props.location}</div>
      </div>
    </div>
  )
}