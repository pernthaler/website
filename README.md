<p align="center">
    <a href="https://github.com/Pernthaler/Website/tags"><img alt="Version" src="https://img.shields.io/github/v/release/Pernthaler/Website?label=Version"></a>
    <a href="https://github.com/Pernthaler/Website/actions"><img alt="Build" src="https://github.com/Pernthaler/Website/actions/workflows/build.yml/badge.svg"></a>
    <a href="https://github.com/Pernthaler/Website/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/github/license/Pernthaler/Website?label=License"></a>
</p>

# <a href="https://github.com/Pernthaler/Website/blob/master/src/client/public/favicon.png"><img src="https://github.com/Pernthaler/Website/raw/master/src/client/public/favicon.png" alt="Logo" width="30" height="auto"></a> Website

This website was made with React and Express.

## Deployment

### Docker

```
docker run -ti -p 3000:3000 pernthaler/website:latest
```

### Source

```
git clone https://github.com/Pernthaler/Website.git
cd Website
yarn install
yarn build
yarn start
```

### Bundle

[![Version](https://img.shields.io/github/v/release/Pernthaler/Website?label=Version)](https://github.com/Pernthaler/Website/tags)

```
curl https://github.com/Pernthaler/Website/releases/download/vX.X.X/Website.zip -o Website.zip
unzip Website.zip -d Website
cd Website
node build/server.js
```

## License

[Apache License 2.0](https://github.com/Pernthaler/Website/blob/master/LICENSE)