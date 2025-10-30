import { PrismaClient as JsonDb } from "./prisma/json"
import { PrismaClient as SqlDb } from "./prisma/sql"

export const jsonDb=new JsonDb({log:['error']})
export const sqlDb=new SqlDb({log:['error']})