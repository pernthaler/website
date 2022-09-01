FROM debian:sid-slim
EXPOSE 8080
WORKDIR /website
COPY ./ ./
RUN apt-get update                                          && \
    apt-get install build-essential nodejs npm golang -y    && \
    npm install -g pnpm                                     && \
    /bin/bash -c make
ENTRYPOINT [ "./server/website" ]