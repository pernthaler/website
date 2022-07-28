FROM openjdk:17
EXPOSE 8080
WORKDIR /website
COPY . .
RUN chmod +x gradlew && \
    ./gradlew build
CMD [ "java", "-jar", "server/build/libs/website.jar" ]