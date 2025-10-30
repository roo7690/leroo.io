import { components } from "../schema"

export const txt:components={
  gravatar:{
    profile: "Voir le profil"
  },
  comment:{
    reactions: ["👍", "👎", "😄", "🎉", "🤔", "👀", "🚀"],
    delete: "Supprimer",
    edit: "Modifier",
    share: 'lien copié !',
    reaction:{
      error: "Oups, une erreur est survenue"
    },
    editer:{
      edit: "Editer",
      cancel: "Annuler"
    },
    modal:{
      delete:{
        delete: "Confirmer",
        cancel: "Annuler",
        content: "Êtes-vous sûr de vouloir supprimer votre commentaire ?",
        error: "Oups, une erreur est survenue",
        success: "Commentaire supprimé"
      }
    },
    add_comment:{
      answer: "Envoyer",
      placeholder: "Vos commentaires sont rendu sous le format Markdown. \nAjouter un commentaire...",
      cancel: "Annuler",
      refuse:"Commentaire refusé car viole certaines conditions !"
    },
    edit_comment:{
      edit: "Editer",
      cancel: "Annuler",
      placeholder: "Vos commentaires sont rendu sous le format Markdown. \nAjouter un commentaire...",
      refuse:"Commentaire refusé car viole certaines conditions !"
    }
  },
  project:{
    status:{
      running: "En cours",
      paused: "En pause",
      stopped: "Arrêté",
      dev: "En développement"
    }
  },
  editer:{
    edit: "Editer",
    view: "Visualiser"
  },
  search_blog:{
    placeholder:"Que recherchez vous ?",
    error: "Oups, une erreur est survenue."
  }
}