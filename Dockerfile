FROM scratch
EXPOSE 8080
COPY server/website /
ENTRYPOINT [ "/website" ]