import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import express, { Request } from "express";
import morgan from "morgan";
import helmet from "helmet";
import handlebars from "handlebars";
import { minify } from "html-minifier";
import livereload from "livereload";
import connectLivreload from "connect-livereload";
import App from "../client/App";

const server = express();
const pages = JSON.parse(fs.readFileSync(path.join(__dirname, "pages.json"), "utf-8"));
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "static", "manifest.json"), "utf-8"));
const sitemap = handlebars.compile(fs.readFileSync(path.join(__dirname, "views", "sitemap.hbs"), "utf-8"));
const template = handlebars.compile(fs.readFileSync(path.join(__dirname, "views", "template.hbs"), "utf-8"));
const getDomain = (req: Request) => (req.get("x-forwarded-proto") || "http") + "://" + req.get("host");

if (process.env.MODE === "development") {
  const reloadServer = livereload.createServer({ delay: 100 });
  reloadServer.watch(__dirname);
  reloadServer.server.once("connection", () => setTimeout(() => reloadServer.refresh("/"), 100));
  server.use(connectLivreload());
  server.use(morgan("dev"));
}

server.use(helmet({ contentSecurityPolicy: false }));
server.use(express.static(path.join(__dirname, "static")));
server.get("/sitemap.xml", (req, res) => {
  const domain = getDomain(req);
  res.set("Content-Type", "text/xml");
  res.send(sitemap({ domain, pages }));
});
server.get("*", (req, res) => {
  const domain = getDomain(req);
  const url = domain + req.path;
  const meta: { title: string, description: string, status?: number } = { title: "", description: "" };
  const content = ReactDOMServer.renderToString(React.createElement(StaticRouter, { location: req.url, context: meta }, React.createElement(App)));
  res.status(meta.status || 200).send(minify(template({ title: meta.title, description: meta.description, manifest, domain, url, content }), { collapseWhitespace: true }));
});
server.listen(3000);