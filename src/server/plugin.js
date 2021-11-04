const path = require("path");
const fs = require("fs");
const glob = require("glob");

class Plugin {
  apply(compiler) {
    compiler.hooks.done.tap("Plugin", () => {
      const dir = path.join(process.cwd(), "src", "client", "pages");
      const files = glob.sync(path.join(dir, "**/*"));

      const pages = [];
      for (const file of files) {
        if (!path.basename(file).startsWith("_")) {
          pages.push("/" + path.relative(dir, file).split(".")[0].replace("index", ""));
        }
      }

      fs.writeFileSync(path.join(process.cwd(), "build", "pages.json"), JSON.stringify(pages));
    });
  }
}

module.exports = Plugin;