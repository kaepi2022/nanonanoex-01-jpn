game_of_set = 0
Getplay = 0
Kasoku_ofset = 0
receivedNumber = 1
Player_type = 1

NanoProduct = 1   #製品(2セットで1)別に割り当てる番号
radio.set_group(NanoProduct) 

def title_screen():
    # wtf?! why is this error hapeninng?!
    # 待機モーション
    if game_of_set == 0:
                        basic.show_leds("""
                            . # . # .
                            . # . # .
                            . . . . .
                            # . . . #
                            . # # # .
                            """)
                        basic.pause(300)
                        basic.show_leds("""
                            . . . . #
                            # # . # .
                            . . . . #
                            # . . . .
                            . # # # .
                            """)
                        basic.pause(200)
                        basic.clear_screen()
                        katakana.set_scroll_time(30)
                        katakana.show_string("LONG PLESS AB TO PLAY")


def on_received_number(): #シリアル処理
    music.play(music.string_playable("G A B C5 C5 - - - ", 300),music.PlaybackMode.UNTIL_DONE)
    basic.show_leds("""
                    # # # # #
                    . # # . #
                    # # # # #
                    # . # . .
                    # # # . .
                    """)
    basic.pause(1500)
    Player_type = 2
radio.on_received_number(on_received_number)


while True:

        #プレイ開始を監視
        if input.button_is_pressed(Button.B) and game_of_set == 0:
            basic.clear_screen()
            game_of_set = 1
            radio.send_number(1)
            Player_type = 1
            music.play(music.string_playable("G A B C5 C5 - - - ", 300),music.PlaybackMode.UNTIL_DONE)
            basic.show_leds("""
                            # . # # #
                            # . # . #
                            # . # # #
                            # . # . .
                            # . # . .
                            """)
            basic.pause(1500)
        elif game_of_set != 1:
            title_screen()
                    

        #加速度センサーとプレイ中モーション
        reading = input.acceleration(Dimension.X)
        if reading > 100 and game_of_set == 1:
            # turn right
            RingbitCar.freestyle(-10, 10)
            basic.show_leds("""
                . # . . #
                # . . # .
                . . . . .
                # # . . .
                . . # # #
                """)
        elif reading < -100 and game_of_set == 1:
            # turn left
            RingbitCar.freestyle(10, -10)
            basic.show_leds("""
                # . . # .
                . # . . #
                . . . . .
                . . # # #
                # # . . .
                """)
        elif game_of_set == 1:
            reading = 0
            basic.show_leds("""
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                """)
            basic.pause(randint(500, 700))
            basic.show_leds("""
                . . . . .
                # # . # #
                . . . . .
                # . . . #
                . # # # .
                """)
                
        if input.logo_is_pressed():
            music.play(music.string_playable("C5 C5 A A - D D D ", 700),music.PlaybackMode.UNTIL_DONE)