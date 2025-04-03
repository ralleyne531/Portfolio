FROM node:lts-alpine

LABEL authors="ralleyne"

WORKDIR /ui

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build
CMD ["npm", "start"]