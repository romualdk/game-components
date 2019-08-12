/**
 * 2D vector lib
 *
 * https://github.com/xem/mini2Dphysics/blob/gh-pages/index.html
 */

export const Vec2 = (x, y) => ({ x, y })
export const length = a => dot(a, a) ** 0.5
export const add = (a, b) => Vec2(a.x + b.x, a.y + b.y)
export const subtract = (a, b) => add(a, scale(b, -1))
export const scale = (a, scalar) => Vec2(a.x * scalar, a.y * scalar)
export const dot = (a, b) => a.x * b.x + a.y * b.y
export const cross = (a, b) => a.x * b.y - a.y * b.x
export const normalize = a => scale(a, 1 / (length(a) || 1))
export const distance = (a, b) => length(subtract(a, b))
export const rotate = (a, origin, angle) => {
  const f = subtract(a, origin)
  const g = Vec2(Math.sin(angle), Math.cos(angle))
  return add(origin, Vec2(cross(f, g), dot(f, g)))
}
