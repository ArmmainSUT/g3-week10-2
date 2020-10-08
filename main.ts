input.onButtonPressed(Button.A, function () {
    for (let list of ["AKANE"]) {
        basic.showString("" + (list))
        basic.pause(1000)
    }
})
basic.forever(function () {
    for (let value of [0, 30, 60, 90, 120, 150, 180, 150, 120, 90, 60, 30]) {
        pins.servoWritePin(AnalogPin.P0, value)
        basic.pause(100)
    }
})
