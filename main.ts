input.onPinPressed(TouchPin.P1, function () {
    basic.showString(morse.encode("Hello world"))
    basic.showString("!")
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
pins.setAudioPinEnabled(true)
music.setBuiltInSpeakerEnabled(true)
loops.everyInterval(1, function () {
    if (led.point(4, 2)) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
loops.everyInterval(1, function () {
    if (led.point(4, 3)) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
loops.everyInterval(1, function () {
    if (led.point(4, 1)) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
loops.everyInterval(1, function () {
    if (led.point(4, 4)) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        led.stopAnimation()
        basic.clearScreen()
        music.stopAllSounds()
    }
})
basic.forever(function () {
    serial.writeValue("P0 (ANALOG)", pins.analogReadPin(AnalogReadWritePin.P0))
})
basic.forever(function () {
    serial.writeValue("P0 (DIGITAL)", pins.digitalReadPin(DigitalPin.P0))
})
