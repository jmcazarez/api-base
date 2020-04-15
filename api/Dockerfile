FROM node:12

WORKDIR /src

ADD package*.json ./

RUN npm install

COPY . .

EXPOSE 4444

CMD ["npm", "start"]

