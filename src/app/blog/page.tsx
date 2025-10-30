import { cookies } from 'next/headers'
import css from './page.module.scss'
import {Button} from '@components/button'
import {Txt} from '@data-static'
import { Blog } from '@db'
import { search} from '@components/svg'
import { Blogs } from './utils'
import { build_search_blog } from '../utils'

export default async function Page(){
  const lang=cookies().get('lang')?.value || 'en'
  const txt=Txt.get('blog',lang)
  const qtite=parseInt(process.env.QTITE_BLOGS)
  const articles=await Blog.gets(lang,[1,qtite])

  return (
  <div className={css.page}>
    <section>
      <h1 className='h0 text-linear-color'>{txt.title.h1}</h1>
      <p>{txt.title.p}</p>
      <Button action={build_search_blog} alter>{txt.title.btn}{search}</Button>
    </section>
    <section>
      <h2 className='h1'>{txt.blogs.h2}</h2>
      <Blogs txt={txt} lang={lang} articles={articles} />
    </section>
  </div>
  )
}