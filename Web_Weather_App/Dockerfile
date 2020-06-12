FROM node:10

# App directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]