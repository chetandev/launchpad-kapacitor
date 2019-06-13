FROM node:10.15.0-alpine


ARG branch

# Create app directory
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install
RUN npm install pm2 -g

# Bundle app source
COPY . .

EXPOSE 5000

CMD npm start 
