var ini = 1
var fim = 9
var cont = 2


    

    if (ini == 0 || fim == 0 || cont == 0) {
        window.alert('[ERRO] Falta dados!')
    } else {
        var i = Number(ini)
        var f = Number(fim)
        var cont = Number(cont)

        for(var c = i;c <= f;(c+c) + cont) {
            console.log(`${c}`)
        }
    }