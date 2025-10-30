import type { Route } from "@router"
import {MongoClient} from "mongodb"

const client=new MongoClient(process.env.DB_JSON)
export const search:Route={
  method:'post',
  path:'/blog/search',
  handler:async ctx=>{
    let $client=client.db().collection('blogs')
    try{
      const res=$client.find({
        $text:{
          $search:ctx.request.body.input,
          $caseSensitive:false
        },
        actif:true
      },{projection:{score:{$meta:'textScore'}}})
      const lang=ctx.cookies.get('lang')||'en'
      const docs=await res.toArray()
      ctx.body=docs.sort((a,b)=>b.score-a.score)
      .map(doc=>({
        title:doc.title[lang],
        description:doc.content[lang],
        link:doc.link
      }))
    }catch(err){
      console.log(err)
      ctx.status=500
    }
  }
}