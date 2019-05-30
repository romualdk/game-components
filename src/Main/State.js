class State {
  constructor () {
    this.time = 0
  }

  prepare () {}

  update (delta) {
    this.time += delta
  }

  render () {}
}

export default State
