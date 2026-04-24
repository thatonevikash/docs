---
title: "JavaScript for Beginner"
description: "In JavaScript, We create variables to hold data. Variables are like containers in which we store some data."
date: "2024-11-14"
tags: ["programming", "programming in javascript", "basics of programming"]
---

## JavaScript

In JavaScript, We print values using `console`

```js
console.log("Hello World!");
```

### Variables

In JavaScript, We create variables to hold data. Variables are like containers in which we store some data.

**Const**<br/>
For creating a constant we have only one keyword that is `const`

```js
const userId = 198;
```

Constants are unchangable variables, so that by mistaken your variable should not change by you or others.

> [!NOTE]\
> We can write variable name in different manners.\
> `userId` is very common style of writing name of the variable, we can write it in another style as well like `user_id`, `user_Id`
>
> It totally depends on the user or programmer, How he/she wants to write the name.\
> But make sure you are using an readable variable name\
> eg. `a = 198` is not comes under the good pratice instead you can write `myNumber = 198`

**Let and Var**<br/>
For creating a changeable variable we have two keywords `let` and `var`.

In modern JavaScript, We only use `let` keyword for defining changeable variable not `var`.

```js
let userName = "vikash";
var userEmail = "vikash@google.com";
```

Prefer not to use `var`<br/>
`var` has issues with block scope and functional scope.

> [!IMPORTANT]\
> A block means
>
> ```js
> {
>   // Code block
> }
> ```
>
> In JavaScript we use blocks in `if-else`, `loop`s and `function`s
>
> ```js
> if (condition) {
>
> }
>
> for (start; end; increment/decrement) {
>
> }
>
> function () {
>
> }
> ```

**Comments**<br/>
Unlike another languages, In JavaScript we can also write comments.<br/>
Comments are ignored by the compiler.

```js
// Single line comment

/*
Multiline

comments
*/
```

> [!NOTE]\
> If you are using a code editor like VS Code.\
> Then you can comment lines very efficiently\
> Select the lines and `ctrl` + `/` ( `cmd` + `/` )

### Standard code and Importance of code readablity

As we discussed to standardize the JavaScript code ECMAScript International writes standards.<br/>
For the browser how they will treat the code
`"use strict"`

```js
"use strict";

// above statement ensures that your source code will be treated as newer version of javascript
```

> [!WARNING]\
> `alert("Hello")` statement won't work when we execute our script file using `node.js`\
> It only works when you are on the broswer's console or running your script on the browser.

In the coding, it always recommended that your code should readable.

```js
console.log(3 + 3);

console.log("javascript");
console.log("Vikash");
```

The above examples are not comes under the good practice.<br/>

> [!IMPORTANT]\
> Our main goal to write the code readable, Code readablity should be high.

### Data Types

In other programming languages like `C#` and `C++`, there is a most important concept of **Call by Value** and **Call by Reference**.

In the very top level data types are categorized based on how a data value will be stored in memory, and how they can be accessed by the user.

Here we have two category - `Primitive` ( Call by value ) and `Reference` | Non-primitive ( Call by reference )

**Call by value**: A copy of original value to be passed.<br/>
**Call by reference**: Original value to be passed.

**Primitive data types**

- `number` ( 198, 143, 1.45 ), Range 2^53 - 1
- `bigint` ( 198n ), trading, stock market, reddit like websites
- `string` ( "vikash", 'kumar' )
- `boolean` ( `true` / `false` )
- `null` ( standalone value | dataType = `Object` )
- `undefined` ( dataType )
- `symbol` ( unique )

We have a `typeof` method for investigation, what kind of data type we are storing in a variable.<br/>
There are two ways to write typeof method as

```js
console.log(typeof 198);

console.log(typeof 198);
```

List of types of data types

```js
console.log(typeof "vikash"); // string
console.log(typeof 187); // number
console.log(typeof 198n); // bigint
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined

console.log(typeof Object()); // object
console.log(typeof Array()); // object
console.log(typeof String()); // string
console.log(typeof function () {}); // functional object
```

**Symbol data type**<br/>
A symbol in JavaScript is a unique, immutable data type that is often used to create unique identifiers for properties on objects. Unlike strings, symbols are not comparable by value, meaning two symbols created with the same description are not considered equal.

```js
const id = Symbol(12);

const anotherId = Symbol(12);

console.log(id === anotherId); // false
```

### Conversions

It is possible to convert data types in JavaScript.<br/>
eg. `number` -> `string` | `string` -> `number` | `number` -> `boolean` | `string` -> `boolean` | `boolean` -> `string` | `boolean` -> `number`

**Why we need conversion**?<br/>
Most of the time browser returns a string value to user.<br/>
Whenever we fetch some data from an API. ( eg. Weather API )

Conversion will not become a problem if you know what will be the expected result after conversion.

We have `Number()` for converting values in number.

```js
let score = "21";

let scoreInNumber = Number(score);

console.log(scoreInNumber); // 21
console.log(typeof scoreInNumber); // number
```

**Conversion List of Number**
| Value | Converted Value |
| :--- | :--- |
| `Number`("21") | 21 |
| `Number`("21xyz") | NaN |
| `Number`(null) | 0 |
| `Number`(undefined) | NaN |
| `Number`(true) | 1 |
| `Number`(false) | 0 |
| `Number`({ }) | NaN |
| `Number`([ ]) | 0 |

> [!IMPORTANT]\
> JavaScript converts data type, but values may not certain.
>
> When JavaScript unable to convert the values into number, it returns a `NaN` ( Not a Number ).

We have a `Boolean()` for converting values in boolean.

```js
let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // false
console.log(typeof booleanIsLoggedIn); // boolean
```

**Conversion List of Boolean**
| Value | Converted Value |
| :--- | :--- |
| `Boolean`(" ") | false |
| `Boolean`("vikash") | true |
| `Boolean`(1) | true |
| `Boolean`(0) | false |
| `Boolean`(null) | false |
| `Boolean`(undefined) | false |
| `Boolean`({ }) | true |
| `Boolean`([ ]) | true |
| `Boolean`(function (){}) | true |

Similarly, We have `String()` for converting values in string.

```js
let myString = 2;

let myStringValue = String(myString);

console.log(myStringValue); // "2"
console.log(typeof myStringValue); // string
```

**Conversion List of string**
| Value | Converted Value |
| :--- | :--- |
| `String`(2) | "2" |
| `String`(null) | "null" |
| `String`(undefined) | "undefined" |
| `String`(true) | "true" |
| `String`(false) | "false" |

**Here are some special cases**.<br/>
When we try to convert datatype of an object

```js
let myString = {};

let myStringValue = String(myString);

console.log(myStringValue); // [object Object]
console.log(typeof myStringValue); // string

console.log(`Hello${myStringValue}World`); // Hello[object Object]World
```

When we try to convert datatype of an array

```js
let myString = [];

let myStringValue = String(myString);

console.log(myStringValue); //
console.log(typeof myStringValue); // string

console.log(`Hello${myStringValue}World`); // HelloWorld
```

### Operations

Operations are used to manipulate data stored in a variable.

```js
let value = 3;
let negValue = -value;

console.log(negValue); // -3
```

We have many types of mathematical operations to perform on the variables.<br/>

```js
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 ** 3); // 8
console.log(2 / 2); // 1
console.log(2 % 2); // 0
```

> [!NOTE]\
> Modulas ( `%` ) operator calculates the remainder after division.\
> eg. `5 % 2 => 1`.
>
> Double astrik ( `**` ) operator calculates the exponential value.\
> eg. `3 ** 2 => 9`

**Addition operator with `string`s**

```js
let str1 = "hello";
let str2 = " vikash";

let str3 = str1 + str2;

console.log(str3); // hello vikash
```

> [!NOTE]\
> `str1 - str2` not possible 😅

We have already talked about **explicit** conversion.<br/>

```js
let userId = "198";
let userIdInNumber = Number(userId);

console.log(userIdInNumber); // 198
console.log(typeof userIdInNumber); // number
```

**Problems with implicit conversion**<br/>
In implicit conversion `string`s are very powerful.

```js
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12

console.log(1 + "2" + 2); // 122
console.log(1 + 2 + "2"); // 32
```

> [!IMPORTANT]\
> Until a `string` datatype appears all the numbers are treated as `number`.\
> But once the expression get any `string` value all the rest numbers will be treated as `string`.

**Writing mathematical expressions**<br/>
In JavaScript it is complicated to predict the result of a messy expression.
eg. `( 3 + 4 * 5 % 3 )`<br/>
There is no any certainity in the above expression. Instead we can use more parenthesis for a more certain result.

```js
console.log(3 + ((4 * 5) % 3)); // Wrong approach to write expressions

console.log((3 + 4 * 5) % 3); // More reliable approach to write expressions
```

Some more expressions are written as<br/>
`+true` and `+""`

```js
console.log(+true); // 1  ( Prefer not to use in programming )
console.log(+""); // 0  ( Prefer not to use in programming )
```

#### PostFix and PreFix operators

PostFix and PreFix operators work on single value.

```js
let gameCounter = 10;

console.log(++gameCounter); // 11
console.log(gameCounter++); // 11
```

Here you are thinking that both the operators did the same work but they works differently.

| Value: gameCounter = 10 | Current value | Passed value |
| :---------------------- | :------------ | :----------- |
| gameCounter             | 10            | 10           |
| ++gameCounter           | 11            | 11           |
| gameCounter++           | 11            | 12           |
| ++gameCounter           | 13            | 13           |
| gameCounter--           | 13            | 12           |
| --gameCounter           | 11            | 11           |

> We print only current values in the console

### Comparisons

Comparisons are used to compare between two values or expressions.<br/>
Comparison operators return a **boolean** value ( `true`/`false`). Most of the logic of the programming based on comparison. In conditionals ( `if-else` ) and `loop`s.

List of comparisons

```js
console.log(2 > 4); // false
console.log(2 >= 4); // false
console.log(2 < 4); // true
console.log(2 <= 4); // true
console.log(2 == 4); // false
console.log(2 != 4); // true
```

Here is an example of bad comparing practice

```js
console.log("2" > 1); // true
console.log("02" > 2); // true
```

> [!WARNING]\
> Makesure you are comparing similar datatype variable so that your result may not be unexpected.

Have a look on an special type of comparison with `null` 👀

```js
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
```

An unexpected result will occur if we compare value with `null`.

> [!IMPORTANT]\
> The reason is that an equality check `==` and comparisons `>` , `<` , `>=` , `<=` work differently
>
> Comparisons convert null to a number, treating it as 0 that's why\
> ( `null >= 0` ) is `true`\
> ( `null > 0` ) is `false`

Don't worry!<br/>
Let's look the Comparison with `undefined`

```js
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
```

**Strict checking**<br/>
JavaScript can compare between two different data type variable. Due to this functionality of JavaScript, we may face unexpected error.

```js
console.log("3" == 3); // true
```

In the above expression we are comparing an `string` data type with a `number` data type. Because traditional equlity check ( `==` ) only perform the comparison based on the value, Not data type.

JavaScript should not proceed the comparison.
To prevent this type of comparison we use strict checking.

```js
console.log("3" === 3); // false
```

> [!NOTE]\
> Strict checking compare between not only values but also data type of the variables.

#### Written with 💖 by _thatonevikash_!
