var cont = 0
var num = prompt("Type a number: ")
var num1 = parseInt(num)

while (cont < 3) {

    var cont2 = 0
    while (cont2 < 10) {
        console.log(num1, " x ", cont2 + 1, " = ", num1 * (cont2 + 1))
        cont2 += 1
    }
    num1 += 1
    cont += 1
}