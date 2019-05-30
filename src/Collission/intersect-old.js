// https://github.com/noonat/intersect/blob/master/src/intersect.ts

export function intersectAABB (box) {
  var dx = box.pos.x - this.pos.x
  var px = (box.half.x + this.half.x) - abs(dx)
  if (px <= 0) {
    return null
  }
  var dy = box.pos.y - this.pos.y
  var py = (box.half.y + this.half.y) - abs(dy)
  if (py <= 0) {
    return null
  }
  var hit = new Hit(this)
  if (px < py) {
    var sx = sign(dx)
    hit.delta.x = px * sx
    hit.normal.x = sx
    hit.pos.x = this.pos.x + (this.half.x * sx)
    hit.pos.y = box.pos.y
  } else {
    var sy = sign(dy)
    hit.delta.y = py * sy
    hit.normal.y = sy
    hit.pos.x = box.pos.x
    hit.pos.y = this.pos.y + (this.half.y * sy)
  }
  return hit
}

export class Point {
  constructor (x = 0, y = 0) {
    this.x = x
    this.y = y
  }
}

export class Hit {
  constructor (collider) {
    this.collider = collider
    this.pos = new Point()
    this.delta = new Point()
    this.normal = new Point()
    this.time = 0
  }
}

export function abs (value) {
  return Math.abs(value)
}

export function sign (value) {
  return value < 0 ? -1 : 1
}
