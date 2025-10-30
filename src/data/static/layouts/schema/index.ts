export type layouts={
  nav: {
    blog:string
    github:string
    about_me:string
  }
  blog:{
    copy:string
    msg_refuse:string
  }
  connexion: {
    connexion: {
      _false: string
      _true: string
    },
    modal: {
      title: {
        con: string
        ins: string
      },
      alter: {
        con: string
        ins: string
        return: string
      },
      email: string
      password: string
      u$ername: string
      new_password: string
      confirm_password: string
      submit: string
      forgot: string
      resend_code: string
      register: string
      ou: string
      google: {
        con: string
        ins: string
      },
      github: {
        con: string
        ins: string
      }
    },
    msg: {
      u$ernamePris: string
      notPseudo: string
      notGoodPseudo: string
      notEmail: string
      emailExist: string
      code_sent: string
      notPassword: string
      emailNotFound: string
      other_auth: string
      reset_email: string
      notGoodPassword: string
      connect: string
      error: string
      notCode: string
      notGoodCode: string
      notConfPass: string
    },
    passport: {
      notEmail: string
      emailNotVerif: string
      oups: string
    }
  },
  edit_user: {
    title: string
    msg: {
      need_connexion: string
      success: string
      error: string
      notGoodPseudo: string
      success_delete: string
    },
    logout: string
    delete: string
    prop: {
      username: string
      email: string
      pas$word: string
      password: string
      new_password: string
      confirm_password: string
      submit: string
      edit: string
      why: string
      delete: string
      confirm_delete: string
    }
  },
  date: {
    time: {
      post: string
      at: string
      day: string
      days: string
      hour: string
      hours: string
      minute: string
      minutes: string
      now: string
      week: string
      weeks: string
      month: string
      months: string
      year: string
      years: string
      "+": string
      syntax: {
        comment: string
        skill: string
      }
    },
    day: {
      Jan: string
      Feb: string
      Mar: string
      Apr: string
      May: string
      Jun: string
      Jul: string
      Aug: string
      Sep: string
      Oct: string
      Nov: string
      Dec: string
    }
  },
  error: string
  res_error: {
    "404": string
    "500": string
    "403": string
  }
}

export type components={
  gravatar: {
    profile: string
  },
  comment: {
    reactions: ["👍", "👎", "😄", "🎉", "🤔", "👀", "🚀"]
    delete: string
    edit: string
    share:string
    reaction: {
      error: string
    },
    editer: {
      edit: string
      cancel: string
    },
    modal: {
      delete: {
        delete: string
        cancel: string
        content: string
        error: string
        success: string
      }
    },
    add_comment: {
      answer: string
      placeholder: string
      cancel: string
      refuse:string
    },
    edit_comment: {
      edit: string
      cancel: string
      placeholder: string
      refuse:string
    }
  },
  project: {
    status: {
      running: string
      paused: string
      stopped: string
      dev: string
    }
  },
  editer: {
    edit: string
    view: string
  },
  search_blog:{
    placeholder: string
    error: string
  }
}