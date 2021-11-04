import chalk from "chalk";

export const box = (...lines: string[]) => {
  let length = 0;
  for (const line of lines) {
    if (line.length > length) {
      length = line.length;
    }
  }
  let separator = "";
  for (let i = 0; i < length + 2; i++) {
    separator = separator + chalk.white("\u2500");
  }

  console.log(chalk.white("\u250c") + separator + chalk.white("\u2510"));

  for (const line of lines) {
    let spacing = "";
    for (let i = 0; i < length - line.length; i++) {
      spacing = spacing + " ";
    }
    console.log(chalk.white("\u2502") + " " + line + spacing + " " + chalk.white("\u2502"));
  }

  console.log(chalk.white("\u2514") + separator + chalk.white("\u2518"));
};