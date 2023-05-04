FROM node:latest AS node
WORKDIR /build
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm vite build

FROM rust:latest AS rust
WORKDIR /build
COPY --from=node /build .
RUN apt-get update
RUN apt-get install -y musl-tools
RUN rustup target add x86_64-unknown-linux-musl
RUN cargo build -r --target x86_64-unknown-linux-musl

FROM scratch
COPY --from=rust /build/target/x86_64-unknown-linux-musl/release/website .
ENTRYPOINT [ "/website" ]