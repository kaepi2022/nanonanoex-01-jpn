# Using Python 3.0

# プレイヤーの種類を示す値を保存
Player_type = 1 # 加速計用関数
Kasoku_ofset = 0 # プレイヤーの状態保存用
game_of_set = 0 # ゲームの開始状態を保存


def title_screen():
    music.play(music.string_playable("G E F F C C A A ", 120),music.PlaybackMode.UNTIL_DONE)
    
    #待機モーション
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

while True:
    title_screen()

    #Start Title
    if Player_type == 1 and game_of_set == 1:
        basic.show_leds("""
                            . # . # .
                            . # . # .
                            . . . . .
                            # . . . #
                            . # # # .
                            """)
    elif Player_type == 2 and game_of_set == 1:
        basic.show_leds("""
            # # # # #
            . # # . #
            # # # # #
            # . # . .
            # # # . .
            """)


        reading = input.acceleration(Dimension.X)

        if reading > 20 and game_of_set == 1:
            RingbitCar.freestyle(-10, 10)

        elif reading < -20 and game_of_set == 1:
            RingbitCar.freestyle(10, -10)

        else:
            print("Hello")
            

