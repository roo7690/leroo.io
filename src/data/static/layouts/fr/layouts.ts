import { layouts } from "../schema"

export const txt:layouts={
  nav:{
    blog: "Blog",
    about_me: "À propos",
    github:"Github"
  },
  blog:{
    copy: 'Copié !',
    msg_refuse:"Commentaire refusé car viole certaines conditions !"
  },
  connexion:{
    connexion:{
      _false: "Connexion",
      _true: "Editer"
    },
    modal:{
      title:{ con: "Connexion", ins: "Inscription" },
      alter:{ con: "Connexion ?", ins: "S'inscrire ?", return: "‹ Retour" },
      email: "Email",
      password: "Mot de passe",
      u$ername: "Pseudo",
      new_password: "Nouveau mot de passe",
      confirm_password: "Confirmer le mot de passe",
      submit: "Soumettre",
      forgot: "Mot de passe oublié ?",
      resend_code: "Renvoyer un code ?",
      register: "S'inscrire",
      ou: "ou",
      google:{ con: "Connexion via Google", ins: "Inscription Google" },
      github:{ con: "Connexion via Github", ins: "Inscription Github" }
    },
    msg:{
      u$ernamePris: "Pseudo déjà pris",
      notPseudo: "Aucun pseudo saisi",
      notGoodPseudo: "Un pseudo doit contenir entre 4 et 14 caractères, sans espace et sans caractères spéciaux, hormis (-), (_) et (.)",
      notEmail: "Email non valide",
      emailExist: "Email déjà existant",
      code_sent: "Code envoyé à votre email !",
      notPassword: "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre",
      emailNotFound: "Email non trouvé",
      other_auth: "Ce compte utilise une autre méthode de connexion !",
      reset_email: "Delai passé, veuillez renvoyer votre email !",
      notGoodPassword: "Mot de passe invalides",
      connect: "👻 Vous êtes connecté !",
      error: "Oups, une erreur s'est produite !",
      notCode: "Aucun code saisi !",
      notGoodCode: "Code incorrect",
      notConfPass: "Les mots de passe ne correspondent pas !"
    },
    passport:{
      notEmail: "Compte introuvable",
      emailNotVerif: "Email non vérifié",
      oups: "Oups, une erreur s'est produite !"
    }
  },
  edit_user:{
    title: "Editer votre profil",
    msg:{
      need_connexion: "Vous devez être connecté !",
      success: "Profil mis à jour !",
      error: "Oups, une erreur s'est produite !",
      notGoodPseudo: "Pseudo invalide",
      success_delete: "Compte supprimé !"
    },
    logout: "Déconnexion",
    delete: "Supprimer le compte",
    prop:{
      username: "Pseudo",
      email: "Email",
      pas$word: "Mot de passe",
      password: "Actuel Mot de passe",
      new_password: "Nouveau mot de passe",
      confirm_password: "Confirmer le mot de passe",
      submit: "Soumettre",
      edit: "Editer",
      why: "😿 ?",
      delete: "Supprimer",
      confirm_delete: "Confirmer en ecrivant "
    }
  },
  date:{
    time:{
      post: "Posté",
      at: "il y'a",
      day: "jour",
      days: "jours",
      hour: "heure",
      hours: "heures",
      minute: "minute",
      minutes: "minutes",
      now: "maintenant",
      week: "semaine",
      weeks: "semaines",
      month: "mois",
      months: "mois",
      years: "ans",
      year: "an",
      "+": "+",
      syntax:{
        comment: "post at {time} {unit}",
        skill: "+ {time} {unit}"
      }
    },
    day:{
      Jan: "Janvier",
      Feb: "Février",
      Mar: "Mars",
      Apr: "Avril",
      May: "Mai",
      Jun: "Juin",
      Jul: "Juillet",
      Aug: "Août",
      Sep: "Septembre",
      Oct: "Octobre",
      Nov: "Novembre",
      Dec: "Décembre"
    }
  },
  error: "Oups, une erreur s'est produite !",
  res_error:{
    "404": "Page non trouvée",
    "500": "Erreur interne du serveur",
    "403": "Interdit"
  }
}