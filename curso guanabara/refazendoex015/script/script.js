function Verificar() {

    var data = new Date()
    var agora = data.getFullYear()
    var idade = document.getElementById('txano')
    var res = document.getElementById('res')
    var idadea = agora - Number(idade.value)
    var sex = document.getElementsByName('radsex')
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute("id", "foto")
    if (idade.value.length == 0 || idade.value > agora){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        if (sex[0].checked) {
            genero = 'Homem'
            if (idadea >= 0 && idadea <= 10) {
                // criança
                img.setAttribute('src', 'imagens/criança-masc.jpg')
            } else if (idadea < 21) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (idadea < 50) {
                // adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso-masc.jpg')
            }
        } else if (sex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idadea <= 10) {
                // criança
                img.setAttribute('src', 'imagens/criança-fem.jpg')
            } else if (idadea < 21) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idadea < 50) {
                    // adulto
                    img.setAttribute('src', 'imagens/adulta-mulher.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idosa-fem.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idadea} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
        img.style.display = 'block'
    }
}