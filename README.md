<div align="center">
    <a href="https://github.com/pernthaler/website/blob/master/src/main/resources/assets/icon.svg"><img src="https://github.com/pernthaler/website/raw/master/src/main/resources/static/img/icon.png" alt="Icon" width="150" height="auto"></a>
    <h1>Website</h1>
    <a href="https://github.com/pernthaler/website/tags"><img alt="Version" src="https://img.shields.io/github/v/release/pernthaler/website?label=Version"></a>
    <a href="https://github.com/pernthaler/website/actions/workflows/build.yml"><img alt="Build" src="https://github.com/pernthaler/website/actions/workflows/build.yml/badge.svg"></a>
    <a href="https://github.com/pernthaler/website/blob/master/LICENSE.txt"><img alt="License" src="https://img.shields.io/github/license/pernthaler/website?label=License"></a>
</div>

## Java

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

[MIT](https://github.com/pernthaler/website/blob/master/LICENSE.txt)