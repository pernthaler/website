import path from "path";
import fs from "fs";
import glob from "glob";
import { Compiler } from "webpack";

export type Meta = {
  version: string,
  pages: string[]
};

export default class Plugin {
  apply(compiler: Compiler) {
    compiler.hooks.done.tap("Plugin", () => {
      const meta: Meta = {
        version: "0.0.0",
        pages: []
      };

      const json = fs.readFileSync(path.join(process.cwd(), "package.json"), "utf-8");
      meta.version = JSON.parse(json).version;

      const dir = path.join(process.cwd(), "src", "client", "pages");
      const files = glob.sync(path.join(dir, "**/*"));
      for (const file of files) {
        if (!path.basename(file).startsWith("_")) {
          meta.pages.push("/" + path.relative(dir, file).split(".")[0].replace("index", ""));
        }
      }

      fs.writeFileSync(path.join(process.cwd(), "build", "meta.json"), JSON.stringify(meta));
    });
  }
}