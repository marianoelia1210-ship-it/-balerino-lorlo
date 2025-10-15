input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.TShirt)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Duck)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . # . # .
        # . . # #
        `)
})
