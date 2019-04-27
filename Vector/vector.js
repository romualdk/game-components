/**
 * 2D Vector math
 *
 * Euclidean vectors math
 * also helpful with points (i.e. distance, angle)
 *
 * i.e. integrate velocity (v) and position (s) with semi-implicit euler integrator
 *
 * having:
 *
 * p - position
 * a - acceleration
 * v - velocity
 * t - time
 *
 * equations:
 *
 * v = v + a * t
 * p = p + v * t
 *
 * become:
 *
 * v = add(v, scale(a, t))
 * p = add(p, scale(v, t))
 */

// There's no need to use function.
// Use [x, y] to create vector.
/* export function create (x, y) {
  return [x, y]
} */

// There's no need to use function.
// Use [0, 0] to create zero vecotr.
/* export function zero () {
  return [0, 0]
} */

// There's no need to use function.
// Use [1, 1] to create unit vetor.
/* export function unit () {
  return [1, 1]
} */

export function clone (a) {
  return [a[0], a[1]]
}

export function add (a, b) {
  return [
    a[0] + b[0],
    a[1] + b[1]
  ]
}

export function subtract (a, b) {
  return [
    a[0] - b[0],
    a[1] - b[1]
  ]
}

export function multiply (a, b) {
  return [
    a[0] * b[0],
    a[1] * b[1]
  ]
}

export function divide (a, b) {
  return [
    a[0] / b[0],
    a[1] / b[1]
  ]
}

export function scale (a, scalar) {
  return [
    a[0] * scalar,
    a[1] * scalar
  ]
}

export function rotate (a, angle) {
  let x = a[0]
  let y = a[1]
  let cos = Math.cos(angle)
  let sin = Math.sin(angle)

  return [
    x * cos - y * sin,
    x * sin + y * cos
  ]
}

export function invert (a) {
  return [
    -a[0],
    -a[1]
  ]
}

export function dot (a, b) {
  return a[0] * b[0] + a[1] * b[1]
}

export function cross (a, b) {
  return a[0] * b[1] - a[1] * b[0]
}

export function length (a) {
  let x = a[0]
  let y = a[1]

  return Math.sqrt(x * x + y * y)
}

export function squaredLength (a) {
  let x = a[0]
  let y = a[1]

  return x * x + y * y
}

export function distance (a, b) {
  let x = b[0] - a[0]
  let y = b[1] - a[1]

  return Math.sqrt(x * x + y * y)
}

export function squaredDistance (a, b) {
  let x = b[0] - a[0]
  let y = b[1] - a[1]

  return x * x + y * y
}

export function normalize (a) {
  let x = a[0]
  let y = a[1]
  let len = x * x + y * y

  if (len > 0) {
    len = Math.sqrt(len)

    return [
      x / len,
      y / len
    ]
  }

  return [x, y]
}

export function project (a, b) {
  let coefficient = (a[0] * b[0] + a[1] * b[1]) / (b[0] * b[0] + b[1] * b[1])

  return [
    coefficient * b[0],
    coefficient * b[1]
  ]
}

export function angle (a) {
  return Math.atan2(a[1], a[0])
}

export function min (a, b) {
  return [
    Math.min(a[0], b[0]),
    Math.min(a[1], b[1])
  ]
}

export function max (a, b) {
  return [
    Math.max(a[0], b[0]),
    Math.max(a[1], b[1])
  ]
}

export function abs (a) {
  return [
    Math.abs(a[0]),
    Math.abs(a[1])
  ]
}

export function clamp (a, lower, upper) {
  return [
    Math.min(Math.max(a[0], lower[0]), upper[0]),
    Math.min(Math.max(a[1], lower[1]), upper[1])
  ]
}

export function lerp (a, b, t) {
  return [
    (1 - t) * a[0] + t * b[0],
    (1 - t) * a[1] + t * b[1]
  ]
}

export function ease (a, b, t, func) {
  return lerp(a, b, func(t))
}
