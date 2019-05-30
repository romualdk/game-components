/* global HTMLCanvasElement */

class Screen {
  constructor (width, height, element) {
    if (element instanceof HTMLCanvasElement) {
      this.canvas = document.getElementById(element)
    } else {
      this.canvas = document.createElement('canvas')
    }

    this.context = this.canvas.getContext('2d')
    this.canvas.width = width
    this.canvas.height = height
  }

  init () {

  }

  reset () {

  }

  resize () {

  }

  draw () {

  }
}

export default Screen
