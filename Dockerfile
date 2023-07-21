FROM azul/zulu-openjdk:17-jre-latest AS build
WORKDIR /build
COPY . .
RUN chmod +x gradlew
RUN ./gradlew build

FROM azul/zulu-openjdk:17-jre-latest
COPY --from=build /build/build/libs/website.jar .
ENTRYPOINT [ "java", "-jar", "website.jar" ]