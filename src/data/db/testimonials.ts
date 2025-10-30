import { jsonDb } from "./db"
import { print_error } from "@function"
import {sha256} from 'js-sha256'

export type Testimonial={
  id:string
  of:string
  profession:string
  img:string
  gravatar_data:string
  say:string
}

//Retounre tous les temoignages
export async function gets():Promise<Testimonial[]>{
  let res:Testimonial[]=[]

  jsonDb.$connect()
  try{
    const testimonials=await jsonDb.testimonials.findMany()
    res=testimonials.map(t=>({
      id:t.id,of:t.of,say:t.say,
      img:process.env.MEDIA+t.img,
      profession:t.profession,
      gravatar_data:`${process.env.HOST}/blog/user-data/${sha256(t.email)}`
    }))
  }catch(e){
    print_error('Une erreur s\'est produit lors de la recuperation des temoignages '+e)
  }finally{
    jsonDb.$disconnect()
  }

  return res
}