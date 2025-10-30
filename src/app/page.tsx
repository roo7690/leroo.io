import * as css from './scss'
import { cookies } from 'next/headers'
import {Links,Txt} from '@data-static'
import Link from 'next/link'
import { Project as P, Skill as S, Job as J, query_github, Testimonial as T } from '@db'
import { Font, Project } from '@components/project'
import { Skill } from '@components/skill'
import { Job } from '@components/job'
import { Testimonial } from '@components/testimonial'
import {Button} from '@components/button'
import { Div3 } from '@components/div3'
import { linkedin,x_twitter,github,angle_left,
	mail,link_blank, user_astronaute, send, 
  bsky} from '@components/svg'
import {createActionServer} from '@function'
import { Dynamic,Slider,Emoji,SendMail,Job as JobScript } from './utils'

export default async function Page(){
  const lang=cookies().get('lang')?.value || 'en'
  const txt=Txt.get('home',lang)
  const projects= await P.gets(lang)
  const skills= await S.gets(lang)
  const jobs= await J.gets(lang)
  const testimonials=await T.gets()

  const fonts=new Set<string>()
  projects.forEach(p=>{
    p.title.font&&fonts.add(p.title.font.link)
  })
  const secteurs=new Set<string>()
  jobs.forEach(job=>{
    secteurs.add(job.secteur)
  })

  let data_github=(await (await fetch('https://api.github.com/graphql',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'Authorization':'Bearer '+process.env.GITHUB_TOKEN
    },
    body:JSON.stringify({query:query_github})
  }).catch(err=>undefined))?.json().catch(err=>undefined))?.data?.user
  if(data_github)data_github.goodMerged=data_github?data_github.pullRequests.totalCount>parseInt(process.env.MIN_PULLREQUEST):false
  let data_chess=(await (await fetch('https://api.chess.com/pub/player/roo7690/stats').catch(err=>undefined))?.
    json().catch(err=>undefined))?.chess_rapid?.last
  if(data_chess)data_chess.goodElo=data_chess?data_chess.rating>parseInt(process.env.MIN_ELO):false

  const msg_file=await fetch(`${process.env.BLOB}/msg.json`,{
    method:'GET',
    mode:'cors',
    headers:{
      'Content-Type':'application/octect-stream',
      'Access-Key':`${process.env.BLOB_KEY}`
    }
  }).catch(err=>undefined)
  let msg=msg_file?JSON.parse(await msg_file.text()):Txt.news_msg_error
  if(msg.erreur)msg=Txt.news_msg_error

  return (
  <div className={css.page.page}>
    {[...fonts].map((f,i)=>(
      <Font key={i} href={f} />
    ))}
    <section className={css.page.title}>
			<h1>{process.env.WELCOME}<Emoji/></h1>
			<h1 className='h0 text-linear-color'>{txt.title.h1}</h1>
			<p>{txt.title.p}</p>
			<div className={css.page.btns}>
				<Button link='/#contact'>{txt.title.btn.btn1}{mail}</Button>
				<Button link='/about-me' alter>{txt.title.btn.btn2}{user_astronaute}</Button>
			</div>
			<div className={css.page.follow}>
				<div>
					<Link href={Links.linkedin} target='_blank'>{linkedin}</Link>
					<Link href={Links.github} target='_blank'>{github}</Link>
					<Link href={Links.bsky} target='_blank'>{bsky}</Link>
					<Link href={Links.twitter} target='_blank'>{x_twitter}</Link>
				</div>
			</div>
			<Div3 options={{reverse:true,scale:1.007,speed:2100,max:2.8}}>
				<img src={process.env.MEDIA+'img/workspaces.png'} alt='workspaces' />
			</Div3>
		</section>
    <section className={css.projects.section}>
      <h2 className='h1 text-linear-color'>{txt.projects.h2}</h2>
      <p>{txt.projects.p}</p>
      <div className={css.projects.projects}>
        {projects.length===0?
          <div className={css.projects.error+' error'}>{txt.projects.error}</div>
          :
          projects.map((p,i)=>(
            <Project key={i} {...p} lang={lang}/>
          ))
        }
      </div>
    </section>
    <section className={css.page.on_platform}>
      <ul>
        <li>
          <span>{data_github?data_github.contributionsCollection.contributionCalendar.totalContributions:'#'}</span>
          <span>{txt.on_platform.contribution_github}</span>
        </li>
        <li>
          <span style={!data_chess?.goodElo?{color:'var(--cerror)'}:undefined}>{data_chess?.rating||'#'}</span>
          <span>{txt.on_platform.elo_chess}</span>
        </li>
        <li>
          <span style={!data_github?.goodMerged?{color:'var(--cerror)'}:undefined}>
            {data_github?data_github.pullRequests.totalCount:"#"}
          </span>
          <span>{txt.on_platform.pullRequest_github}</span>
        </li>
      </ul>
    </section>
    <section className={css.skills.section}>
      <h2 className='h1 text-linear-color'>{txt.skills.h2}</h2>
      <p>{txt.skills.p}</p>
      <div className={css.skills.container_back}>
        <div className={css.skills.back+' bento icon i0 hidden'}>
          {angle_left}
          <div></div>
        </div>
      </div>
      <div className={css.skills.container_skill}>
        <div className={`${css.skills.skill} ${css.skills.parent_dom}`}>
          <div className={css.skills.doms}>
            {skills.dom.length==0?
              <div className='error'>{txt.skills.error}</div>
              :
              skills.dom.map((dom,i)=>(
                <Skill.domaine key={i} {...dom}/>
              ))
            }
          </div>
        </div>
        <div className={`${css.skills.skill} ${css.skills.parent_tech}`}>
          <div className={css.skills.techs}>
            {skills.tech.length==0?
              <div className='error'>{txt.skills.error}</div>
              :
              skills.tech.map((comp,i)=>(
                <Skill.technology key={i} {...comp}/>
              ))
            }
          </div>
        </div>
      </div>
      <Dynamic/>
    </section>
    <section className={css.page.section_testimonials}>
      <h2 className='h1 text-linear-color'>{txt.testimonials.h2}</h2>
      {testimonials.length===0?
        <div className='error'>{txt.testimonials.error}</div>
        :
        <Slider items={testimonials.map((t,i)=><Testimonial key={i} {...t} lang={lang} />)} />
      }
    </section>
    <section className={'bento b1 '+css.page.news} style={{
      backgroundImage:`url(${msg.img})`
    }}>
      <h2 className='h1'>{txt.news_title}</h2>
      <p>{msg[lang].msg}</p>
      {msg.link&&<Button link={msg.link} target='_blank'>{msg[lang].btn}{link_blank}</Button>}
    </section>
    <section className={css.jobs.section}>
      <h2 className='h1 text-linear-color'>{txt.jobs.title.h2}</h2>
      <p>{txt.jobs.title.p}</p>
      <div>
        <div className='bento b1'>
          <div id='secteurs' style={{minHeight:'200px'}}>
            <div id='all-secteurs' className={css.jobs.secteur}>
              <div>{txt.jobs.all}</div>
              <div></div>
            </div>
            {Array.from(secteurs).map((secteur,i)=>(
              <div key={i} className={css.jobs.secteur}>
                <div>{secteur}</div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
        <div id='jobs'>
          {(jobs.length==0)?
            <div className='error'>{txt.jobs.error}</div>
            :
            jobs.map((job,i)=><Job key={i} {...job} />
          )}
        </div>
      </div>
      <JobScript.Select/>
    </section>
    <section id='contact' className={css.page.section_contact}>
    	<div className={`${css.page.contact} bento b1 input`}>
    	  <h1 className='h1'>{txt.contact.title}</h1>
    	  <div>
    	    <label>{txt.contact.name.title}</label>
    	    <input id='ct_name' type='text' placeholder={txt.contact.name.placeholder} />
    	  </div>
    	  <div>
    	    <label>{txt.contact.email.title}</label>
    	    <input id='ct_email' type='email' placeholder={txt.contact.email.placeholder} />
    	  </div>
    	  <div>
    	    <label>{txt.contact.object.title}</label>
    	    <input id='ct_object' type='text' placeholder={txt.contact.object.placeholder} />
    	  </div>
    	  <div>
    	    <label>{txt.contact.message.title}</label>
    	    <textarea id='ct_message' placeholder={txt.contact.message.placeholder} />
    	  </div>
    	  <div>
    	    <Button action={createActionServer(SendMail,txt.contact.send_mail)}>
    	      {txt.contact.submit}{send}
    	    </Button>
    	  </div>
    	</div>
  	</section>
  </div>
  )
}