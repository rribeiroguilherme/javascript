function contar() {
    var res = document.getElementById('res')
    var ini = window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var cont = window.document.getElementById('cont')

    if (ini.value == 0 || fim.value == 0 || cont.value == 0) {
        window.alert('[ERRO] Falta dados!')
    } else {
        res.innerHTML = 'contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var cont = Number(cont.value)

       if (i < f) {
            for(var c = i;c <= f;c += cont) {
            res.innerHTML += ` ${c} 👉`
            }
       } else {
            for(c = i;c >= f; c -= cont) {
                    res.innerHTML += ` ${c} 👉` 
                }
            }
            res.innerHTML += `🏴`
    }   
}