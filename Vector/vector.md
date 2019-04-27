# Simple 2D Vector math

Every time You want to make even a simple game You have to use vector mathematics.

I present to You the simplest possible approach to vectors with a list of every function You will ever need.

You'll find here not only code but also explanation and examples of where and how to use those functions.

# Table of contents
1. [What is vector](#what-is-vector)
2. [Use cases](#use-cases)
3. [Vector functions](#vector-functions)

## What is vector

## Use cases

## Vector functions

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

## Functions

### Create (new vector)
// There's no need to use function.
// Use [x, y] to create vector.
/* export function create (x, y) {
  return [x, y]
} */


### zero
// There's no need to use function.
// Use [0, 0] to create zero vecotr.
/* export function zero () {
  return [0, 0]
} */

## unit

// There's no need to use function.
// Use [1, 1] to create unit vetor.
/* export function unit () {
  return [1, 1]
} */

## clone

## add

## subtract