var gamepads = {};

function gamepadHandler(event, connecting) {
  var gamepad = event.gamepad;
  // Note:
  // gamepad === navigator.getGamepads()[gamepad.index]

  if (connecting) {
    gamepads[gamepad.index] = gamepad;
  } else {
    delete gamepads[gamepad.index];
  }

  console.log(gamepad)
  let startEffect = { duration: 100, weakMagnitude: 1.0 };
  let continueEffect = { startDelay: 500, duration: 100, weakMagnitude: 1.0 };

  gamepad.vibrationActuator.playEffect("dual-rumble", startEffect).then(() => {
      gamepad.vibrationActuator.playEffect("dual-rumble", continueEffect)
  });
}

window.addEventListener("gamepadconnected", function(e) { gamepadHandler(e, true); }, false);
window.addEventListener("gamepaddisconnected", function(e) { gamepadHandler(e, false); }, false);
