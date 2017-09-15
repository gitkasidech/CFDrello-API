# FROM node:6.11.0

# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# COPY package.json .
# RUN npm install

# COPY . .

# EXPOSE 3000
# ENV NODE_ENV beta
# ENV PORT 3000
# CMD npm start 
FROM node:6.11.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY . /usr/src/app
EXPOSE 3000
ENV NODE_ENV beta
CMD [ "npm", "start" ]