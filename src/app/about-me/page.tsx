import {Media} from '@components/media'
import css from './page.module.scss'
import { bolt, bsky, github, layer_group, linkedin, x_twitter } from '@components/svg'
import { Txt, Links } from '@data-static'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function Page(){
  const lang=cookies().get('lang')?.value || 'en'
  const txt=Txt.get('about-me',lang)

  return (
  <div className={css.page}>
    <div className={css.hey}>  
      <div className='bento b1'>
        <div>
          <div>
            <img src={process.env.MEDIA+'/img/pp.jpg'} alt='photo de profil' />
            <div>
              <h1>{txt.hey.title.t1}</h1>
              <p>{txt.hey.title.t2}</p>
            </div>
          </div>
          <div>
					  <Link href={Links.linkedin} target='_blank'>{linkedin}</Link>
					  <Link href={Links.github} target='_blank'>{github}</Link>
					  <Link href={Links.bsky} target='_blank'>{bsky}</Link>
					  <Link href={Links.twitter} target='_blank'>{x_twitter}</Link>
		  		</div>
        </div>
        <h1 className='h1'>{txt.hey.title2}</h1>
        <p>{txt.hey.p}</p>
      </div>
    </div>
    <div className={css.hey_illus}>
      <img src={process.env.MEDIA+'img/logo.png'} alt='profil'/>
    </div>
    <div className={css.genie_info}>
      <Media<'video'> src={[process.env.MEDIA+'/video/génie_info.mp4']}
        poster={<div className={css.engineering_poster+' h1'}>{txt.engineering.title}</div>} 
        size={["100%","100%"]} link={Links.engineering} alt={txt.engineering.err_vid}/>
    </div>
    <div className={css.engineering_why}>
      <div className='bento b1'>
        <h1 className='h1'>{txt.engineering.q}</h1>
        <p>{txt.engineering.r0}</p>
      </div>
    </div>
    <div className={css.engineering_res}>
      <div className='bento b1'>
        <div className='bento icon i2'>{bolt}</div>
        <div>{txt.engineering.res.r1}</div>
      </div>
    </div>
    <div className={css.engineering_res+' '+css.engineering_res2}>
      <div className='bento b1'>
        <div className='bento icon i2'>
          {layer_group}
        </div>
        <div>{txt.engineering.res.r2}</div>
      </div>
    </div>
    <div className={css.sciences}>
      <div className='bento b1'>
        <h1 className='h1'>{txt.sciences.title}</h1>
        <p>{txt.sciences.p}</p>
      </div>
    </div>
    <div  className={css.sciences_illus}>
      <Media<'image'> src={process.env.MEDIA+'/img/quasar.jpg'} size={["100%","100%"]}
        alt={txt.sciences.err_img} link={Links.kurzgesagt}/>
    </div>
    <div className={css._sciences}>
      <div className='bento b1'>
        <h2 className='h2'>{txt.sciences.q}</h2>
        <p>{txt.sciences.r}</p>
      </div>
    </div>
    <div className={css.other}>
      <Media<'video'> src={[process.env.MEDIA+'/video/warzone.mp4']} 
        size={['100%','100%']} link={Links.warzone}
        poster={<div className={css.warzone_illus+' h1'}>{txt.loisirs.title}</div>} 
        alt={txt.loisirs.err_vid} />
    </div>
    <div className={css.manga}>
      <div className='bento b1'>
        <h2 className='h2'>{txt.manga.q}</h2>
        <p>{txt.manga.r}</p>
      </div>
    </div>
    <div className={css.warzone}>
      <div className='bento b1'>
        <h2 className='h2'>{txt.warzone.q}</h2>
        <p>{txt.warzone.r}</p>
        <p>{txt.warzone.p}</p>
      </div>
    </div>
    <div className={css.star_citizen}>
      <div className='bento b1'>
        <h2 className='h2'>{txt.star_citizen.q}</h2>
        <p>{txt.star_citizen.r}</p>
        <p>{txt.star_citizen.p}</p>
      </div>
    </div>
  </div>
  )
}