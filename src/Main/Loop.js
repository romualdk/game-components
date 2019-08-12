/* global performance, requestAnimationFrame, cancelAnimationFrame */

const ONE_SECOND = 1000 // ms
const FPS = 60 // frames per second
const DELTA = ONE_SECOND / FPS
const STEP = 1 / FPS

class Loop {
  constructor (state) {
    this.raf = null
    this.setState(state)
    // this.start()
  }

  setState (state) {
    this.state = state
  }

  start () {
    this.now = performance.now()
    this.last = this.now
    this.elapsed = 0
    this.accumulator = 0

    requestAnimationFrame(this.update)
  }

  stop () {
    cancelAnimationFrame(this.raf)
  }

  update () {
    this.raf = requestAnimationFrame(this.update)

    this.now = performance.now()
    this.elapsed = this.now - this.last
    this.last = this.now

    if (this.elapsed > ONE_SECOND) {
      return
    }

    this.state.prepare()

    // fixed time step frame update
    this.accumulator += this.elapsed

    while (this.accumulator >= DELTA) {
      this.state.update(STEP)
      this.accumulator -= DELTA
    }

    this.state.render()
  }
}

export default Loop
