import { layouts } from "../schema"

export const txt:layouts={
  nav: {
    blog: "Blog",
    about_me: "About me",
    github:"Github"
  },
  blog:{
    copy: 'Copied !',
    msg_refuse:"Comment refused because it violates certain conditions!"
  },
  connexion: {
    connexion: {
      _false: "Connexion",
      _true: "Edit"
    },
    modal: {
      title: { con: "Sign in", ins: "Sign up" },
      alter: { con: "Sign in ?", ins: "Sign up ?", return: "‹ Return" },
      email: "Email",
      password: "Password",
      u$ername: "Username",
      new_password: "New password",
      confirm_password: "Confirm password",
      submit: "Submit",
      forgot: "Forgot password ?",
      resend_code: "Resend a code ?",
      register: "Register",
      ou: "or",
      google: { con: "Sign in with Google", ins: "Sign up with Google" },
      github: { con: "Sign in with Github", ins: "Sign up with Github" }
    },
    msg: {
      u$ernamePris: "Username already",
      notPseudo: "No pseudo entered",
      notGoodPseudo: "Username must contain between 4 and 14 characters, without space and special characters, except (-), (_) and (.)",
      notEmail: "Email is not valid",
      emailExist: "Email already exist",
      code_sent: "Code sent to your email !",
      notPassword: "Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number",
      emailNotFound: "Email not found",
      other_auth: "This account uses another connexion method !",
      reset_email: "Time passed, please resend your email !",
      notGoodPassword: "Password invalid",
      connect: "👻 You are connected !",
      error: "Oups, an error occured !",
      notCode: "No code entered !",
      notGoodCode: "Code is incorrect",
      notConfPass: "Passwords do not match !"
    },
    passport: {
      notEmail: "Account not found",
      emailNotVerif: "Email not verified",
      oups: "Oups, an error occured !"
    }
  },
  edit_user: {
    title: "Edit your profile",
    msg: {
      need_connexion: "You need to be connected !",
      success: "Profile updated !",
      error: "Oups, an error occured !",
      notGoodPseudo: "Username invalid",
      success_delete: "Account deleted !"
    },
    logout: "Logout",
    delete: "Delete account",
    prop: {
      username: "Username",
      email: "Email",
      pas$word: "Password",
      password: "Actual password",
      new_password: "New password",
      confirm_password: "Confirm password",
      submit: "Submit",
      edit: "Edit",
      why: "😿 ?",
      delete: "Delete",
      confirm_delete: "Confirm by entering "
    }
  },
  date: {
    time: {
      post: "Posted",
      at: "ago",
      day: "day",
      days: "days",
      hour: "hour",
      hours: "hours",
      minute: "minute",
      minutes: "minutes",
      now: "now",
      week: "week",
      weeks: "weeks",
      month: "month",
      months: "months",
      year: "year",
      years: "years",
      "+": "+",
      syntax: {
        comment: "post {time} {unit} at",
        skill: "+ {time} {unit}"
      }
    },
    day: {
      Jan: "January",
      Feb: "February",
      Mar: "March",
      Apr: "April",
      May: "May",
      Jun: "June",
      Jul: "July",
      Aug: "August",
      Sep: "September",
      Oct: "October",
      Nov: "November",
      Dec: "December"
    }
  },
  error: "Oups, an error occured !",
  res_error: {
    "404": "Page not found",
    "500": "Internal server error",
    "403": "Forbidden"
  }
}