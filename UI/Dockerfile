FROM node:lts-alpine

LABEL authors="ralleyne"

WORKDIR /src

COPY package.json package-lock.json ./
RUN npm install

COPY portfolio .

RUN npm run build
CMD ["npm", "start"]