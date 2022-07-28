<div align="center">
    <a href="https://github.com/Pernthaler/Website/blob/master/client/src/public/favicon.png"><img src="https://github.com/Pernthaler/Website/raw/master/client/src/public/favicon.png" alt="Logo" width="150" height="auto"></a>
    <h1>Website</h1>
    <a href="https://github.com/Pernthaler/Website/tags"><img alt="Version" src="https://img.shields.io/github/v/release/Pernthaler/Website?label=Version"></a>
    <a href="https://github.com/Pernthaler/Website/actions"><img alt="Build" src="https://github.com/Pernthaler/Website/actions/workflows/build.yml/badge.svg"></a>
    <a href="https://github.com/Pernthaler/Website/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/github/license/Pernthaler/Website?label=License"></a>
</div>

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