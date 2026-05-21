---
title: "Setup vscode snippet for projects"
description: "Setup vscode snippet for projects - description"
date: "2026-05-21T08:03:08.666Z"
tags: ["vscode", "snippets", "productivity"]
author: "thatonevikash"
social:
  {
    github: "https://github.com/thatonevikash",
    linkedin: "https://www.linkedin.com/in/thatonevikash/",
    x: "https://x.com/thatonevikash",
  }
---

## Need of snippets

Working within a project, your main goal to make the entire setup clean and consist.

- Uniform naming conventions
- Similar folder structure
- Code writing patterns

much more...

### What does snippets do?

Snippets are like auto completing a portion of code block which looks minimal but it present most within the code or codebase.

In my case, I wanted to make the code structure beautiful using the comments to separate code blocks.

```jsx
export const metadata = {
  title: "thatonevikash/docs",
};

// -----------------------------------------------------------

function Content({ data }) {
  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <Details
        author={data.author}
        tags={data.tags}
        updatedAt={data.updatedAt}
      />
    </main>
  );
}

// -----------------------------------------------------------

function Details({ author, tags, updatedAt }) {
  return (
    <section>
      <p>
        <strong>Author:</strong> {author}
      </p>

      <p>
        <strong>Updated:</strong> {updatedAt}
      </p>

      <div>
        <strong>Tags:</strong>

        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// -----------------------------------------------------------

export default function Page() {
  const data = {
    title: "VSCode Snippets",
    description: "Setup reusable snippets for faster development.",
    author: "Vikash Kumar",
    updatedAt: "May 21, 2026",
    tags: ["vscode", "snippets", "productivity"],
  };

  return (
    <>
      <Content data={data} />
    </>
  );
}
```

> [!TIP]
> You're not going to generate these comment manually everytime.

### How to add snippet?

For generating the comment divider pressing the `-` multiple times is not a better way to do this.

Copy and Pasting it across the entire codebase is not also an optimal solution.

**More Collaborators = Multiple Machines**

> [!IMPORTANT]
> This snippet will work within vscode.
>
> Your default snippets can not be triggered by any other machine. ( **if you set it in default `settings.json`** )

**Steps**

- create `.vscode` folder at root of your codebase.

- create a file as `.vscode/style.code-snippets`

> [!NOTE]
> `*.code-snippets` extension to be considered as snippet file.

- define the snippet rules

```json
{
  "divider": {
    "scope": "javascript,typescript,typescriptreact",
    "prefix": "---",
    "body": ["// -----------------------------------------------"],
    "description": "insert a divider"
  }
}
```

**Happy coding 💖**
