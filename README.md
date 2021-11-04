<p align="center">
    <a href="https://github.com/Pernthaler/Website/tags"><img alt="Version" src="https://img.shields.io/github/v/release/Pernthaler/Website?label=Version"></a>
    <a href="https://github.com/Pernthaler/Website/actions"><img alt="Build" src="https://github.com/Pernthaler/Website/actions/workflows/build.yml/badge.svg"></a>
    <a href="https://github.com/Pernthaler/Website/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/github/license/Pernthaler/Website?label=License"></a>
</p>

# <a href="https://github.com/Pernthaler/Website/blob/master/src/client/public/favicon.png"><img src="https://github.com/Pernthaler/Website/raw/master/src/client/public/favicon.png" alt="Logo" width="30" height="auto"></a> Website

This website was made with React and Express.

## Deployment

### Docker

```bash
docker run -ti -p 3000:3000 pernthaler/website:latest
```

### Manually

```bash
git clone https://github.com/Pernthaler/Website.git
cd Website
yarn install
yarn build
yarn start
```

## License

[Apache License 2.0](https://github.com/Pernthaler/Website/blob/master/LICENSE)