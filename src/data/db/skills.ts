import {jsonDb} from "./db"
import {Txt} from "@data-static"
import { print_error } from "@function"
import {Time} from '@function'

export interface Domaine{
  domaine:string,
  id_domaine:string,
  svg: string,
  fill:string,
  exp:string
}

export interface Technology{
  technology:string,
  id_domaine:string,
  fill:string,
  exp:string,
  img:string
}

interface _Skills{
  dom:Domaine[],
  tech:Technology[]
}

/**recupere toutes les expériences */
export async function gets(lang:string):Promise<_Skills>{
  const _train=Txt.get('home',lang).skills.train
  let skills:_Skills={dom:[],tech:[]}
  await jsonDb.$connect()
  try{
    let dom= await jsonDb.skills.findMany({where:{type:'domaine'},
      orderBy:{order:"asc"}}),
    tech= await jsonDb.skills.findMany({where:{type:'technology'},
      orderBy:{order:"asc"}})
    tech.forEach(c=>{
      dom.forEach(d=>{
        if(c.id_domaine==d.id_domaine){
          c.fill=d.fill
        }
      })
    })
    let _dom:Domaine[]=[],_comp:Technology[]=[]
    dom.forEach(d=>{
      const {domaine,id_domaine,svg,fill,exp}=d
      _dom.push({
        domaine:(domaine as any)[lang],
        id_domaine,
        svg:svg as string,
        fill:fill as string,
        exp:exp!==null?Time.there(exp*30*24*60,lang,'skill'):''
      })
    })
    tech.forEach(t=>{
      const {technology,id_domaine,fill,img,exp}=t
      _comp.push({
        technology:technology as string,
        id_domaine,
        fill:fill as string,
        img:`${process.env.MEDIA}${img}`,
        exp:exp!==null?Time.there(exp*30*24*60,lang,'skill'):''
      })
    })
    skills={dom:_dom,tech:_comp}
  }catch(e){
    console.log(print_error('Erreur lors de la récupération des compétences'),e)
  }finally{
    await jsonDb.$disconnect()
  }

  return skills
}