<p align="center">
    <a href="https://hub.docker.com/r/pernthaler/website"><img alt="Pulls" src="https://img.shields.io/docker/pulls/pernthaler/website?label=Pulls"></a>
    <a href="https://github.com/Pernthaler/Website"><img alt="Version" src="https://img.shields.io/github/package-json/v/Pernthaler/Website?label=Version"></a>
</p>

# Website

This website was created with [Vue.js](https://vuejs.org/) and is [open source](https://github.com/Pernthaler/Website).

## Deployment

### Docker

```bash
docker run -ti pernthaler/website
```

### Manually

- [Node v15](https://nodejs.org/en/download/current/)
- npm v7
- [Git](https://git-scm.com/downloads)

```bash
npm install -g pnpm
git clone https://github.com/Pernthaler/Website.git
cd Website
pnpm install
pnpm run build
pnpm run start
```

## License

[Apache License 2.0](LICENSE)