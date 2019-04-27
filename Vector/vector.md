Simple 2D Vector math
=======================
for amateur programmers
-----------------------

Every time You want to make even most simple game you have to use vector mathematics.

I present to you the simplest possible approach to vectors with a list of every function you will ever need.

You'll find here not only code but also explanation and examples of where and how to use those functions.

Code examples here are JavaScript but since this is the most simple approach, you can easily use it in every other programming language.

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

## What is vector?

In mathematics vector is an object with angle and length.

But in practice it's just a point. And a point is just a pair of two numbers: x and y.

In mathematics a point is written as (x, y).

For example you can see point (3, 5) below.

IMAGE OF A POINT

And vector is nothing more as line from origin (0, 0) to the point.

IMAGE OF A VECTOR

### Your first vector

Many different programming libraries have classes and objects to store vectors and its functions.

But since we said that vector is just a point, we can store information about point in an old good simple two elements array.

In javascript code below gives you the simplest vector you can make.

```javascript
[x, y] // creates new vector from x and y variables (numbers)

[3, 5] // creates a (3, 5) vector
```

### Zero vevtor

### Unit vector

## Common use cases?

### Distance between points

### Angle between points

### Moving object position

## Vector properties

### Angle

### Length

### Distance

### Squared length

### Squared dinstace

## Vector functions

### Add

### Subtract

### Multiply

### Divide

### Scale

### Rotate

### Invert

### Normalize

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
