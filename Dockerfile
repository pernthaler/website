FROM node:15-buster

WORKDIR /website
EXPOSE 3000
RUN git clone https://github.com/Pernthaler/Website.git .
RUN npm install
RUN npm run build

CMD [ "npm", "run", "start" ]