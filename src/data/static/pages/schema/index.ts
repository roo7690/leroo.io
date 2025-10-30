export type home={
  title: {
    h1: string
    p:string
    btn: {
      btn1: string
      btn2: string
    }
  }
  emojis: ["👻", "😎", "🤓", "🚀", "😒", "😊", "👋"]
  projects: {
    h2:string
    p:string
    error: string
  }
  on_platform:{
    contribution_github:string
    elo_chess:string
    pullRequest_github:string
  }
  skills: {
    h2:string
    p:string
    error: string
    train: string
  }
  testimonials:{
    h2:string
    error:string
  }
  news_title:string
  jobs: {
    title:{
      h2:string
      p:string
    }
    all: string
    error: string
  }
  contact:{
    title: string
    name: {
      title: string
      placeholder: string
    }
    email: {
      title: string
      placeholder: string
    }
    object: {
      title: string
      placeholder: string
    }
    message: {
      title: string
      placeholder: string
    }
    submit: string
    send_mail: {
      success: string
      error: string
    }
  }
}

export type blog={
  title: {
    h1:string
    p:string
    btn:string
  }
  blogs:{
    h2:string
    btn:string
  }
  blog_page: {
    by:string
    comment: string
    comment_placeholder: string
    send_comment: string
  }
  error: string
}

export type about_me={
  hey: {
    title: {
      t1: string
      t2: string
    }
    title2: string
    p: string
  }
  engineering: {
    title: string
    q: string
    r0: string
    res: {
      r1: string
      r2: string
    }
    err_vid: string
  }
  sciences: {
    title: string
    p: string
    q: string
    r: string
    err_img: string
  }
  manga: {
    q: string
    r: string
  }
  loisirs: {
    title: string
    err_vid: string
  }
  warzone: {
    q: string
    r: string
    p: string
  }
  star_citizen: {
    q: string
    r: string
    p: string
  }
}