import type { Server } from 'socket.io'
import type { NextServer, RequestHandler } from 'next/dist/server/next'

declare global{
  namespace NodeJS{
    interface ProcessEnv{
      WELCOME:string
      MAIL:string
      APP_NAME:string
      APP_VERSION:string
      APP_TITLE:string
      APP_DESCRIPTION:string
      NODE_ENV:"development" | "production" | "test"
      BLOB:string
      MEDIA:string
      GRAVATAR_AVATAR:string
      MAIL_SERVER:string
      MAIL_PORT:string
      MAIL_CONTACT:string
      MAIL_USER:string
      MAIL_PASSWORD:string
      BLOB_KEY:string
      DB_JSON:string
      DB_SQL:string
      FIGMA_KID:string
      GRAVATAR:string
      INCLUDE_ASSETS:string
      HOST:string
      PORT:string
      _HOSTNAME:string
      GITHUB_TOKEN:string
      MIN_ELO:string
      MIN_PULLREQUEST:string
      QTITE_BLOGS:string
      DOMAIN:string
      SECRET_KEY:string

      //passport keys for google and github
      GOOGLE_CLIENT_ID:string
      GOOGLE_PROJECT_ID:string
      GOOGLE_AUTH_URI:string
      GOOGLE_TOKEN_URI:string
      GOOGLE_AUTH_PROVIDER_X509_CERT_URL:string
      GOOGLE_CLIENT_SECRET:string
      GOOGLE_REDIRECT_URI:string
      GITHUB_CLIENT_ID:string
      GITHUB_CLIENT_SECRET:string
      GITHUB_REDIRECT_URI:string
      JAVASCRIPT_ORIGINS:string

      //cookie keys
      MA_THEMES:string
      MA_LANG:string
      MA__USER:string
      MA_USER:string
      MA_INS:string
      MA_CODE:string
    }
  }
}

declare module 'koa'{
  interface DefaultContext {
    /**Server web socket */
    wss: Server

    /**Next server */
    nextServer:NextServer
    /**Next handler */
    nextHandler:RequestHandler
  }
}