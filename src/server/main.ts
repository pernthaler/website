import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import handlebars from "handlebars";
import { minify } from "html-minifier";
import livereload from "livereload";
import connectLivreload from "connect-livereload";
import App from "../client/App";

const server = express();
const getDomain = (req) => (req.get("x-forwarded-proto") || "http") + "://" + req.get("host");
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "static", "manifest.json"), "utf-8"));
const template = handlebars.compile(fs.readFileSync(path.join(__dirname, "assets", "template.hbs"), "utf-8"));
const sitemap = handlebars.compile(fs.readFileSync(path.join(__dirname, "assets", "sitemap.hbs"), "utf-8"));

if (process.env.MODE === "development") {
  const reloadServer = livereload.createServer({ delay: 100 });
  reloadServer.watch(__dirname);
  reloadServer.server.once("connection", () => setTimeout(() => reloadServer.refresh("/"), 100));
  server.use(connectLivreload());
}

server.use(express.static(path.join(__dirname, "static")));
server.get("/", (req, res) => {
  const domain = getDomain(req);
  const url = domain + req.path;
  const content = ReactDOMServer.renderToString(React.createElement(App));
  res.send(minify(template({ manifest, domain, url, content }), { collapseWhitespace: true }));
});
server.get("/sitemap.xml", (req, res) => {
  const domain = getDomain(req);
  res.set("Content-Type", "text/xml");
  res.send(sitemap({ domain }));
});
server.listen(3000);