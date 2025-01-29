function verificar() {

    var data = new Date()
    var agora = data.getFullYear()
    var ano = document.getElementById('txano')
    var res = document.getElementById('res')

    if (ano.value.length == 0 || Number(ano.value) > agora) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
     } else {
            var fsex = document.getElementsByName('radsex')
            var idade = agora - Number(ano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                // criança
                img.setAttribute('src', 'criança-masc.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-masc.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <= 10) {
                // criança
                img.setAttribute('src', 'criança-fem.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulta-mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa-fem.jpg')
            }
        }  
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.style.paddingTop = '20px'
        res.appendChild(img)
        
        
    }      

}



