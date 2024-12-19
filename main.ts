let reading: number;
let game_of_set = 0
let Getplay = 0
let Kasoku_ofset = 0
let receivedNumber = 1
let Player_type = 1
let NanoProduct = 1
// 製品(2セットで1)別に割り当てる番号
radio.setGroup(NanoProduct)
function title_screen() {
    //  wtf?! why is this error hapeninng?!
    //  待機モーション
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
        basic.pause(200)
        basic.clearScreen()
        katakana.setScrollTime(30)
        katakana.showString("LONG PLESS AB TO PLAY")
    }
    
}

radio.onReceivedNumber(function on_received_number() {
    // シリアル処理
    music.play(music.stringPlayable("G A B C5 C5 - - - ", 300), music.PlaybackMode.UntilDone)
    basic.showLeds(`
                    # # # # #
                    . # # . #
                    # # # # #
                    # . # . .
                    # # # . .
                    `)
    basic.pause(1500)
    let Player_type = 2
})
while (true) {
    // プレイ開始を監視
    if (input.buttonIsPressed(Button.B) && game_of_set == 0) {
        basic.clearScreen()
        game_of_set = 1
        radio.sendNumber(1)
        Player_type = 1
        music.play(music.stringPlayable("G A B C5 C5 - - - ", 300), music.PlaybackMode.UntilDone)
        basic.showLeds(`
                            # . # # #
                            # . # . #
                            # . # # #
                            # . # . .
                            # . # . .
                            `)
        basic.pause(1500)
    } else if (game_of_set != 1) {
        title_screen()
    }
    
    // 加速度センサーとプレイ中モーション
    reading = input.acceleration(Dimension.X)
    if (reading > 100 && game_of_set == 1) {
        //  turn right
        RingbitCar.freestyle(-10, 10)
        basic.showLeds(`
                . # . . #
                # . . # .
                . . . . .
                # # . . .
                . . # # #
                `)
    } else if (reading < -100 && game_of_set == 1) {
        //  turn left
        RingbitCar.freestyle(10, -10)
        basic.showLeds(`
                # . . # .
                . # . . #
                . . . . .
                . . # # #
                # # . . .
                `)
    } else if (game_of_set == 1) {
        reading = 0
        basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        basic.pause(randint(500, 700))
        basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                # . . . #
                . # # # .
                `)
    }
    
    if (input.logoIsPressed()) {
        music.play(music.stringPlayable("C5 C5 A A - D D D ", 700), music.PlaybackMode.UntilDone)
    }
    
}
