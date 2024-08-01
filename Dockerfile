FROM node:17-alpine

WORKDIR /rxd_app

COPY package*.json .

RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSE 3001

CMD ["npm", "start"]