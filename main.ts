import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "My coils spun the moment you walked up — press B7, I'll drop something sweet. Fair warning: I'm already stuck on you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
