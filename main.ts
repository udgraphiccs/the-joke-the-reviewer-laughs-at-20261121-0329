import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
const joke =
  "Since I hired an AI coding agent, I no longer write bugs \u2014 I just approve them faster than I ever could have written them myself.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
