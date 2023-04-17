function vitmoteur3 (angleinitial: number, anglefinal: number) {
    for (let index = 0; index <= Math.abs(angleinitial - anglefinal); index++) {
        if (anglefinal > angleinitial) {
            pins.servoWritePin(AnalogPin.P2, angleinitial + index)
        } else if (anglefinal < angleinitial) {
            pins.servoWritePin(AnalogPin.P2, angleinitial - index)
        }
        basic.pause(10)
    }
    anglemoteur3 = anglefinal
}
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
        vitmoteur3(anglemoteur3, 180)
    } else if (input.buttonIsPressed(Button.B)) {
        pins.servoWritePin(AnalogPin.P2, 35)
        vitmoteur3(anglemoteur3, 35)
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
        pins.servoWritePin(AnalogPin.P0, 135)
        vitmoteur1(anglemoteur1, 135)
    } else if (input.buttonIsPressed(Button.B)) {
        pins.servoWritePin(AnalogPin.P0, 40)
        vitmoteur1(anglemoteur1, 40)
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
    if (input.buttonIsPressed(Button.A)) {
        pins.servoWritePin(AnalogPin.P1, 135)
        vitmoteur2(anglemoteur2, 135)
    } else if (input.buttonIsPressed(Button.B)) {
        pins.servoWritePin(AnalogPin.P1, 40)
        vitmoteur2(anglemoteur2, 40)
    }
}
function vitmoteur2 (angleinitial: number, anglefinal: number) {
    for (let index = 0; index <= Math.abs(angleinitial - anglefinal); index++) {
        if (anglefinal > angleinitial) {
            pins.servoWritePin(AnalogPin.P1, angleinitial + index)
        } else if (anglefinal < angleinitial) {
            pins.servoWritePin(AnalogPin.P1, angleinitial - index)
        }
        basic.pause(10)
    }
    anglemoteur2 = anglefinal
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
let anglemoteur2 = 0
let anglemoteur1 = 0
let anglemoteur3 = 0
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # # . # #
    # # . # #
    `)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P0, 90)
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
    } else if (input.buttonIsPressed(Button.B)) {
        Moteur2()
    } else if (input.isGesture(Gesture.Shake)) {
        Moteur3()
    }
})
