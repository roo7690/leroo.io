import {jsonDb} from "./db"
import { print_error } from "@function"

export interface Job{
  title:string,
  secteur:string,
  description:string[],
  media:any,
  location:string,
  date:{start:string,end:string},
  entreprise:string
}

/**recupere tous les jobs */
export async function gets(lang:string):Promise<Job[]>{
  let jobs:Job[]=[]
  await jsonDb.$connect()
  try{
    let _jobs= await jsonDb.jobs.findMany({orderBy:{ordre:'desc'}})
    _jobs.forEach(_job=>{
      const {title,secteur,description,
        media,location,date,entreprise}=_job
        if(Array.isArray(media.src)){
          media.src=media.src.map((src:any)=>process.env.MEDIA+src as string) as any
        }else{
          media.src=process.env.MEDIA+media.src
        }
      jobs.push({
        title:(title as any)[lang],
        secteur:(secteur as any)[lang],
        description:(description as any)[lang],
        media:media as any,
        location:(location as any)[lang],
        date,entreprise
      })
    })
  }catch(e){
    console.log(print_error('Erreur lors de la récupération des exp'),e)
  }finally{
    await jsonDb.$disconnect()
  }

  return jobs
}