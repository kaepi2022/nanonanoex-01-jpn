# Using Python 3.0

def Kasoku():
    global reading
    reading = input.acceleration(Dimension.X)
    if reading > 20:
        # a=right
        Kasoku_ofset = 1
        music.play(music.string_playable("- - - E - F - - ", 120),
            music.PlaybackMode.UNTIL_DONE)
    elif reading < -20:
        # a=left
        Kasoku_ofset = 2
        music.play(music.string_playable("- - - E - F - - ", 120),
            music.PlaybackMode.UNTIL_DONE)
    else:
        # a=y=x
        Kasoku_ofset = 0
while True:

    reading = 0         #プレイヤーの種類を示す値を保存
    Player_type = 1     # 加速計用関数
    Kasoku_ofset = 0    # プレイヤーの状態保存用
    game_of_set = 0     #ゲームの開始状態を保存
    
    Kasoku()            # 加速計の傾き状態を保存

    if Player_type == 1 and game_of_set == 1:
        basic.show_leds("""
            # . # # #
            # . # . #
            # . # # #
            # . # . .
            # . # . .
            """)
    elif Player_type == 2 and game_of_set == 1:
        basic.show_leds("""
            # # # # #
            . # # . #
            # # # # #
            # . # . .
            # # # . .
            """)
    else:
        basic.show_leds("""
                    . # . # .
                    . # . # .
                    . . . . .
                    # . . . #
                    . #  # # .
                    """)
        basic.pause(300)
        basic.show_leds("""
                        . . . . #
                        # # . # .
                        . . . . #
                        # . . . .
                        . #  # # .
                        """)
        




    if Kasoku_ofset == 1:
        RingbitCar.freestyle(-10, 10)
    elif Kasoku_ofset == 2:
        RingbitCar.freestyle(10,-10)
