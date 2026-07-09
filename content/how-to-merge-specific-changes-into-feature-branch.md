---
title: "How to merge specific changes into feature branch"
description: "How to merge specific changes into feature branch interactively"
date: "2026-07-09T10:53:57.619Z"
tags: ["github", "git branch", "merge branch"]
author: "thatonevikash"
social:
  {
    github: "https://github.com/thatonevikash",
    linkedin: "https://www.linkedin.com/in/thatonevikash/",
    x: "https://x.com/thatonevikash",
  }
---

## How to merge specific changes into feature branch

Have you ever found yourself working on a feature branch that is a few commits behind `main`, and you realize you need an update from `main`—but **only** for one specific file?

Worse yet, you’ve already made your own changes to that same file, so a simple copy-paste or full overwrite will destroy your progress.

Instead of merging the entire `main` branch or manually copying lines of code, Git has a built-in superpower for this exact scenario: **Interactive Patch Checkout**.

Here is a simple, step-by-step guide to using `git checkout -p` to selectively pull code line-by-line.

### The Core Command

```bash
git checkout -p origin/main -- path/to/file.js
```

### What does this mean?

`--path/to/file.js`: Restricts the operation strictly to this file.

`-p` (or `--patch`): Tells Git to break the differences between your branch and main into small, digestible blocks of code called "hunks". Git will ask you one by one whether you want to pull each hunk into your branch.

#### Step 1: Fetch the latest changes from Main

Before doing anything, make sure your local machine knows about the absolute latest updates on your remote repository.

```bash
git fetch origin main
```

#### Step 2: Make sure you are on your feature branch

Ensure you are working inside the branch where you want the changes to land.

```bash
git checkout your-feature-branch
```

#### Step 3: Run the interactive checkout command

Target the exact file you want to update from main.

```bash
git checkout -p origin/main -- path/to/file.js
```

#### Step 4: Review and choose your "Hunks"

Once you press Enter, Git will display the first block of differences. Green lines are additions from `main`, and red lines are deletions.

At the bottom of the terminal, you will see a prompt like this:

> Stage this hunk? [y, n, q, a, d, j, J, g, /, s, e, ?]:

Don't be intimidated by all the letters! You only need to know a few:

- `y` (yes): Pull this specific change from `main` into your file.

- `n` (no): Skip this change and keep your branch's version exactly as it is.

- `s` (split): If the block of code is too big, this splits it into even smaller pieces.

- `q` (quit): Stop the process entirely. Any hunks you already said y to will be saved.

Go through the file, choosing `y` or `n` for each section until you reach the end.
