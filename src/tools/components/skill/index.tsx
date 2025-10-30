import type { Skill as S } from '@db'
import css from './skill.module.scss'
import { Div3 } from '@components/div3'

export const Skill={
  domaine:(props:S.Domaine)=>{
    const style:any={
      '--fil':props.fill,
      backgroundColor:'color-mix(in srgb, var(--fil) 28%, transparent 72%)'
    }

    return (
    <Div3 className={css.domaine} dataset={{dom:props.id_domaine+'',_dom:props.domaine}}>
      <div>
        <div>
          <div className='bento icon i2' style={style}>
            <i className={props.svg} ></i>
          </div>
          {props.domaine}
        </div>
        <div className={css.exp}>
          <div style={style}>{props.exp}</div>
        </div>
      </div>
      <div style={{background:`radial-gradient(circle at 20% -20%, var(--cb) 54%,${props.fill})`}}></div>
    </Div3>
    )
  },
  technology:(props:S.Technology)=>{
    const style:any={
      '--fil':props.fill,
      backgroundColor:'color-mix(in srgb, var(--fil) 28%, transparent 72%)'
    }
    return (
    <Div3 className={css.technology} dataset={{todom:props.id_domaine+''}}>
      <div style={{color:style['--fil']}}>{`# ${props.technology}`}</div>
      <img src={props.img} alt={props.technology}/>
      <div className={css.exp}>
        <div style={style}>{props.exp}</div>
      </div>
    </Div3>
    )
  }
}