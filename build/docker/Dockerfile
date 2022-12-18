FROM golang:alpine AS build
WORKDIR /build
COPY . .
RUN apk add --no-cache make upx
RUN make

FROM scratch
EXPOSE 8080
COPY --from=build /build/bin .
ENTRYPOINT [ "/website" ]