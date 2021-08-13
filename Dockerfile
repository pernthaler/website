FROM node:14-buster-slim
EXPOSE 3000
COPY . /website/
WORKDIR /website
RUN npm install -g yarn
CMD [ "yarn", "start" ]