/**
 * 2D vector in less than 1 kB
 *
 * https://github.com/xem/mini2Dphysics/blob/gh-pages/index.html
 */

export const Vec = (x, y) => ({ x, y })
export const add = (a, b) => Vec(a.x + b.x, a.y + b.y)
export const subtract = (a, b) => add(a, scale(b, -1))
export const multiply = (a, b) => Vec(a.x * b.x, a.y * b.y)
export const divide = (a, b) => Vec(a.x / b.x, a.y / b.y)
export const scale = (a, scalar) => Vec(a.x * scalar, a.y * scalar)
export const length = a => dot(a, a) ** 0.5
export const distance = (a, b) => length(subtract(a, b))
export const dot = (a, b) => a.x * b.x + a.y * b.y
export const cross = (a, b) => a.x * b.y - a.y * b.x
export const normalize = a => scale(a, 1 / (length(a) || 1))
export const project = (a, b) => scale(b, dot(a, b) / dot(b, b))
export const angle = (a) => Math.atan2(a.y, a.x)
export const rotate = (a, angle, g = Vec(Math.sin(angle), Math.cos(angle))) =>
  Vec(cross(a, g), dot(a, g))
export const angle2 = (a, b) => angle(subtract(b, a))
export const rotate2 = (a, origin, angle) =>
  add(origin, rotate(subtract(a, origin), angle))
