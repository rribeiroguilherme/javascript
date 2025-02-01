

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    
    if(hora >= 0 && hora < 12){
        foto.innerHTML = '<img src="imagem-manha.jpg" alt="noite">';
    }
    else if(hora >= 12 && hora < 18){
        foto.innerHTML = '<img src="imagem-tarde.jpg" alt="tarde">';
    }
    else{
        foto.innerHTML = '<img src="imagem-noite.jpg" alt="noite">';
    }

    


    if(hora >= 0 && hora < 12){
        document.body.style.background = 'darkyellow'
    }
    else if(hora >= 12 && hora < 18){
        document.body.style.background = 'orange'
    }
    else{
       document.body.style.background = 'darkblue'
    }
    
}
