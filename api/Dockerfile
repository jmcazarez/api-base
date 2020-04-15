FROM node:12

WORKDIR /src

ADD package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

