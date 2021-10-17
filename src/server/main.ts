import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import ejs from "ejs";
import { minify } from "html-minifier";
import livereload from "livereload";
import connectLivreload from "connect-livereload";
import App from "../client/App";

const server = express();
const manifest = fs.readFileSync(path.join(__dirname, "static", "manifest.json"), "utf-8");
const template = fs.readFileSync(path.join(__dirname, "views", "index.ejs"), "utf-8");
const assets = JSON.parse(manifest);

if (process.env.MODE === "development") {
  const reloadServer = livereload.createServer({ delay: 100 });
  reloadServer.watch(__dirname);
  reloadServer.server.once("connection", () => setTimeout(() => reloadServer.refresh("/"), 100));
  server.use(connectLivreload());
}

server.use(express.static(path.join(__dirname, "static")));
server.get("/", (req, res) => {
  const domain = "http" + (req.secure ? "s" : "") + "://" + req.get("host");
  const url = domain + req.path;
  const component = ReactDOMServer.renderToString(React.createElement(App));
  const html = ejs.render(template, { assets, domain, url, component });
  res.send(minify(html, { collapseWhitespace: true }));
});
server.listen(3000);