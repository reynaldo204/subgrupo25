FROM node:14.15

WORKDIR /usr/src/app

COPY package.json ./

COPY . .

CMD [ "npm", "run","start:dev" ]