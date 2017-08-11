# Dockerfile
FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#COPY server.js /usr/src/app

# Bundle app source
COPY . /usr/src/app
RUN npm install

EXPOSE 3000

CMD ["node", "server/server.js"]
