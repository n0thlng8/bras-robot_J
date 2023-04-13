function Moteur3 () {
    basic.showLeds(`
        . # # . .
        # . . # .
        . . # . .
        # . . # .
        . # # . .
        `)
    basic.pause(2000)
    if (input.buttonIsPressed(Button.A)) {
        pins.servoWritePin(AnalogPin.P2, 180)
    } else if (input.buttonIsPressed(Button.B)) {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
}
function Moteur1 () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # . # . .
        . . # . .
        # # # # .
        `)
    basic.pause(2000)
    if (input.buttonIsPressed(Button.A)) {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else if (input.buttonIsPressed(Button.B)) {
        pins.servoWritePin(AnalogPin.P0, 0)
    }
}
function Moteur2 () {
    basic.showLeds(`
        . # # . .
        # . . # .
        . . # . .
        . # . . .
        # # # # .
        `)
    basic.pause(2000)
    if (input.buttonIsPressed(Button.B)) {
        pins.servoWritePin(AnalogPin.P1, 180)
    } else if (input.buttonIsPressed(Button.A)) {
        pins.servoWritePin(AnalogPin.P1, 0)
    }
}
function vitmoteur1 (angleinitial: number, anglefinal: number) {
    for (let index = 0; index <= Math.abs(angleinitial - anglefinal); index++) {
        if (anglefinal > angleinitial) {
            pins.servoWritePin(AnalogPin.P0, angleinitial + index)
        } else if (anglefinal < angleinitial) {
            pins.servoWritePin(AnalogPin.P0, angleinitial - index)
        }
        basic.pause(10)
    }
    anglemoteur1 = anglefinal
}
let anglemoteur1 = 0
basic.showLeds(`
    # # . # #
    # # . # #
    # . . . .
    # # . # #
    # # . # #
    `)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P0, 90)
anglemoteur1 = 90
pins.servoWritePin(AnalogPin.P1, 90)
pins.servoWritePin(AnalogPin.P2, 90)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.forever(function () {
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # . . . .
        `)
    if (input.buttonIsPressed(Button.A)) {
        Moteur1()
        vitmoteur1(anglemoteur1, 180)
    } else if (input.buttonIsPressed(Button.B)) {
        Moteur2()
    } else if (input.isGesture(Gesture.Shake)) {
        Moteur3()
    }
})
