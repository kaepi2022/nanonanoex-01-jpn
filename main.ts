let reading: number;
//  Using Python 3.0
//  プレイヤーの種類を示す値を保存
let Player_type = 1
//  加速計用関数
let Kasoku_ofset = 0
//  プレイヤーの状態保存用
let game_of_set = 0
//  ゲームの開始状態を保存
function title_screen() {
    music.play(music.stringPlayable("G E F F C C A A ", 120), music.PlaybackMode.UntilDone)
    // 待機モーション
    if (game_of_set == 0) {
        basic.showLeds(`
                    . # . # .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    `)
        basic.pause(300)
        basic.showLeds(`
                    . . . . #
                    # # . # .
                    . . . . #
                    # . . . .
                    . # # # .
                    `)
    }
    
}

while (true) {
    title_screen()
    // Start Title
    if (Player_type == 1 && game_of_set == 1) {
        basic.showLeds(`
                            . # . # .
                            . # . # .
                            . . . . .
                            # . . . #
                            . # # # .
                            `)
    } else if (Player_type == 2 && game_of_set == 1) {
        basic.showLeds(`
            # # # # #
            . # # . #
            # # # # #
            # . # . .
            # # # . .
            `)
        reading = input.acceleration(Dimension.X)
        if (reading > 20 && game_of_set == 1) {
            RingbitCar.freestyle(-10, 10)
        } else if (reading < -20 && game_of_set == 1) {
            RingbitCar.freestyle(10, -10)
        } else {
            console.log("Hello")
        }
        
    }
    
}
