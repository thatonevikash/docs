---
title: "How to push tag on github"
description: "Learn about the best approach of pushing a tag on github, unlike separate push for tag and package version it is better to combine them into one single command."
date: "2026-05-29T14:07:47.977Z"
tags: ["docs", "tags", "github tags", "package version"]
author: "thatonevikash"
social:
  {
    github: "https://github.com/thatonevikash",
    linkedin: "https://www.linkedin.com/in/thatonevikash/",
    x: "https://x.com/thatonevikash",
  }
---

## Best way to push tag on `github`

### Noob approach of pushing a tag

If you are using the command as

```bash
# lists all tags
git tag

# creates a new tag
git tag v0.1.1
```

Then you push on that tag

```bash
# push on github
git push origin v0.1.1
```

> [!IMPORTANT]
> It doesn't update your `package.json`\
> It doesn't anchor your package version.

Now have to manually update the package version and push it separately.

```bash
# 1. update package version
npm version patch

# 2. push a separate commit
git push
```

> [!NOTE]
> patch for `0.0.*`\
> minor for `0.*.0`\
> major for `*.0.0`

### Pro approach of pushing a tag

```bash
# 1. Bumps version, updates package.json, commits, and tags locally
npm version patch

# 2. Pushes the commit to main AND pushes the newly created tag simultaneously
git push origin main --follow-tags
```

**Thanks for reading 💖!**
