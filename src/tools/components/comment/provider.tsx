'use client'
import { createContext } from "react"
import type {Blog} from '@db'

export interface ContextComment{
  userId?:number
  blogId:string
  lang:string
  users:Blog.Data['comments']['users']
}

export const Context=createContext({} as ContextComment)