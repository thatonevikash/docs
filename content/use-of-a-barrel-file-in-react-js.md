---
title: "Use of a barrel file in react js"
description: "Why do we need a barrel file in modern react codebases, how do we use it?, Why modern react codebases loves the barrel file"
date: "2026-05-24T15:49:55.506Z"
tags: ["reactjs", "export", "barrel file", "modern pattern"]
author: "thatonevikash"
social:
  {
    github: "https://github.com/thatonevikash",
    linkedin: "https://www.linkedin.com/in/thatonevikash/",
    x: "https://x.com/thatonevikash",
  }
---

## Use of a barrel file (`index.js` or `index.ts`) with in modern react codebases.

> **A barrel file is nothing just a `index.js` or `index.ts` file within a folder.**

It is useful to make `import` statements shorter and beautiful.

```js
// src/components/avatar/index.js

export * from "./avatar.jsx";

export { classes as avatarClasses } from "./classes.js";
```

```js
// src/components/avatar/avatar.jsx

export function Avatar() {
  return (
    // Your component
  )
}

// src/components/avatar/classes.js

export const classes = {
  root: 'avatar__root',
}
```

```jsx
// with barrel file
import { Avatar } from "@components/avatar";

// without barrel file
import { Avatar } from "@components/avatar/avatar";

export default function Page() {
  return (
    <>
      <Avatar src="/assets/user.png" />
    </>
  );
}
```

> [!WARNING]
> named `export` and `default export` behaves differently in modules.

**If your component looks like this**

```jsx
export default function Avatar() {
  return (
    // Your component
  )
}
```

> [!TIP]
>
> ```js
> export { default } from "./avatar";
> ```
>
> Will fix the barrel file exporting.

> **Modern react codebases prefers named export for component.**
