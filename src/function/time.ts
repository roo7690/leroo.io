import {Txt} from "@data-static"

type syntax=keyof Txt.Text['layouts']['date']['time']['syntax']

const _date=(time:number|null,unit:string,
  txt:Txt.Text['layouts']['date']['time'],syntax:syntax)=>{
  const props=txt.syntax[syntax].split(' ')
  let date=''
  for(const prop of props){
    if(prop==='{time}'){
      date+=time?time+' ':''
    }else if(prop==='{unit}'){
      date+=unit+' '
    }else{
      date+=((txt as any)[prop]||'')+' '
    }
  }
  return date
}
/**
 * retourne le temps ecoulé depuis une date donnée
 * @param date date ou timestamp auquel l'action a eu lieu
 * @param lang langue de l'utilisateur
 * @param syntax syntaxe de redaction de la date
 */
export function there(date:Date|number,lang:string,
  syntax:syntax){
  const txt=Txt.get('layouts',lang).date.time
  let time=!(typeof date==='number')?(Date.now()-(date as Date).getTime())/(60*1000):date

  if(time<1){
    return _date(null,txt.now,txt,syntax)
  }
  if(time>=1&&time<2){
    return _date(Math.round(time),txt.minute,txt,syntax)
  }
  if(time<60){
    return _date(Math.round(time),txt.minutes,txt,syntax)
  }

  time/=60
  if(time<2){
    return _date(Math.round(time),txt.hour,txt,syntax)
  }
  if(time<24){
    return _date(Math.round(time),txt.hours,txt,syntax)
  }

  time/=24
  if(time<2){
    return _date(Math.round(time),txt.day,txt,syntax)
  }
  if(time<30){
    return _date(Math.round(time),txt.days,txt,syntax)
  }

  time/=30
  if(time<2){
    return _date(Math.round(time),txt.month,txt,syntax)
  }
  if(time<12){
    return _date(Math.round(time),txt.months,txt,syntax)
  }

  time/=12
  if(time<2){
    return _date(Math.round(time),txt.year,txt,syntax)
  }
  return _date(Math.round(time),txt.years,txt,syntax)
}

/**
 * retourne la date en format jour mois annee (ex: 14 janvier 2021)
 * @param date date ou timestamp auquel l'action a eu lieu
 * @param lang langue de l'utilisateur
 */
export function formate(date:Date,lang:string){
  const txt=Txt.get('layouts',lang).date.day
  let day=date.toDateString().split(' ')
  return `${(txt as any)[day[1]]} ${day[2]} ${day[3]}`
}