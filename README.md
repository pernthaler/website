<div align="center">
    <a href="https://github.com/pernthaler/website/blob/master/src/lib/icon.svg"><img src="https://github.com/pernthaler/website/raw/master/src/static/icon.png" alt="Icon" width="150" height="auto"></a>
    <h1>website</h1>
    <a href="https://github.com/pernthaler/website/tags"><img alt="Version" src="https://img.shields.io/github/v/release/pernthaler/website?label=Version"></a>
    <a href="https://github.com/pernthaler/website/actions/workflows/build.yml"><img alt="Build" src="https://github.com/pernthaler/website/actions/workflows/build.yml/badge.svg"></a>
    <a href="https://github.com/pernthaler/website/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/github/license/pernthaler/website?label=License"></a>
</div>

## Windows

[Releases](https://github.com/pernthaler/website/releases)

## Docker

```bash
$ docker run -it -p 8080:8080 pernthaler/website:latest
```

## Build

```bash
$ git clone https://github.com/pernthaler/website.git
$ cd website
$ chmod +x gradlew
$ ./gradlew build
```

## License

[Apache License 2.0](https://github.com/pernthaler/website/blob/master/LICENSE)