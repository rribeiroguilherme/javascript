function Verificar() {

    var data = new Date()
    var agora = data.getFullYear()
    var idade = document.getElementById('txano')
    var res = document.getElementById('res')
    
    if (idade.value.length == 0 || idade.value > agora){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var idadea = agora - Number(idade.value)
        
    }
    
    res.innerHTML(`Você tem ${idadea} anos.`)
}