FROM node:14-buster-slim
EXPOSE 3000
WORKDIR /website
COPY . .
RUN yarn install && \
    yarn build
CMD [ "yarn", "start" ]