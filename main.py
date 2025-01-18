def on_button_pressed_a():
    basic.show_string(morse.encode("Hi world"))
input.on_button_pressed(Button.A, on_button_pressed_a)

pins.set_audio_pin_enabled(True)

def on_every_interval():
    if led.point(4, 4):
        music.play(music.tone_playable(247, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
loops.every_interval(1, on_every_interval)

def on_every_interval2():
    if led.point(4, 1):
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
loops.every_interval(1, on_every_interval2)

def on_every_interval3():
    if led.point(4, 2):
        music.play(music.tone_playable(294, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
loops.every_interval(1, on_every_interval3)

def on_every_interval4():
    if led.point(4, 3):
        music.play(music.tone_playable(330, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
loops.every_interval(1, on_every_interval4)

def on_forever():
    while input.button_is_pressed(Button.B):
        basic.clear_screen()
        music.stop_all_sounds()
basic.forever(on_forever)
