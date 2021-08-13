FROM node:14-buster-slim
EXPOSE 3000
WORKDIR /website
COPY . .
CMD [ "yarn", "start" ]