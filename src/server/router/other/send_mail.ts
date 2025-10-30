import type {Route} from '@router'
import {print_error} from '@function'

export const send_mail:Route={
  path:'/send-mail',
  method:'post',
  handler:async ctx=>{
    const sm=ctx.get('Request-Task')
    const data={
      to:process.env.MAIL_USER,
      subject:'',
      text:''
    }
    const nodemailer=require('nodemailer')
    const transporter=nodemailer.createTransport({
      host:process.env.MAIL_SERVER,
      port:process.env.MAIL_PORT,
      secure:process.env.NODE_ENV==='production',
      auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASSWORD
      }
    })
  
    let res:any={},
      validRequest=false
    
    if(sm==='contact'){
      validRequest=true
      const {name,email,object,message}=ctx.request.body
      data.subject=`${object} (${name}, ${email})`
      data.text=message
    }
    if(sm==='send-code'){
      validRequest=true
      const {email,code}=ctx.request.body
      data.to=email
      data.subject='Inscription'
      data.text=`Votre code de confirmation est: ${code}. Ce code expire dans 1 heure.`
    }
  
    if(!validRequest){
      ctx.throw(400,'Requête invalide')
    }
  
    try{
      await transporter.sendMail({
        from:process.env.MAIL_CONTACT,
        to:data.to,
        subject:data.subject,
        text:data.text
      })
    }catch(e){
      console.log(print_error("Erreur lors de l'envoi de mail"),e)
      res.error=true
    }
  
    ctx.body=res
  }
}