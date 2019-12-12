FROM node:10.11-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /home/thang_mobilefolk/datatracking

COPY package*.json ./

RUN npm cache clean --force \
  && npm install

ENV PORT 5000
EXPOSE 5000
CMD [ "npm", "start" ]
