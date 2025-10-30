import css from './testimonial.module.scss'
import { Testimonial as T } from '@db'
import { Gravatar } from '@components/gravatar'
import { quote_left } from '@components/svg'

interface Props extends T.Testimonial{
  lang:string
}

export function Testimonial(props:Props){
  return(
  <div className={css.testimonial}>
    {quote_left}
    <p>{props.say}</p>
    <div className={css.footer}>
      <Gravatar user={{img:props.img,username:props.of,url_data:props.gravatar_data}} lang={props.lang} card/>
      <div>
        <h3>{props.of}</h3>
        <span>{props.profession}</span>
      </div>
    </div>
  </div>
  )
}