import type { Middleware } from "koa"
import passport from 'koa-passport'
import {Strategy as gooStrategy} from 'passport-google-oauth20'
import {Strategy as gitStrategy} from 'passport-github2'
import { Users } from "@db"
import type {Txt} from '@data-static'

export const order=0

const goo=new gooStrategy({
  clientID:process.env.GOOGLE_CLIENT_ID,
  clientSecret:process.env.GOOGLE_CLIENT_SECRET,
  callbackURL:process.env.GOOGLE_REDIRECT_URI
},async (accessToken,refreshToken,profile,
  callback:(err:{
    error:keyof Txt.Text['layouts']['connexion']['passport']|500,
    msg?:string}|null,
  user:Omit<Users.User,'password'>|undefined)=>any
)=>{
  try{
    let user=await Users.getUserSSO({google_id:profile.id})
    if(user){
      delete user.password
      callback(null,user)
    }else if(profile.emails){
      let _user=await Users.find(profile.emails[0].value)
      if(_user){
        await Users.updateUser(_user.id,{google_id:profile.id})
        user=await Users.getUser(_user.id) as Users.User
        delete user.password
        callback(null,user)
      }else{
        const username=profile.username||profile.displayName
        const email=profile.emails[0].verified?profile.emails[0].value:undefined
        let _user=await Users.addUser(username,{email,google_id:profile.id})
        if(_user){
          delete _user.password
          callback(null,_user)
        }else{
          callback({error:'oups'},undefined)
        }
      }
    }else{
      const username=profile.username||profile.displayName
      let _user=await Users.addUser(username,{google_id:profile.id})
      if(_user){
        delete _user.password
        callback(null,_user)
      }else{
        callback({error:'oups'},undefined)
      }
    }
  }catch(e){
    callback({error:500,msg:e as string},undefined)
  }
})

const git=new gitStrategy({
  clientID:process.env.GITHUB_CLIENT_ID,
  clientSecret:process.env.GITHUB_CLIENT_SECRET,
  callbackURL:process.env.GITHUB_REDIRECT_URI
},async (accessToken:any, refreshToken:any, profile:any,
  callback:(err:{
    error:keyof Txt.Text['layouts']['connexion']['passport']|500,
    msg?:string}|null,
  user:Omit<Users.User,'password'>|undefined)=>any
)=>{
  try{
    let user=await Users.getUserSSO({github_id:profile.id})
    if(user){
      delete user.password
      callback(null,user)
    }else if(profile._json.email){
      let _user=await Users.find(profile._json.email)
      if(_user){
        await Users.updateUser(_user.id,{github_id:profile.id})
        user=await Users.getUser(_user.id) as Users.User
        delete user.password
        callback(null,user)
      }else{
        const username=profile.username||profile.displayName
        const email=profile._json.email
        let _user=await Users.addUser(username,{email,github_id:profile.id})
        if(_user){
          delete _user.password
          callback(null,_user)
        }else{
          callback({error:'oups'},undefined)
        }
      }
    }else{
      const username=profile.username||profile.displayName
      let _user=await Users.addUser(username,{github_id:profile.id})
      if(_user){
        delete _user.password
        callback(null,_user)
      }else{
        callback({error:'oups'},undefined)
      }
    }
  }catch(e){
    callback({error:500,msg:e as string},undefined)
  }
})

passport.use(goo)
passport.use(git)

export const middlewares:Middleware[]=[
  passport.initialize(),
  passport.session()
]