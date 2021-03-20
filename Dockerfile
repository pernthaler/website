FROM node:15-alpine
WORKDIR /website
EXPOSE 3000

RUN apk add git

RUN git clone https://github.com/Pernthaler/Website.git .
RUN yarn install
RUN yarn run build

CMD [ "yarn", "run", "start" ]