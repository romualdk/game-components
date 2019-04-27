# Simple 2D Vector math

Every time You want to make even a simple game You have to use vector mathematics.

I present to You the simplest possible approach to vectors with a list of every function You will ever need.

You'll find here not only code but also explanation and examples of where and how to use those functions.

# Table of contents
1. [What is vector](#what-is-vector)
2. [Use cases](#use-cases)
3. [Vector properties](#vector-properties)
  3.1. [Angle](#angle)
  3.2. [Length](#length)
  3.3. [Distance](#distance)
  3.4. [Squared length](#squared-length)
  3.5. [Squared distance](#squared-distance)
4. [Vector functions](#vector-functions)
99. [__drafts__](#drafts)

## What is vector

## Use cases

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

### Scale (multiply by scalar)

### Rotate

### Invert

### Normalize

### Project

### Dot product

### Cross product

### Lowest value (min)

### Highest value (max)

### Absolute value (abs)

### Clamp

### Linear interpolation

### Easing (non-linear interpolation)

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
