---
title: "Best way of writing ternary operator"
description: "learn about the best usecase example of ternary operator within jsx"
date: "2026-05-07"
tags: ["jsx", "ternary operator", "conditional rendering"]
author: "thatonevikash"
social:
  {
    github: "https://github.com/thatonevikash",
    linkedin: "https://www.linkedin.com/in/thatonevikash/",
    x: "https://x.com/thatonevikash",
  }
---

## Work with 'Ternary operators `? :`'

Suppose you are gonna render a block of code in react, but have conditional prop.

```jsx
/**
 * <LucideIcon /> is a custom component wrapper
 * to extend the styling over base icon
 **/
import { LucideIcon } from "@/components/icon";

import { CircleCheck, Circle } from "lucide-icon";

function App() {
  const isVerified = true;

  return (
    <div>
      <p>Check you are verified</p>
      <LucideIcon />
    </div>
  );
}
```

There is going to render a Circle if `isVerified = false` or CircleCheck if `isVerified = true`

```jsx
const isVerified = true;

return (
  <div>
    <p>Check you are verified</p>
    {isVerified ? (
      <LucideIcon icon={CircleCheck} />
    ) : (
      <LucideIcon icon={Check} />
    )}
  </div>
);
```

The above function block seems pretty fine and works perfectly.

Means renderring the expected icon.

But, This is still failing in aspects of a clean react code.

**Why?**

Look at the code closely haven't you found a mistake here.<br />
That is the repetition of a component.

> [!TIP]
> React is built for eliminating code repetition.
>
> Breaking down code into smaller reusuable component.

The same above function block we can write in more simpler way.

```jsx
const isVerified = true;

return (
  <div>
    <p>Check you are verified</p>

    <LucideIcon icon={isVerified ? CircleCheck : Check} />
  </div>
);
```

#### Written with 💖 by _thatonevikash_!
