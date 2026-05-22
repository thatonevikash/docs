---
title: "Best structure for list rendering in jsx"
description: "Learn the concepts of top down approach of data flowing and implementation, enhances the structure for list rendering in jsx, instead of deploying checks at bottom layer."
date: "2026-05-14T17:35:05.460Z"
tags: ["array structure", "jsx", "list rendering"]
author: "thatonevikash"
social:
  {
    github: "https://github.com/thatonevikash",
    linkedin: "https://www.linkedin.com/in/thatonevikash/",
    x: "https://x.com/thatonevikash",
  }
---

## Best structure for list rendering in jsx

In this post, I am going to talk about best structure for list rendering in jsx.

Before discussing about it have a look on the code below 👇

```jsx
function User({ name, role }) {
  return (
    <li>
      <h2>Name: {name}</h2>
      <h3>Role: {role}</h3>
    </li>
  );
}

function Page() {
  return (
    <ul>
      <User name="vikash" role="author" />
      <User name="akash" role="co-author" />
      <User name="laxman" role="publisher" />
    </ul>
  );
}
```

In the above code block, I am rendering the `<User />` component trice.

> [!NOTE]
> In programming, we should eliminate the repetition.

### Arrays in action

If we look closely `<User />` component, we will see `name`, `role` are the values that are changing only.

Which can be kept in an array.

```js
const users = [
  { name: "vikash", role: "author" },
  { name: "akash", role: "co-author" },
  { name: "laxman", role: "publisher" },
];
```

And here list rendering comes into action.

### What is list rendering in `jsx` ?

In simple terms list rendering is nothing just iterate a component over an array. 😁

```jsx
const users = [
  // ...
];

function User({ name, role }) {
  // ...
}

function Page() {
  return (
    <ul>
      {users.map((user) => (
        <User key={user.name} name={user.name} role={user.name} />
      ))}
    </ul>
  );
}
```

Just iterate the component for array values.

> [!IMPORTANT]
> Take care of the `return` statement in arrow functions ( implicit `return` )
>
> In this case,
>
> ```js
> // implicit return
> Array.map((i) => i);
>
> // explicit return
> Array.map((i) => {
>   return i;
> });
> ```
>
> The moment you start a `{ }` next after arrow, you'll have to `return` the value.

### Structure discussion

Suppose you're rendering a list which contain some fields but wanted to modify some of list item.

- only vikash has the access.
- give him hasAccess=true.

```jsx
const users = [
  { id: 1, name: "vikash", role: "developer", experience: "3" },
  { id: 2, name: "akash", role: "tester", experience: "1.5" },
  { id: 3, name: "rohan", role: "tester", experience: "2" },
  { id: 4, name: "sneha", role: "consumer", experience: "1" },
  { id: 5, name: "madhuri", role: "market", experience: "2" },
];

function Page() {
  return (
    <ul>
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name}
          role={user.role}
          experience={user.experience}
          hasAccess={user.name === "vikash"}
        />
      ))}
    </ul>
  );
}
```

At a glance it looks fine but, what if I want to have more hasAccess people.

```jsx
function Page() {
  return (
    <ul>
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name}
          role={user.role}
          experience={user.experience}
          hasAccess={["vikash", "sneha", "akash"].includes(user.name)}
        />
      ))}
    </ul>
  );
}
```

> [!WARNING]
> `Array.includes()` looks fine but it has to manually mutate the value for a new user access.

### Best structure

Instead of adding checks at the bottom layer, keep the check on top layer.

```jsx
const users = [
  {
    id: 1,
    name: "vikash",
    role: "developer",
    experience: "3",
    hasAccess: true,
  },
  {
    id: 2,
    name: "akash",
    role: "tester",
    experience: "1.5",
  },
  {
    id: 3,
    name: "rohan",
    role: "tester",
    experience: "2",
  },
  {
    id: 4,
    name: "sneha",
    role: "consumer",
    experience: "1",
    hasAccess: true,
  },
];

function Page() {
  return (
    <ul>
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name}
          role={user.role}
          experience={user.experience}
          hasAccess={user?.hasAccess}
        />
      ))}
    </ul>
  );
}
```

> [!TIP]
> follow the top down approach to make it well maintainable code.

**Thanks for reading! 💖**
