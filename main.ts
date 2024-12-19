let reading: number;
let Player_type: number;
let Kasoku_ofset: number;
let game_of_set: number;
//  Using Python 3.0
function Kasoku() {
    let Kasoku_ofset: number;
    
    reading = input.acceleration(Dimension.X)
    if (reading > 20) {
        //  a=right
        Kasoku_ofset = 1
        music.play(music.stringPlayable("- - - E - F - - ", 120), music.PlaybackMode.UntilDone)
    } else if (reading < -20) {
        //  a=left
        Kasoku_ofset = 2
        music.play(music.stringPlayable("- - - E - F - - ", 120), music.PlaybackMode.UntilDone)
    } else {
        //  a=y=x
        Kasoku_ofset = 0
    }
    
}

while (true) {
    reading = 0
    // プレイヤーの種類を示す値を保存
    Player_type = 1
    //  加速計用関数
    Kasoku_ofset = 0
    //  プレイヤーの状態保存用
    game_of_set = 0
    // ゲームの開始状態を保存
    Kasoku()
    //  加速計の傾き状態を保存
    if (Player_type == 1 && game_of_set == 1) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . .
            # . # . .
            `)
    } else if (Player_type == 2 && game_of_set == 1) {
        basic.showLeds(`
            # # # # #
            . # # . #
            # # # # #
            # . # . .
            # # # . .
            `)
    } else {
        basic.showLeds(`
                    . # . # .
                    . # . # .
                    . . . . .
                    # . . . #
                    . #  # # .
                    `)
        basic.pause(300)
        basic.showLeds(`
                        . . . . #
                        # # . # .
                        . . . . #
                        # . . . .
                        . #  # # .
                        `)
    }
    
    if (Kasoku_ofset == 1) {
        RingbitCar.freestyle(-10, 10)
    } else if (Kasoku_ofset == 2) {
        RingbitCar.freestyle(10, -10)
    }
    
}
