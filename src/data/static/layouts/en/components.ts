import { components } from "../schema"

export const txt:components={
  gravatar: {
    profile: "View profile"
  },
  comment: {
    reactions: ["👍", "👎", "😄", "🎉", "🤔", "👀", "🚀"],
    delete: "Delete",
    edit: "Modify",
    share: 'copy link !',
    reaction: {
      error: "Oups, an error occurred"
    },
    editer: {
      edit: "Edit",
      cancel: "Cancel"
    },
    modal: {
      delete: {
        delete: "Confirm",
        cancel: "Cancel",
        content: "Are you sure you want to delete your comment ?",
        error: "Oups, an error occurred",
        success: "Comment deleted"
      }
    },
    add_comment: {
      answer: "Send",
      placeholder: "Your comments are rendered in Markdown format. \nAdd a comment...",
      cancel: "Cancel",
      refuse:"Comment refused because it violates certain conditions!"
    },
    edit_comment: {
      edit: "Edit",
      cancel: "Cancel",
      placeholder: "Your comments are rendered in Markdown format. \nAdd a comment...",
      refuse:"Comment refused because it violates certain conditions!"
    }
  },
  project: {
    status: {
      running: "Running",
      paused: "Paused",
      stopped: "Stopped",
      dev: "In development"
    }
  },
  editer: {
    edit: "Edit",
    view: "View"
  },
  search_blog:{
    placeholder: "What are you looking for ?",
    error: "Oups, an error occurred"
  }
}