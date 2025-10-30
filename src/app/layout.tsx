import type { Metadata, Viewport } from 'next'
import {M_PLUS_Code_Latin, M_PLUS_Rounded_1c, Nunito, Ubuntu} from 'next/font/google'
import { cookies } from 'next/headers'
import Link from 'next/link'
import Script from 'next/script'
import './scss/global.scss'
import './scss/layout.scss'
import {UIUse,Nav,NavDrop,Lang,CanSearchTrigger,Refresher,Astres,Background} from './utils'
import { bell, close, search } from '@components/svg'
import {Notif} from '@function'

export const metadata:Metadata={
  title: process.env.APP_TITLE,
  description: process.env.APP_DESCRIPTION,
  icons:[{
    rel:'icon',
    type:'image/png',
    url:process.env.HOST+'/img/logo.png'
  }]
}
export const viewport:Viewport={
  width:'device-width',
  initialScale:1
}

const mpcl=M_PLUS_Code_Latin({
  variable:'--ffp',
  subsets:['latin'],
  weight:['400','700']
})
const mpr1c=M_PLUS_Rounded_1c({
  variable:'--ffs',
  subsets:['latin'],
  weight:['400','700']
})
const nunito=Nunito({
  variable:'--fft',
  subsets:['latin']
})
const ubuntu=Ubuntu({
  variable:'--ffq',
  subsets:['latin'],
  weight:['400','700']
})
const police=[
  mpcl.variable,mpr1c.variable,
  nunito.variable,ubuntu.variable
]

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}){
  const default_theme=(cookies().get('theme')?.value||'dark') as 'dark'|'light'
  const lang=cookies().get('lang')?.value||'en'

  return (
  <html lang={lang}>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <script async src={process.env.FIGMA_KID} crossOrigin="anonymous"/>
      <UIUse/>
      <Refresher/>
    </head>
    <body id='body' data-theme={default_theme} className={police.join(' ')}>
      <Background theme={default_theme} media_src={process.env.MEDIA}/>
      <div id='page'>
        <header id='header'>
          <div>
            <div id='hallo-for-logo'></div>
            <div id='logo'>
              <Link href={'/'}></Link>
            </div>
            <nav id='nav'>
              <ol>
                <Nav lang={lang}/>
              </ol>
            </nav>
            <div>
              <div id='notif' className='none'>
                {bell}<div id='notif-content'></div>{close}
                <Notif.Init/>
              </div>
              <div id='search' className='bento icon i0'>
                {search}<CanSearchTrigger/>
              </div>
              <Lang lang={lang}/>
              <NavDrop/>
              <div id='notif-recep'></div>
            </div>
          </div>
        </header>
        <main id='main'>{children}</main>
        <footer id='footer'>
          <div>
            <div>
              <span>{`© ${process.env.APP_NAME}:${process.env.APP_VERSION} - ${process.env.MAIL}`}</span>
            </div>
            <div><Astres/></div>
          </div>
        </footer>
      </div>
    </body>
  </html>
  )
}