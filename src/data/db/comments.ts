import {jsonDb} from "./db"
import { print_error } from "@function"
import {ObjectId} from 'bson'

export type Comment={
  id: string
  comment: string
  date: Date
  id_user: number
  reactions: string[]
  response:{id:string}|null
}

export async function add({id_blog,comment,id_user,id_response}:
  {id_blog:string,comment:string,id_user:number,id_response?:string}
):Promise<boolean>{
  let res=false
  jsonDb.$connect()
  try{
    await jsonDb.comments.update({
      where:{id_blog},
      data:{
        nbr_comments:{increment:1},
        comments:{
        push:{
          id:new ObjectId().toHexString(),
          comment,
          date:new Date(),
          id_user,
          reactions:[],
          response:id_response?{id:id_response}:null
        }
      }}
    })
    res=true
  }catch(e){
    console.log(print_error('Erreur lors de l\'ajout d\'un commentaire.'))
  }finally{
    jsonDb.$disconnect()
  }
  return res
}

export async function get({id_blog,id_comment}:
  {id_blog:string,id_comment:string}
):Promise<{date:Date,comment:string}|null>{
  let res=null
  jsonDb.$connect()
  try{
    const comments= (await jsonDb.comments.findFirst({
      where:{id_blog}
    }))?.comments
    const comment=comments?.find(c=>c.id===id_comment)
    if(comment){
      res={
        date:comment.date,
        comment:comment.comment
      }
    }
  }catch(e){
    console.log(print_error('Erreur lors de la recuperation d\'un commentaire.'))
  }finally{
    jsonDb.$disconnect()
  }
  return res
}

export async function put({id_blog,id_comment,comment}:
  {id_blog:string,id_comment:string,comment:string}
):Promise<boolean>{
  let res=false
  jsonDb.$connect()
  try{
    await jsonDb.comments.update({
      where:{id_blog},
      data:{comments:{
        updateMany:{
          where:{id:id_comment},
          data:{comment,date:new Date()}
        }
      }}
    })
    res=true
  }catch(e){
    console.log(print_error('Erreur lors de la modification d\'un commentaire.'))
  }finally{
    jsonDb.$disconnect()
  }

  return res
}

export async function remove({id_blog,id_comment}:
  {id_blog:string,id_comment:string}
):Promise<boolean>{
  let res=false
  jsonDb.$connect()
  try{
    await jsonDb.comments.update({
      where:{id_blog},
      data:{
        nbr_comments:{decrement:1},
        comments:{
        deleteMany:{
          where:{id:id_comment}
        }
      }}
    })
    res=true
  }catch(e){
    console.log(print_error('Erreur lors de la suppression d\'un commentaire.'))
  }finally{
    jsonDb.$disconnect()
  }
  return res
}

export async function updateReactions({id_blog,id_comment,id_user,reaction}:
  {id_blog:string,id_comment:string,id_user:number,reaction:string}
):Promise<boolean>{
  let res=false
  jsonDb.$connect()
  try{
    let comments=(await jsonDb.comments.findFirst({
      where:{id_blog}
    }))?.comments
    if(comments){
      let reactions=comments.find(c=>c.id===id_comment)?.reactions
      if(reactions){
        const index=reactions.findIndex(r=>r.by===id_user&&r.reaction===reaction)
        if(index===-1){
          reactions.push({by:id_user,reaction})
        }else{
          reactions.splice(index,1)
        }
        await jsonDb.comments.update({
          where:{id_blog},
          data:{comments:{
            updateMany:{
              where:{id:id_comment},
              data:{reactions:{set:reactions}}
            }
          }}
        })
        res=true
      }
    }
  }catch(e){
    console.log(print_error('Erreur lors de la mise a jour des reactions d\'un commentaire.'))
  }finally{
    jsonDb.$disconnect()
  }
  return res
}

export async function getReactions({id_blog,id_comment}:
  {id_blog:string,id_comment:string}
):Promise<string[]|null>{
  let res=null
  jsonDb.$connect()
  try{
    const comments= (await jsonDb.comments.findFirst({
      where:{id_blog}
    }))?.comments
    const comment=comments?.find(c=>c.id===id_comment)
    if(comment){
      res=comment.reactions.map(r=>r.reaction)
    }
  }catch(e){
    console.log(print_error('Erreur lors de la recuperation des reactions d\'un commentaire.'))
  }finally{
    jsonDb.$disconnect()
  }
  return res
}