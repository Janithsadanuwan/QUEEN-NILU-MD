FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  
  

COPY package.json .

RUN npm install -g npm@9.4.2 

COPY . .

CMD ["node", "."]
