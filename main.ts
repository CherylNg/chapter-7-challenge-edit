let start = 0
let noise = 0
basic.forever(function () {
    start = input.runningTime()
    noise = 0
    while (input.runningTime() - start < 1000) {
        noise += edubitSoundBit.readSoundSensor()
        basic.pause(100)
    }
    noise = noise / 10
    if (noise > edubitPotentioBit.readPotValue() * 0.67 + 10) {
        edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
        edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    } else if (noise > edubitPotentioBit.readPotValue() * 0.33 + 10) {
        edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
        edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    } else {
        edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
        edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    }
    basic.pause(1000)
})
