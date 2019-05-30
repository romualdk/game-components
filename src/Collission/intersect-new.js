const X_AXIS = 'x'
const Y_AXIS = 'y'

const Hit = {}

export function intersectAABB (box) {
  let distanceX = this.distanceTo(box, X_AXIS)
  let contactDistanceX = this.contactDistanceTo(box, X_AXIS)

  if (distanceX > contactDistanceX) {
    return false
  }

  let distanceY = this.distanceTo(box, Y_AXIS)
  let contactDistanceY = this.contactDistanceTo(box, Y_AXIS)

  if (distanceY > contactDistanceY) {
    return false
  }

  let penetrationX = contactDistanceX - distanceX
  let directionX = this.directionTo(box, X_AXIS)

  let penetrationY = contactDistanceY - distanceY
  let directionY = this.directionTo(box, Y_AXIS)

  let hit = new Hit(this)

  if (penetrationX < penetrationY) {
    hit.delta.x = directionX * penetrationX
    hit.normal.x = directionX
    hit.position.x = this.position.x + (directionX * this.half.x)
    hit.position.y = box.position.y
  } else {
    hit.delta.y = directionY * penetrationY
    hit.normal.y = directionY
    hit.position.x = box.position.x
    hit.position.y = this.position.y + (directionY * this.half.y)
  }
}
