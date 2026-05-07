---
title: "What is HTML?"
description: "What is HTML?, Why do we use HTML?, What is the role of HTML in Web Development?"
date: "2023-05-10"
tags: ["what is html", "role of html"]
author: "thatonevikash"
social:
  {
    github: "https://github.com/thatonevikash",
    linkedin: "https://www.linkedin.com/in/thatonevikash/",
    x: "https://x.com/thatonevikash",
  }
---

## What is HTML?

**Did you know?**

HTML is the backbone of every website you visit? It's the magic code that structures web pages and makes all the content come to life!

**HTML stands for Hypertext Markup Language**

### Overview

- **Markup Language**

  HTML is a markup language that uses tags to define elements within a document. These tags, enclosed in angle brackets (< >), tell the browser how to interpret and display the content.

- **Document Structure**

  An HTML document typically consists of two main parts: the head and the body.
  - The **head** contains meta-information about the document, such as the title, character encoding, and linked stylesheets or scripts.
  - The **body** contains the actual content of the document, such as text, images, links, and other multimedia elements.

- **Tags and Elements**

  HTML documents are constructed using a variety of tags. Tags come in pairs, with an opening tag and a closing tag. The content of the element is placed between these tags.

  For example

  ```html
  <p>This is a paragraph</p>
  ```

- **Attributes**

  Tags can also include attributes, which provide additional information about an element. Attributes are placed within the opening tag.

  For example

  ```html
  <a href="https://www.example.com">Visit Example</a>
  ```

- **Common HTML Elements**

  HTML includes a variety of elements for structuring content, such as headings (`<h1>, <h2>, ...`), paragraphs (`<p>`), lists (`<ul>, <ol>, <li>`), links (`<a>`), images (`<img>`), and more.

- **Version History**

  HTML has evolved over the years, with various versions. HTML5 is the latest version and includes features for multimedia, form handling, and improved semantics.

- **Web Browsers**

  All major web browsers, including Chrome, Firefox, Safari, and Edge, support HTML. Browsers interpret HTML code and render it visually for users.

- **Role in Web Development**

  HTML is often used in conjunction with Cascading Style Sheets (CSS) and JavaScript to create dynamic, visually appealing, and interactive web pages.

---

### Look👀!

**How a most common HTML document looks like?**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

> [!NOTE]
> The above lines of code are commonly known as **BOILERPLATE**.\
> We can write it with the help of the emmet abbreviation- `! + enter` | `html5 + enter`

### Overview of Boilerplate

```html
<!DOCTYPE html>
```

> [!NOTE]
> `<!DOCTYPE html>` tells to the browser this document is an HTML document.

```html
<html lang="en"></html>
```

> [!NOTE]
> `<html lang="en">` defining the code is written in English language.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
```

> [!IMPORTANT]
> `<head>` contains meta-information about the HTML document itself.\
> `<meta>` metadata about the HTML document, such as character set, viewport settings, and description.\
> `<title>` Sets the title of the HTML document, which appears in the browser's title bar or tab.

```html
<link rel="stylesheet" href="styles.css" />
```

> `<link>` Links external resources like stylesheets (CSS) or icons.

```html
<link rel="icon" href="favicon.ico" type="image/x-icon" />
```

> `<style>` contains internal CSS styles for the document.

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
</style>
```

> `<script>` Includes scripts or references to external script files (JavaScript).

```html
<script src="script.js"></script>
```

```html
<body></body>
```

> [!IMPORTANT]
> `<body>` whatever we write inside it, will reflect on the browser's main screen.

---

### Comments in HTML

```html
<!-- Write your comment here! -->
```

#### Written with 💖 by _thatonevikash_!
