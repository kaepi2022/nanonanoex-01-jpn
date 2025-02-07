def shape_ani(ani_num):
    if ani_num == 1:
        basic.show_leds("""
                        . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
                        """)
        basic.show_leds("""
                        . # . . .
                        . . . # .
                        . # # # .
                        . . . # .
                        . # . . .
                        """)
    elif ani_num == 2:
        basic.show_leds("""
                        . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
                        """)
        basic.show_leds("""
                        . . . # .
                        . # . . .
                        . # # # .
                        . # . . .
                        . . . # .
                        """)
    elif ani_num == 3:
        basic.show_leds("""
                        . . # . .
                        . # # # .
                        # . # . #
                        . . #. .
                        . . # . .
                        """)
        basic.show_leds("""
                        . . . . .
                        . . # . .
                        . # # # .
                        # . # . #
                        . . . . .
                        """)
    elif ani_num == 4:
        basic.show_leds("""
                        . . . . .
                        . . . . .
                        # # . . .
                        . . . . .
                        . . . . .
                        """)
        basic.pause(400)
        basic.show_leds("""
                        . . . . .
                        . . . . .
                        . . . # #
                        . . . . .
                        . . . . .
                        """)
        basic.pause(400)

#疲れたので寝る
while True:

    #デデドン!(絶望) - 一応クラクション
    if input.logo_is_pressed():
        music.play(music.string_playable("C5 C5 A A - D D D ", 1000),music.PlaybackMode.UNTIL_DONE)
    
    
    reading_front = input.acceleration(Dimension.X)            #傾きを検知X座標(左右)
    reading_befor = input.acceleration(Dimension.Z)            #傾きを検知Z座標(前に)
    speed_front = reading_front * 1.5                          #傾き度*1.5　から加速度を演算
    speed_befor = reading_befor * 1.5                          #傾き度*1.5　から加速度を演算


    if reading_front > 150:
        # turn right
        #元は50,-50
        RingbitCar.freestyle(speed_front, -speed_front)
        shape_ani(1)        #アニメーション番号1を再生

    elif reading_front < -150:
        # turn left
        #元は-50,50
        RingbitCar.freestyle(-speed_front, speed_front)
        shape_ani(2)        #アニメーション番号1を再生

    elif input.button_is_pressed(Button.A) and input.button_is_pressed(Button.B):
        #元は100
        RingbitCar.freestyle(speed_befor, speed_befor)
        shape_ani(3)        #アニメーション番号1を再生
    else:
        # 何にもしてないときに実行する
        RingbitCar.freestyle(0, 0)
        shape_ani(4)        #アニメーション番号1を再生