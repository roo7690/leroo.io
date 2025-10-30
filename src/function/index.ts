import { CookiesKey } from './key'

export * as Comment from './comment'
export * as Notif from './notif'
export * as Time from './time'
export * as Password from './password'
export * as Wrapper from './wrapper'
export * as Verif from './verif'
export type {CookiesKey} from './key'

export const print_error=(msg:string)=>`\x1b[0;31m${msg}\x1b[0m\n`

export const Items={

  /**
   * retourne un tableau d'objets contenant la valeur et 
   * le nombre d'occurence de chaque valeur du tableau donné
   */
  group:(list:any[],
    {reverse}:{
      /**
       * si true, les groupes seront classés dans l'ordre inverse
       */
      reverse?:boolean
    }
  )=>{
    let items:any[]=list
    if(reverse){
      items=items.reverse()
    }
    const groups=[...new Set(items)]
    const grouped=groups.map(group=>{
      return {
        value:group,
        nbr:items.filter(item=>item===group).length
      }
    })
    return grouped
  }
}

export const body_request_cookie=(name:CookiesKey,value?:string,maxAge?:number)=>({
  name,
  value,
  time:maxAge
})

export function createActionServer<A>(fn:(data:A)=>void,data:A){
  return {fn,data}
}