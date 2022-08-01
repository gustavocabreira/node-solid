FROM node:alpine

WORKDIR /usr/app

COPY package.json ./
COPY tsconfig.json ./
COPY package*.json ./

COPY src ./src
RUN ls -a
RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "start"]