## Docs.dev - Type Alias and Interfaces

### Type Alias
Type Alias are used to create a new type for your variables.

```ts
type UserId = string | null

let userId: UserId = "_user98"
```
> [!tip]\
> For creating a new type, you can use union `( | )` symbol to group multiple types for any variable.

`type`s can be used to create a face for an object.
```ts
type User = {
    name: string | null;
    email: string
}

const newUser: User = {
    name: "codezaura",
    email: "codezaura@xyz.com"
}
```

`type`s can be extended using intersection operator for an object.
```ts
type User = {
    name: string;
    email: string;
}

type Auth = User & {
    role: "ADMIN" | "USER" | "MODERATOR"
}

let newUser: User = {
    name: "codezaura",
    email: "codezaura@xyz.com"
}

let permittedUser: Auth = {
    role: "ADMIN",
    name: "codezaura",
    email: "codezaura@xyz.com"
}
```

### Interfaces
`interface`s are mainly used to create a face for an object.

```ts
interface User {
    name: string,
    email: string
}

const newUser:User = {
    name: "codezaura",
    email: "codezaura@xyz.com"
}
```

`interface`s can also be extended using `extends` keyword.
```ts
interface User {
    name: string,
    email: string
}

interface Auth extends User {
    role: "ADMIN" | "USER"
}

const newUser:Auth = {
    name: "codezaura",
    email: "codezaura@xyz.com",
    role: "ADMIN"
}
```