FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

EXPOSE 8080

ENTRYPOINT ["nodemon", "/home/node/app/index.js"]
