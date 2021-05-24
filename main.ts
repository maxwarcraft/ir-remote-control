// deze code zorgt dat de robot de opdrachten kan krijgen
let keuze = 0
let afstand = 0
irRemote.connectInfrared(DigitalPin.P11)
let strip = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB)
let val = 0
let val2 = 0
// deze code zorgt dat de robot auto niet botst
basic.forever(function () {
    afstand = turtleBit.ultra()
    if (afstand < 10) {
        keuze = randint(1, 2)
        if (keuze == 1) {
            turtleBit.Motor(LR.LeftSide, MD.Forward, 90)
            basic.pause(500)
            turtleBit.run(DIR.Run_back, 90)
        } else {
            turtleBit.Motor(LR.RightSide, MD.Forward, 90)
            basic.pause(500)
            turtleBit.run(DIR.Run_back, 90)
        }
    }
})
// deze code zorgt voor de motor
basic.forever(function () {
    val = irRemote.returnIrButton()
    if (val != 0) {
        val2 = val
        if (val2 == 70) {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            turtleBit.run(DIR.Run_back, 90)
        } else if (val2 == 68) {
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
            turtleBit.Motor(LR.LeftSide, MD.Forward, 85)
            basic.pause(350)
            turtleBit.run(DIR.Run_back, 90)
        } else if (val2 == 67) {
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
            turtleBit.Motor(LR.RightSide, MD.Forward, 85)
            basic.pause(350)
            turtleBit.run(DIR.Run_back, 90)
        } else if (val2 == 21) {
            strip.showColor(neopixel.colors(NeoPixelColors.Purple))
            turtleBit.Motor(LR.LeftSide, MD.Forward, 0)
            basic.pause(700)
            turtleBit.state(MotorState.stop)
        } else if (val2 == 64) {
            turtleBit.state(MotorState.stop)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    }
})
