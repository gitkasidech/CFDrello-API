FROM node:6.11.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000
ENV NODE_ENV beta
ENV PORT 3000
CMD npm start 