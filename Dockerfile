FROM azul/zulu-openjdk-alpine:21-latest AS build
COPY . .
RUN chmod +x gradlew
RUN ./gradlew build

FROM azul/zulu-openjdk-alpine:21-jre-latest
COPY --from=build build/libs/website.jar .
ENTRYPOINT [ "java", "-jar", "website.jar" ]