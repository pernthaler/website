FROM eclipse-temurin:17-jdk AS build
COPY . .
RUN chmod +x gradlew
RUN ./gradlew build

FROM eclipse-temurin:17-jre
COPY --from=build build/libs/website.jar .
ENTRYPOINT [ "java", "-jar", "website.jar" ]