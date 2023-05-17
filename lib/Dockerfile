FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Janithsadanuwan/QUEEN-NILU-MD /root/QUEEN-NILU-MD
WORKDIR /root/QUEEN-NILU-MD/
RUN npm install npm@latest

RUN yarn install --network-concurrency 1
    ffmpeg \
EXPOSE 8000
CMD ["npm", "start"]
