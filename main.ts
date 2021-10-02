let peso = 0
let Estatura = 0
let IMC = 0
input.onButtonPressed(Button.A, function () {
    peso += 1
    basic.showNumber(peso)
})
input.onGesture(Gesture.Shake, function () {
    peso = 74
    Estatura = 180
    basic.showNumber(peso)
    basic.showNumber(Estatura)
})
input.onButtonPressed(Button.AB, function () {
    IMC = 10000 * peso / (Estatura * Estatura)
    basic.showNumber(IMC)
    if (IMC < 18.5) {
        basic.showString("Delgado")
    } else if (IMC >= 18.5 && IMC <= 25) {
        basic.showString("Saludable")
    } else if (IMC > 25 && IMC <= 30) {
        basic.showString("Sobrepeso")
    } else if (IMC > 30) {
        basic.showString("Obeso")
    }
})
input.onButtonPressed(Button.B, function () {
    peso += -1
    basic.showNumber(peso)
})
