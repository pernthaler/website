FROM node:latest AS node
WORKDIR /build
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm vite build

FROM rust:latest AS rust
WORKDIR /build
COPY --from=node /build .
RUN cargo build -r

FROM scratch
COPY --from=rust /build/target/release/website .
ENTRYPOINT [ "/website" ]