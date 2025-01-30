function contar() {
    var n1 = document.getElementById('num1')
    var n2 = document.getElementById('num2')
    var passo = document.getElementById('pass')
    var res = document.getElementById('res')
   
    let i = Number(n1.value)
    let f = Number(n2.value)
    let p = Number(passo.value)

    for (let c = i; c <= f; c += p) {
        res.innerHTML = `${c}`
    }

}  