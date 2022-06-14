import { networkInterfaces } from "os";
import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { createStore } from "redux";
import { Provider } from "react-redux";
import express, { Request } from "express";
import morgan from "morgan";
import helmet from "helmet";
import handlebars from "handlebars";
import { minify } from "html-minifier";
import livereload from "livereload";
import connectLivreload from "connect-livereload";
import App from "../client/App";
import Store from "../common/store";
import { box } from "./console";
import { Meta } from "./plugin";

const server = express();
const dev = process.env.MODE === "development";
const meta: Meta = JSON.parse(fs.readFileSync(path.join(__dirname, "meta.json"), "utf-8"));
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "static", "manifest.json"), "utf-8"));
const sitemap = handlebars.compile(fs.readFileSync(path.join(__dirname, "views", "sitemap.hbs"), "utf-8"));
const template = handlebars.compile(fs.readFileSync(path.join(__dirname, "views", "template.hbs"), "utf-8"));
const getDomain = (req: Request) => (req.get("x-forwarded-proto") || "http") + "://" + req.get("host");

if (dev) {
  const reloadServer = livereload.createServer({ delay: 100 });
  reloadServer.watch(__dirname);
  reloadServer.server.once("connection", () => setTimeout(() => reloadServer.refresh("/"), 100));
  server.use(connectLivreload());
}

server.use(morgan(dev ? "dev" : "tiny"));
server.use(helmet({ contentSecurityPolicy: false }));
server.use(express.static(path.join(__dirname, "static")));
server.get("/sitemap.xml", (req, res) => {
  const domain = getDomain(req);
  res.set("Content-Type", "text/xml");
  res.send(sitemap({ domain, pages: meta.pages }));
});
server.get("*", (req, res) => {
  const domain = getDomain(req);
  const url = domain + req.path;
  const store = createStore(Store);
  const content = ReactDOMServer.renderToString(
    React.createElement(Provider, { store },
      React.createElement(StaticRouter, { location: req.url }, 
        React.createElement(App))));
  const meta = store.getState();
  const preloadedState = JSON.stringify(meta);
  res.status(meta.status || 200).send(minify(template({ manifest, domain, url, content, preloadedState, title: meta.title, description: meta.description }), { collapseWhitespace: true }));
});
const listener = server.listen(3000, () => {
  if (dev) return;
  const addresses = [];
  const port = listener.address()["port"];
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4") {
        addresses.push("http://" + net.address + ":" + port);
      }
    }
  }
  box("Website v" + meta.version, "Sebastian Pernthaler", "", ...addresses);
});