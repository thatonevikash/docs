import fs from "fs";
import path from "path";
import chalk from "chalk";
import chokidar from "chokidar";

// -----------------------------------------------------------

// Paths
const CONTENT_DIR = "./content";
const COURSES_DIR = "./courses";

// -----------------------------------------------------------

/**
 * Converts "what-is-xml" to "What is xml"
 */
function formatTitle(slug) {
  if (!slug) return "";
  const spaced = slug.split("-").join(" ");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

/**
 * Converts "content\html" to "content/html"
 */
function slash(p) {
  return p.replace(/\\/g, "/");
}

// -----------------------------------------------------------

function markdownTemplate(title, isCourse = false) {
  let _title = title;
  if (isCourse) {
    _title = formatTitle(title.split("_")[1]);
  }

  return `---
title: "${_title}"
description: "${_title} - description"
date: "${new Date().toISOString()}"
tags: ["docs"]
author: "thatonevikash"
social:
  {
    github: "https://github.com/thatonevikash",
    linkedin: "https://www.linkedin.com/in/thatonevikash/",
    x: "https://x.com/thatonevikash",
  }
---

## ${_title}

`;
}

function metadataTemplate(title) {
  return `---
title: "${title}"
description: "${title} - description"
logo: ""
banner: ""
rootColor: "#e34f26"
---
`;
}

// -----------------------------------------------------------

// Initialize Watcher
const watcher = chokidar.watch([CONTENT_DIR, COURSES_DIR], {
  persistent: true,
  ignoreInitial: true,
  depth: 2,
});

watcher.on("add", (filePath) => {
  const normalizedContent = path.normalize(CONTENT_DIR);

  // Flow 1: Populate new Markdown files in ./content
  if (filePath.startsWith(normalizedContent) && filePath.endsWith(".md")) {
    const fileName = path.parse(filePath).name; // e.g., "what-is-xml"
    const title = formatTitle(fileName);

    // Only write if the file is empty to avoid overwriting content
    if (fs.readFileSync(filePath).length === 0) {
      fs.writeFileSync(filePath, markdownTemplate(title));
      console.log(
        `${chalk.bold.green("✓")} File: ${chalk.dim(slash(filePath))}`,
      );
    }
  }
});

watcher.on("add", (filePath) => {
  const normalizedContent = path.normalize(COURSES_DIR);

  // Flow 1: Populate new Markdown files in ./courses/*
  if (filePath.startsWith(normalizedContent) && filePath.endsWith(".md")) {
    const fileName = path.parse(filePath).name; // e.g., "what-is-xml"
    const title = formatTitle(fileName);

    // Only write if the file is empty to avoid overwriting content
    if (fs.readFileSync(filePath).length === 0) {
      fs.writeFileSync(filePath, markdownTemplate(title, true));
      console.log(
        `${chalk.bold.green("✓")} File: ${chalk.dim(slash(filePath))}`,
      );
    }
  }
});

watcher.on("addDir", (dirPath) => {
  const normalizedCourses = path.normalize(COURSES_DIR);
  const parentDir = path.dirname(dirPath);

  // Flow 2: Handle new sub-folders in ./courses
  if (parentDir === normalizedCourses) {
    const folderName = path.basename(dirPath);
    const metadataPath = path.join(dirPath, "metadata.md");
    const title = formatTitle(folderName);

    // Small delay ensures the OS has finished creating the directory
    setTimeout(() => {
      if (!fs.existsSync(metadataPath)) {
        fs.writeFileSync(metadataPath, metadataTemplate(title));
        console.log(`${chalk.bold.green("✓")} Directory: ${chalk.dim(slash(dirPath))}
  - Metadata: ${chalk.dim(slash(metadataPath))}`);
      }
    }, 100);
  }
});

// -----------------------------------------------------------

console.log(`\n${chalk.cyan("◆")} ${chalk.bold.cyan("Scaffold")} (Watcher)
- Content:\t${chalk.dim(`${CONTENT_DIR}/`)}
- Courses:\t${chalk.dim(`${COURSES_DIR}/`)}`);
