FROM openjdk:17
EXPOSE 8080
WORKDIR /website
COPY server/build/libs/website.jar .
CMD [ "java", "-jar", "website.jar" ]