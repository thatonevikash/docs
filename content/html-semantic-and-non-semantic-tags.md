---
title: "HTML Semantic & Non-semantic Tags"
description: "Semantic tags are crucial for SEO, why do we need to structure a website with semantic tags for better SEO presence"
date: "2023-05-21"
tags: ["semantic tags", "non-semantic tags"]
author: "thatonevikash"
social:
  {
    github: "https://github.com/thatonevikash",
    linkedin: "https://www.linkedin.com/in/thatonevikash/",
    x: "https://x.com/thatonevikash",
  }
---

## Semantic and Non-semantic tags

Do you know?<br/>
_Every website you visit has one similarity._

Layout, they have layout.

For the entire website what data should be visible on the screen.

**Should it contain**? 🤔<br/>
A Header, A Hero and A Footer...

Gottcha: _`The layoutting technique comes into existence.`_

### What is Layout?

In simple words layout is the organized HTML elements to build any website.

```html
<body>
  <header>HEADER</header>
  <main>
    <section>HERO</section>
  </main>
  <footer>FOOTER</footer>
</body>
```

The above block is defining an website which has a Header, a Section within Main and a Footer.<br/>
This organized tags are giving a clear understanding that the website contains three parts as _`header`_, _`footer`_ & _`main`_.

### Crucial role of Layout

You may create layout using semantic or non-semantic tags.

> [!IMPORTANT]
> Semantic tags are self explanatory tags and great for browser to identify.
>
> Non-semantic tags are less explanatory tags and poor for browser to identify.

<details>
<summary>Semantic tags</summary>

```html
<body>
  <header>
    <h1>Docs.dev</h1>
    <ul>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </header>
  <main>
    <section>
      <h2>Hero section</h2>
      <p>This is hero section</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 | Docs.dev</p>
  </footer>
</body>
```

</details>

<details>
<summary>Non-semantic tags</summary>

```html
<body>
  <div>
    <h1>Docs.dev</h1>
    <ul>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
  <div>
    <div>
      <h2>Hero section</h2>
      <p>This is hero section</p>
    </div>
  </div>
  <div>
    <p>&copy; 2024 | Docs.dev</p>
  </div>
</body>
```

</details>

> [!TIP]
> But the most important thing is your content, What you are offering.
> If your content is unique then your website will stand.
>
> _SEO will detect it._ 😎

#### Written with 💖 by _thatonevikash_!
