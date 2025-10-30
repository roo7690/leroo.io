FROM node:21-alpine3.19
WORKDIR /www
COPY dist/.next ./dist/.next
COPY dist/server ./dist/server
COPY package.json next.config.js ./
COPY public ./public
COPY .env .env.local .env.production .env.production.local ./
COPY dist/tools/client ./node_modules/client
COPY src/data/db/prisma/json ./json
COPY src/data/db/prisma/sql ./sql
ENV NODE_ENV=production
RUN sed -i '/workspace/d' package.json
RUN npm i --production
EXPOSE 7714
WORKDIR /www/.
CMD ["npm","run","start"]