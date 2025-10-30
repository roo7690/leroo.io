import {sqlDb} from "./db"
import { print_error, Password } from "@function"

export type User={
  id:number,
  username:string,
  email:string,
  password?:string,
  auth_interne:boolean
}

/**trouve un utilisateur par son email */
export async function find(email:string):
Promise<{id:number,auth_interne:boolean}|null>{
  let res=null
  email=email.toLowerCase()

  await sqlDb.$connect()
  try{
    let user= await sqlDb.users.findFirst({
      where:{email},
      select:{id:true,password:true}
    })
    if(user){
      res={id:user.id,auth_interne:user.password===''?false:true}
    }
  }catch(e){
    console.log(print_error('Erreur lors de la recherche de l\'utilisateur '+email),e)
  }finally{
    await sqlDb.$disconnect()
  }

  return res
}

/**recupere un utilisateur par son email*/
export async function getUser(id:number):Promise<User|null>{
  await sqlDb.$connect()
  let user:User|null=null
  try{
    let _user= await sqlDb.users.findUnique({where:{id}})
    if(_user){
      user={
        id:_user.id,
        username:_user.username,
        email:_user.email,
        password:_user.password===''?undefined:_user.password,
        auth_interne:_user.password===''?false:true
      }
    }
  }catch(e){
    console.log(print_error('Erreur lors de la récupération d\'un utilisateur'),e)
  }finally{
    await sqlDb.$disconnect()
  }
  return user
}

export async function getUserSSO(
  {google_id,github_id}:{google_id?:string,github_id?:string}):Promise<User|null>
{
  if(!google_id && !github_id){
    return null
  }
  
  await sqlDb.$connect()
  let user:User|null=null

  try{
    let _user= await sqlDb.users.findFirst({
      where:{OR:[
        {google_id},
        {github_id}
      ]}
    })
    if(_user){
      user={
        id:_user.id,
        username:_user.username,
        email:_user.email,
        password:'',
        auth_interne:_user.password===''?false:true
      }
    }
  }catch(e){
    console.log(print_error('Erreur lors de la récupération de l\'utilisateur par sso'),e)
  }finally{
    await sqlDb.$disconnect()
  }

  return user
}

/**verifie si un pseudo est libre */
export async function usernameFree(username:string):Promise<boolean>{
  await sqlDb.$connect()
  let free=false
  try{
    let _user= await sqlDb.users.findUnique({where:{username}})
    free=!_user
  }catch(e){
    console.log(print_error('Erreur lors de la vérification de l\'utilisation du pseudo '+username),e)
  }finally{
    await sqlDb.$disconnect()
  }
  return free
}

/**ajoute un utilisateur */
export async function addUser(username:string,
  {email,password,google_id,github_id}:
  {email?:string,password?:string,google_id?:string,github_id?:string}
):Promise<User|null>{
  await sqlDb.$connect()
  let res=null
  try{
    password=password?await Password.hash(password):''
    const user=await sqlDb.users.create({
      data:{email:email?.toLowerCase(),username,password,google_id,github_id}
    })
    if(user){
      res={
        id:user.id,
        username:user.username,
        email:user.email,
        password:user.password===''?undefined:user.password,
        auth_interne:user.password===''?false:true
      }
    }
  }catch(e){
    console.log(print_error('Erreur lors de l\'ajout de l\'utilisateur '+email),e)
  }finally{
    await sqlDb.$disconnect()
  }
  return res
}

export async function updateUser(id:number,
  {email,username,password,google_id,github_id}:
  {email?:string,username?:string,password?:string,google_id?:string,github_id?:string}
){
  await sqlDb.$connect()
  try{
    if(password){
      password=await Password.hash(password)
    }
    await sqlDb.users.update({
      where:{id},
      data:{email,username,password,google_id,github_id}
    })
  }catch(e){
    console.log(print_error('Erreur lors de la mise à jour d\'un utilisateur'),e)
  }finally{
    await sqlDb.$disconnect()
  }
}

export async function deleteUser(id:number){
  await sqlDb.$connect()
  try{
    await sqlDb.users.delete({where:{id}})
  }catch(e){
    console.log(print_error('Erreur lors de la suppression de l\'utilisateur '+id),e)
  }finally{
    await sqlDb.$disconnect()
  }
}