FROM node:15-buster-slim
WORKDIR /website
EXPOSE 3000

RUN apt-get update
RUN apt-get -y install git
RUN npm install -g pnpm

RUN git clone https://github.com/Pernthaler/Website.git .
RUN pnpm install
RUN pnpm run build

CMD pnpm run start