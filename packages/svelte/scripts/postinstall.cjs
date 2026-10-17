/* eslint-disable no-console */

const ANSI = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  cyan: "\x1b[36m",
};

const bold = (s) => `${ANSI.bold}${s}${ANSI.reset}`;
const cyan = (s) => `${ANSI.cyan}${s}${ANSI.reset}`;

const pkg = bold("@exinoicons/svelte");
const repoUrl = cyan("https://github.com/exinoicons/svelte");

const lines = [
  "",
  `Thanks for installing ${pkg}!`,
  "",
  "If you love Exinoicons, please consider starring ⭐ the repo:",
  "",
  repoUrl,
  "",
  "Happy building!",
  "",
];

console.log(lines.join("\n"));
