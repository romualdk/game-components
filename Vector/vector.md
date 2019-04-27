# Simple 2D Vector math

Every time You want to make even a simple game You have to use vector mathematics.

I present to You the simplest possible approach to vectors with a list of every function You will ever need.

You'll find here not only code but also explanation and examples of where and how to use those functions.

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

### Your first vector

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
