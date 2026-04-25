---
title: "JavaScript Basics"
description: "Explore the world of web with JavaScript. Why JavaScript exists in this world?"
date: "2024-11-09"
tags: ["coding", "What is the right path?"]
author: "thatonevikash"
social:
  {
    github: "https://github.com/thatonevikash",
    linkedin: "https://www.linkedin.com/in/thatonevikash/",
    x: "https://x.com/thatonevikash",
  }
---

## JavaScript

**JavaScript: The dynamic language of the web.**

<img src="/icons/ic-javascript.svg" height="95px" align="left">

JavaScript is a programming language that brings web pages to life.<br/>
It's the core technology of the web, working alongside HTML and CSS.<br/>
While HTML structures the content and CSS styles it.<br/>
JavaScript adds _interactivity_ and _dynamic behaviour_.

---

### What can we do with JavaScript ?

- **Create interactive elements**: `button`s, `menu`s, `slider`s, etc.
- **Animate graphics and images**: Create engaging visual effects.
- **Update content dynamically**: Load new data without reloading the page.
- **Build web applications**: Complex applications like online stores, social media platforms.
- **Develop server side applications**: Using Node.js, you can create backend systems.

### Key characterstics of JavaScript

- **Lightweight and Interpreted**: It runs directly in the browser without needing compilation.
- **Cross-Platform**: Works on different operating systems and browsers.
- **Object-Oriented**: Supports object-based programming for code organization.
- **Dynamically types**: You don't need to specify data types beforehand.

## History of JavaScript

### Birth of JavaScript

- **1995**<br/>_Brenden Eich_, a programmer at **Netscape Communication**, created JavaScript in a mere 10 days. Initially named **Mocha**, it was later renamed **LiveScript** and finally **JavaScript** to capitalize on the popularity of **Java** at the time.

- **Purpose**<br/>Designed to add interactivity to static HTML pages, JavaScript brought life to the web.

### Early years and Browser's war

- **1996 - 1997**<br/>JavaScript gained rapid adoption with **Netscape Navigator** and **Internet Explorer** becoming the dominant browsers.

- **Browser wars**<br/>Intense competiton between **Netscape** and **Microsoft** led to different JavaScript implementations, causing compatiblity issues.

- **ECMAScript**<br/>To standardize the language, _ECMA International_ created **ECMAScript**, a specification for JavaScript.

### Growth and Maturity

- **1997 - 2000**<br/>The Document Object Model ( **DOM** ) and Dynamic HTML ( **DHTML** ) emerged, expanding JavaScript capablities.

- **2006 - 2010**<br/>**jquery** and other libraries simplified JavaScript development and popularized its use.

- **2009 - 2015**<br/>ECMAScript 5 and 6 introduced significant improvements, making JavaScript a more robust language.

### Modern JavaScript

- **2015 onwards**<br/>JavaScript has evolved rapidly, becoming a full-fledge language for building complex applications.

- **Node.js**<br/>Revolutionized server-side development with JavaScript, enabling full stack development.

- **Frameworks and Libraries**<br/>React, Angular, Vue, and others emerged, providing powerful tools for building user interfaces.

## Creation of server-side JavaScript

While JavaScript initially designed for the client-side, its versatility and popularity led to its expansion into server-side development.

### Early attempts

- **Before Node.js**<br/>Several attempts were made to run JavaScript on the server, but they lacked widespread adoption.

- **Challenges**<br/>Performance, scalablity, and ecosystem limitations hindered these early efforts.

### The rise of Node.js

- **2009**<br/>_Ryan Dahl_ released Node.js, a JavaScript runtime built on chrome's V8 Javascript engine.

- **Event-driven architecture**<br/>Node.js's non-blocking, event-driven approach made it highly efficient for handling concurrent connections.

- **Package ecosystem** ( **npm** )<br/>A vast collection of reusable modules accelerated development.

- **Full-Stack JavaScript**<br/>Developers could now use JavaScript for both front-end and back-end development.

### Impact of Node.js

- **Rapid growth**<br/>Node.js gained immense popularity, becoming a preferred choice for server-side development

- **Diverse application**<br/>Used for web servers, real-time applications, APIs, and more.

- **Ecosystem expansion**<br/>A thriving ecosystem of frameworks, libraries, and tools emerged.

### Beyond Node.js

- **Other options**<br/>While Node.js dominates the server-side JavaScript landscape, alternatives like Deno have emerged.

- **Continued evolution**<br/>JavaScript and Node.js are constantly evolving, with new features and improvements enhancing their capablities.

# You have to know!

### What is the difference between a normal text file and a source code file ?

Lets create a file as `test.js`

```js
console.log("vikash");
```

Inside the `test.js` file we have `console.log("vikash")` and each word has specific task or meaning on the programming.<br/>
`console` does a specific task when the source code executed on the software.

Lets create another file as `test.txt`

```
console.log("vikash")
```

But the main thing, which file can be executed, when we inject them into a software ( `compiler`/`interpreter` ).<br/>
This software has a task to identify the extension of file and perform actions according to the written source code.

Every programming language has a syntax to write their source code and every programming language comes with their extension.<br/>
eg. `.js`, `.java`, `.cpp`, `.py` and so on..

### Old style vs New style of learning JavaScript

In early days, People runs script using a HTML file.<br/>
They just simply create an `index.html` file and inside it they start a `<script>` tag for writing Javascript.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <script>
      console.log("Hello world!");
    </script>
  </body>
</html>
```

and executes the HTML file on the browser.<br/>
Because JavaScript is hidden inside for a long time in the browser.

But in the recent past<br/>
It emerged from the browser by _Ryan Dahl_.

Nowadays, we can execute our JavaScript code standalone like `python`, `java`, `c++` code.

### Lets talk about PC configuration and Softwares to run JavaScript

For running JavaScript, There is no any higher requirement. We can run our code directly on the browser.<br/>

1. Directly on browser's console

2. Install a runtime for JavaScript like `node.js`<br/>
   Once you download and installing, confirm it.

   ```bash
   node -v
   ```

3. Install a code editor ( IDE ) like `vs code`<br/>
   VS code is an IDE ( Integrated Development Environment ) provides multiple features like **auto indentation**, **code suggestion**, **Extension supports**, File tracking using **git** and **GitHub**, **Integrated Terminal**.

### Run your first JavaScript file

Create a directory where you want to store your JavaScript file, open it in vs code.

Lets create a file as `test.js` and write some code

```js
// test.js

console.log("hello world!");
```

Now look on the top of the vs code you will find Terminal, create a new terminal and execute the source file

```bash
node test.js
```

#### Written with 💖 by _thatonevikash_!
