FROM debian:stable-slim
EXPOSE 8080
WORKDIR /website
COPY server/website .
ENTRYPOINT [ "website" ]