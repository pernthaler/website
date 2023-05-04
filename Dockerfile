FROM node:latest AS node
WORKDIR /build
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

FROM rust:latest AS rust
WORKDIR /build
COPY --from=node . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

FROM scratch
COPY --from=rust target/release/website .
ENTRYPOINT [ "/website" ]