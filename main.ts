let reading_front: number;
let reading_befor: number;
let speed_front: number;
let speed_befor: number;
function shape_ani(ani_num: number) {
    if (ani_num == 1) {
        basic.showLeds(`
                        . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
                        `)
        basic.showLeds(`
                        . # . . .
                        . . . # .
                        . # # # .
                        . . . # .
                        . # . . .
                        `)
    } else if (ani_num == 2) {
        basic.showLeds(`
                        . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
                        `)
        basic.showLeds(`
                        . . . # .
                        . # . . .
                        . # # # .
                        . # . . .
                        . . . # .
                        `)
    } else if (ani_num == 3) {
        basic.showLeds(`
                        . . # . .
                        . # # # .
                        # . # . #
                        . . #. .
                        . . # . .
                        `)
        basic.showLeds(`
                        . . . . .
                        . . # . .
                        . # # # .
                        # . # . #
                        . . . . .
                        `)
    } else if (ani_num == 4) {
        basic.showLeds(`
                        . . . . .
                        . . . . .
                        # # . . .
                        . . . . .
                        . . . . .
                        `)
        basic.pause(400)
        basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . # #
                        . . . . .
                        . . . . .
                        `)
        basic.pause(400)
    }
    
}

// 疲れたので寝る
while (true) {
    // デデドン!(絶望) - 一応クラクション
    if (input.logoIsPressed()) {
        music.play(music.stringPlayable("C5 C5 A A - D D D ", 1000), music.PlaybackMode.UntilDone)
    }
    
    reading_front = input.acceleration(Dimension.X)
    // 傾きを検知X座標(左右)
    reading_befor = input.acceleration(Dimension.Z)
    // 傾きを検知Z座標(前に)
    speed_front = reading_front * 1.5
    // 傾き度*1.5　から加速度を演算
    speed_befor = reading_befor * 1.5
    // 傾き度*1.5　から加速度を演算
    if (reading_front > 150) {
        //  turn right
        // 元は50,-50
        RingbitCar.freestyle(speed_front, -speed_front)
        shape_ani(1)
    } else if (reading_front < -150) {
        // アニメーション番号1を再生
        //  turn left
        // 元は-50,50
        RingbitCar.freestyle(-speed_front, speed_front)
        shape_ani(2)
    } else if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        // アニメーション番号1を再生
        // 元は100
        RingbitCar.freestyle(speed_befor, speed_befor)
        shape_ani(3)
    } else {
        // アニメーション番号1を再生
        //  何にもしてないときに実行する
        RingbitCar.freestyle(0, 0)
        shape_ani(4)
    }
    
}
