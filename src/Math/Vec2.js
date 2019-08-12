/**
 * 2D vector in less than 1 kB
 *
 * https://github.com/xem/mini2Dphysics/blob/gh-pages/index.html
 */

export const Vec2 = (x, y) => ({ x, y })
export const add = (a, b) => Vec2(a.x + b.x, a.y + b.y)
export const subtract = (a, b) => add(a, scale(b, -1))
export const multiply = (a, b) => Vec2(a.x * b.x, a.y * b.y)
export const divide = (a, b) => Vec2(a.x / b.x, a.y / b.y)
export const scale = (a, scalar) => Vec2(a.x * scalar, a.y * scalar)
export const length = a => dot(a, a) ** 0.5
export const distance = (a, b) => length(subtract(a, b))
export const dot = (a, b) => a.x * b.x + a.y * b.y
export const cross = (a, b) => a.x * b.y - a.y * b.x
export const normalize = a => scale(a, 1 / (length(a) || 1))
export const project = (a, b) => scale(b, dot(a, b) / dot(b, b))
export const angle = (a) => Math.atan2(a.y, a.x)
export const rotate = (a, angle, g = Vec2(Math.sin(angle), Math.cos(angle))) =>
  Vec2(cross(a, g), dot(a, g))
