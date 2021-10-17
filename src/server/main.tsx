import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import ejs from "ejs";
import { minify } from "html-minifier";
import App from "../client/App";

const server = express();
const manifest = fs.readFileSync(path.join(__dirname, "static", "manifest.json"), "utf-8");
const template = fs.readFileSync(path.join(__dirname, "views", "index.ejs"), "utf-8");
const assets = JSON.parse(manifest);

server.use(express.static(path.join(__dirname, "static")));
server.get("/", (req, res) => {
  const domain = "http" + (req.secure ? "s" : "") + "://" + req.get("host");
  const url = domain + req.path;
  const component = ReactDOMServer.renderToString(<App/>);
  const html = ejs.render(template, { assets, domain, url, component });
  res.send(minify(html, { collapseWhitespace: true }));
});
server.listen(3000);