FROM node:15-buster-slim
WORKDIR /website
EXPOSE 3000

RUN apt-get update
RUN apt-get -y install git

RUN git clone https://github.com/Pernthaler/Website.git .
RUN npm install
RUN npm run build

CMD npm run start