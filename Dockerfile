FROM node:16-buster-slim
WORKDIR /website
EXPOSE 3000

RUN apt-get update && \
    apt-get -y install git yarn && \
    git clone https://github.com/Pernthaler/Website.git . && \
    yarn install && \
    yarn build

CMD yarn start