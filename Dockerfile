FROM node:15-alpine
WORKDIR /website
EXPOSE 3000

RUN apk add git
RUN npm install -g pnpm

RUN git clone https://github.com/Pernthaler/Website.git .
RUN pnpm install
RUN pnpm run build

CMD [ "pnpm", "run", "start" ]