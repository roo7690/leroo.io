export const mail=(mail:string)=>{
  const emailRegex = /^[^\s@]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/
  return emailRegex.test(mail)
}

export const password=(pass:string)=>{
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  return passRegex.test(pass)
}

export const username=(username:string)=>{
  const usernameRegex = /^[a-zA-Z0-9_]{4,14}$/
  return usernameRegex.test(username)
}

export const comment=(cmt:string)=>{
  //TODO: verifie que le commentaire n'est pas malviellant
  return true
}