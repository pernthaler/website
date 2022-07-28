# Website

## Deploy

### Java

[Releases](https://github.com/Pernthaler/Website/releases)

### Docker

```bash
$ docker run -ti -p 8080:8080 pernthaler/website:latest
```

## Build

```bash
$ git clone https://github.com/Pernthaler/Website.git
$ cd Website
$ chmod +x gradlew
$ ./gradlew build
```

## License

[Apache License 2.0](https://github.com/Pernthaler/Website/blob/master/LICENSE)