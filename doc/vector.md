Simple 2D Vector math
=======================
for amateur programmers
-----------------------

# Introduction

Every time you want to make even most simple game you have to use vector mathematics.

I present to you the simplest possible approach to vectors with a list of every function you will ever need.

You'll find here not only code but also explanation and examples of where and how to use those functions.

Code examples here are JavaScript but since this is the most simple approach, you can easily use it in every other programming language.

---

# Table of contents
1. [What is vector?](#what-is-vector?)
   - [Your first vector](#your-first-vector)
   - [Zero vector](#zero-vector)
   - [Unit vector](#unit-vector)
2. [Common use cases](#common-use-cases)
   - [Distance between points](#distance-between-points)
   - [Angle between points](#angle-between-points)
   - [Moving object position](#moving-object-position)
3. [Vector properties](#vector-properties)
   - [Angle](#angle)
   - [Length](#length)
   - [Distance](#distance)
   - [Squared length](#squared-length)
   - [Squared distance](#squared-distance)
4. [Vector functions](#vector-functions)
   - [Add](#add)
   - [Subtract](#subtract)
   - [Multiply](#multiply)
   - [Divide](#divide)
   - [Scale](#scale)
   - [Invert](#invert)
   - [Normalize](#normalize)
   - [Rotate](#rotate)
   - [Project](#project)
   - [Dot product](#dot-product)
   - [Cross product](#cross-product)
   - [Lowest value](#lowest-value)
   - [Highest value](#highest-value)
   - [Clamp](#clamp)
   - [Linear interpolation](#linear-interpolation)
   - [Easing](#easing)
99. [__drafts__](#drafts)

---

## What is vector?

In mathematics vector is an object with angle and length.

But in practice it's just a point. And a point is just a pair of two numbers: *x* and *y*.

In mathematics a point is written as *(x, y)*.

For example you can see point *(3, 5)* below.

IMAGE OF A POINT

And vector is nothing more as line from origin *(0, 0)* to that point.

IMAGE OF A VECTOR

### Your first vector

Many different programming libraries have classes and objects to store vectors and its functions.

But since we said that vector is just a point, we can store information about point in an old good simple array.

In javascript code below gives you the simplest vector you can make.

```javascript
[x, y] // creates new vector from x and y variables (numbers)

[3, 5] // creates a (3, 5) vector
```

### Zero vector

In mathematics the zero vector is written as *0* or as a point *(0, 0)*.

For us it's just an array with two *zeros*.

```javascript
[0, 0] // the zero vector
```

The funny thing about it is that it has no length and no direction.

It has interesting behavior when you add or multiply it.

If you add vector *0* to any vector *A* then you get the vector *A*.

Just like with simple numbers: *A + 0 = A*.

```javascript
// add - a function which adds two vectors

let a = [3, 5] // any vector
let zero = [0, 0] // the zero vector

let b = add(a, zero) // b = a = [3, 5]
```

If you multiply vector *0* by any vector *A* then you get vector *0*.

Just like with simple numbers: *A * 0 = 0*.

```javascript
// multiply - a function which multiplies two vectors

let a = [3, 5] // any vector
let zero = [0, 0] // the zero vector

let b = multiply(a, zero) // b = zero = [0, 0]
```

### Unit vector

NOPE - THIS IS NOT UNIT VECTOR

UNIT VECTOR = LENGTH = 1

In mathematics the unit vector is written as *1* or as a point *(1, 1)*.

For us it's just an array of two *ones*.

```javascript
[1, 1] // the unit vector
```
It has interesting behavior when you multiply it.

If you multiply vector *1* by any vector *A* then you get vector *A*.

Just like with simple numbers: *A * 1 = A*.

```javascript
// multiply - a function which multiplies two vectors

let a = [3, 5] // any vector
let unit = [1, 1] // the unit vector

let b = multiply(a, unit) // b = a = [3, 5]
```

## Common use cases?

### Distance between points

### Angle between points

### Moving object position

## Vector properties

### Angle

The mathematic formula to calculate angle between two vectors is:
1. Calculate dot product
2. Calculate magnitudes of vectors
3. Calculate angle between vectors

But the most simple way to calculate angle is to use `atan2` function.

It returns angle in radians.

Horizontal angle α.

```javascript
alpha = Math.atan2(y, x)
// y is the first argument
```

Vertical angle β.

```javascript
beta = Math.atan2(x, y)
```

example

```javascript
let x = 3
let y = 5

let alpha = Math.atan2(y, x) // ≈ 1.03 rad ≈ 59.04°
let beta = Math.atan2(x, y) // ≈ 0.54 rad ≈ 30.96°
```

example with `Vect` library

```javascript
let v = [3, 5]

let alpha = Vect.angle(v) // ≈ 1.03 rad ≈ 59.04°
let beta = Vect.verticalAngle(v) // ≈ 0.54 rad ≈ 30.96°
```

|  x |  y |  α - radians  | α - degrees |
|----|----|-----------|----------|
|  0 |  0 |     0     |     0°   |
|  1 |  0 |     0     |     0°   |
|  0 |  1 |   π / 2   |    90°   |
| -1 |  0 |     π     |   180°   |
|  0 | -1 |  - π / 2  |   -90°   |

### Length

Also called *magnitude*.

Calculation is based on Pythagorean theorem (https://en.wikipedia.org/wiki/Pythagorean_theorem).

```javascript
length = Math.sqrt(x * x + y * y)
```

example

```javascript
let x = 3
let y = 5

let length = Math.sqrt(x * x + y * y)
// ≈ 5.83
```

example with `Vect` library

```javascript
let v = [3,5]

let length = Vect.length(v)
// ≈ 5.83
```

### Distance

Distance between two points is nothing more than length of a vector from one point to another point.

```javascript
x = x2 - x1
y = y2 - y1

distance = Math.sqrt(x * x + y * y)
```

example

```javascript
let x1 = 3
let y1 = 5

let x2 = 7
let y2 = 8

let x = x2 - x1 // = 4
let y = y2 - y2 // = 3

let distance = Math.sqrt(x * x + y * y)
// = 5
```

example with `Vect` library
```javascript
let v1 = [3, 5]
let v2 = [7, 8]

let distance = Vect.distance(v1, v2)
// = 5
```

### Squared length

### Squared dinstace

## Vector functions

### Add vector

Add components separately.

```javascript
x = x1 + x2
y = y1 + y2
```

example

```javascript
let x1 = 3
let y1 = 5

let x2 = 2
let y2 = 4

let x = x1 + x2 // = 5
let y = y1 + y2 // = 9
```

example with `Vect` library

```javascript
let v1 = [3, 5]
let v2 = [2, 4]

let v = Vect.add(v1, v2) // = [5, 9]
```

### Subtract vector

Subtract components separately.

```javascript
x = x1 - x2
y = y1 - y2
```

example

```javascript
let x1 = 3
let y1 = 5

let x2 = 2
let y2 = 4

let x = x1 - x2 // = 1
let y = y1 - y2 // = 1
```

example with `Vect` library

```javascript
let v1 = [3, 5]
let v2 = [2, 4]

let v = Vect.subtract(v1, v2) // = [1, 1]
```

### Multiply

To multiply vectors you have to multiply its components separately.

```javascript
x = x1 * x2
y = y1 * y2
```

example

```javascript
let x1 = 3
let y1 = 5

let x2 = 3
let y2 = 2

let x = x1 * x2 // = 3 * 3 = 9
let y = y1 * y2 // = 5 * 2 = 10
```

example with `Vect` library

```javascript
let v1 = [3, 5]
let v2 = [3, 2]

let v = Vect.multiply(v1, v2) // = [9, 10]
```

### Divide

To divide vectors you have to divide its components separately.

Remember to not divide by 0.

```javascript
x = x1 / x2
y = y1 / y2
```

### Rotate

### Invert

```javascript
x = x1 * -1
y = y1 * -1
```

### Normalize

Normalizing is dividing components by vector's length.

Which means that components can range from -1 to 1.

```javascript
x = x1 / length
y = y1 / length
```

It is used to get the direction.

### Project

### Dot product

### Cross product

### Lowest value

### Highest value

### Absolute value

### Clamp

### Linear interpolation

### Easing

## __drafts__

### Points

#### Calculating distance between two points


#### Calculating angle between two points

### Objects

#### Calculating velocity and acceleration of a moving object

integrate velocity (v) and position (s) with semi-implicit euler integrator

having:
* p - position
* a - acceleration
* v - velocity
* t - time

equations:

* v = v + a * t
* p = p + v * t

become:

* v = add(v, scale(a, t))
* p = add(p, scale(v, t))
